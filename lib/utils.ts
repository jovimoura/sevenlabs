import internal from "stream";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const prodUrl = process.env.URL as string || `https://yoresume.work`

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function streamToBuffer(
  stream: internal.Readable
): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

export function absoluteUrl(path: string) {
  return process.env.NODE_ENV === 'production' ? `${prodUrl}${path}` : `https://yoresume.work${path}`
}
