"use client";

import { Voice } from "elevenlabs/api";

import VoiceList from "@/components/voice-list";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTTSStore } from "@/store/use-tts-store";
import { useState } from "react";
import { DownloadIcon, Loader2Icon, SparklesIcon } from "lucide-react";
import axios from "axios";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";

export default function TextToSpeech({
  voices,
  history,
}: {
  voices: Voice[];
  history: any;
}) {
  const router = useRouter()
  const { text, voice, setText } = useTTSStore();

  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        "/api/generate",
        {
          text,
          voice,
        },
        {
          responseType: "blob",
        }
      );

      router.refresh()

      const audioBlob = res.data;
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (audioUrl) {
      const a = document.createElement("a");
      a.href = audioUrl;
      a.download = "tts_audio.mp3";
      a.click();
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Textarea
          maxLength={5000}
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing here or paste any text you want to turn into lifelike speech..."
          className="border-none outline-none focus-visible:ring-0 focus-visible:ring-transparent shadow-none min-h-[calc(100vh-70px)] p-4 md:p-8 resize-none"
        />
        <div className="w-1/2 border-l p-4 md:p-8 flex flex-col gap-4">
          <div className="space-y-2">
            <Label>Voices</Label>
            <VoiceList voices={voices} />
          </div>
          <Button type="submit" disabled={isLoading || !text || !voice}>
            {isLoading ? (
              <div className="flex items-center space-x-3">
                <span>Generating speech</span>
                <Loader2Icon className="animate-spin size-5" />
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span>Generate speech</span>
                <SparklesIcon className="size-5" />
              </div>
            )}
          </Button>

          {audioUrl && (
            <div className="flex items-center space-x-3 mt-8">
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
              </audio>

              <Button
                onClick={handleDownload}
                size="icon"
              >
                <DownloadIcon className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </form>

      
    </div>
  );
}
