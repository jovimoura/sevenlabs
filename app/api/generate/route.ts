import { elevenlabs } from "@/lib/elevenlabs";
import { streamToBuffer } from "@/lib/utils";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import { Client, Storage } from "appwrite";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { checkApiLimit, incrementApiLimit } from "@/lib/api-limit";
import { checkSubscriptionPremium } from "@/lib/subscription";

type ResultStorage = {
  $id: string;
  bucketId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  name: string;
  signature: string;
  mimeType: string;
  sizeOriginal: number;
  chunksTotal: number;
  chunksUploaded: number;
}

const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT as string)
    .setProject(process.env.APPWRITE_PROJECT as string);

const storage = new Storage(client);

export async function POST(req: Request) {
  const { userId } = await auth()
  const { text, voice } = await req.json();

  if (!userId) return new NextResponse('Unauthorized', { status: 500 });

  const audio = await elevenlabs.generate({
    voice,
    text,
    model_id: "eleven_multilingual_v2",
  });

  const audioBuffer = await streamToBuffer(audio);
  
  // Criar um Blob a partir do buffer
  const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
  const audioFile = new File([audioBlob], `${uuidv4()}.mp3`, { type: 'audio/mpeg' });

  try {
    const result: ResultStorage = await storage.createFile(
      process.env.APPWRITE_STORAGE as string,
      uuidv4(),
      audioFile
      
    );

    const trials = await checkApiLimit(userId);
    const isPremium = await checkSubscriptionPremium(userId);

    if (!trials && !isPremium) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }
    console.log('RESULT', result)
    const clerkId = userId

    const newAudio = await prisma.audio.create({
      data: {
        audioId: result.$id,
        bucketId: result.bucketId,
        permissions: result.$permissions,
        name: result.name,
        signature: result.signature,
        mimeType: result.mimeType,
        sizeOriginal: result.sizeOriginal,
        chunksTotal: result.chunksTotal,
        chunksUploaded: result.chunksUploaded,
        text,
        clerkId,
      }
    })

    await incrementApiLimit(clerkId, text.length)

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    console.error('Erro ao salvar arquivo:', error);
    return new NextResponse('Erro ao salvar arquivo', { status: 500 });
  }
}
