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
      review: "SevenLabz is a game-changer! My ATS-optimized resume got me more interviews than ever before. It's a must-have for any job seeker."
  },
  {
      name: "Emily Johnson",
      username: "@emilyjohnson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 4,
      review: "Great tool for creating professional resumes. SevenLabz helped me tailor my CV to pass ATS scans. Landed my dream job thanks to it!"
  },
  {
      name: "Daniel Williams",
      username: "@danielwilliams",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      review: "I've been using SevenLabz for months. The ATS insights it provides are invaluable. My application success rate has skyrocketed!"
  },
  {
      name: "Sophia Brown",
      username: "@sophiabrown",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 4,
      review: "SevenLabz is fantastic! It offers everything I need to create an ATS-friendly resume. Definitely improved my job search."
  },
  {
      name: "James Taylor",
      username: "@jamestaylor",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      review: "Absolutely love SevenLabz! It's intuitive and powerful. Has significantly improved how I present myself to potential employers."
  },
  {
      name: "Olivia Martinez",
      username: "@oliviamartinez",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 4,
      review: "SevenLabz has great potential. It has already helped me secure several interviews. Looking forward to more features!"
  },
  {
      name: "William Garcia",
      username: "@williamgarcia",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 5,
      review: "SevenLabz is a game-changer for job applications. Easy to use, extremely effective in optimizing for ATS. Highly recommended!"
  },
  {
      name: "Mia Rodriguez",
      username: "@miarodriguez",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4,
      review: "I've tried several resume builders, but SevenLabz stands out. It's simple, effective, and really helps with ATS optimization."
  },
  {
      name: "Henry Lee",
      username: "@henrylee",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5,
      review: "SevenLabz has transformed my job search. Creating ATS-friendly resumes is now a breeze. I can't imagine applying without it."
  },
] as const;

