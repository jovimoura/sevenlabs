import internal from "stream";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

const prodUrl = process.env.URL as string || `https://sevenlabz.vercel.app`

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
  return process.env.NODE_ENV === 'production' ? `${prodUrl}${path}` : `https://sevenlabz.vercel.app${path}`
}

export const REVIEWS = [
  {
      name: "Michael Smith",
      username: "@michaelsmith",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      review: "SevenLabz is revolutionary! The AI-powered text-to-audio feature has transformed how I consume content. It's a must-try for anyone!"
  },
  {
      name: "Emily Johnson",
      username: "@emilyjohnson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4,
      review: "Fantastic tool for converting text to audio. SevenLabz made it easy for me to listen to articles on the go. Highly recommend!"
  },
  {
      name: "Daniel Williams",
      username: "@danielwilliams",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      review: "I've been using SevenLabz for a while now. The audio quality is exceptional, and the AI voice is incredibly natural!"
  },
  {
      name: "Sophia Brown",
      username: "@sophiabrown",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      review: "SevenLabz is amazing! It allows me to multitask while listening to my favorite articles. A game-changer for productivity."
  },
  {
      name: "James Taylor",
      username: "@jamestaylor",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      review: "Absolutely love SevenLabz! The AI-generated audio is intuitive and powerful. It has changed how I engage with written content."
  },
  {
      name: "Olivia Martinez",
      username: "@oliviamartinez",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      review: "SevenLabz has great potential. It has helped me consume more information efficiently. Excited for future updates!"
  },
  {
      name: "William Garcia",
      username: "@williamgarcia",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      review: "SevenLabz is a game-changer for audio content. It's easy to use and incredibly effective. Highly recommended for anyone!"
  },
  {
      name: "Mia Rodriguez",
      username: "@miarodriguez",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4,
      review: "I've tried several text-to-audio tools, but SevenLabz stands out. It's simple, effective, and really enhances my learning."
  },
  {
      name: "Henry Lee",
      username: "@henrylee",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5,
      review: "SevenLabz has transformed my daily routine. Listening to articles is now a breeze. I can't imagine my day without it."
  },
] as const;

