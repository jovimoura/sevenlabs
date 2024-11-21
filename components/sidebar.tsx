"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  AudioLines,
  Mic,
  MicVocal,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";
import { buttonVariants } from "./ui/button";

const routes = [
  {
    label: "Text to Speech",
    icon: Mic,
    href: "/app/text-to-speech",
    color: "text-black",
  },
  {
    label: "Voices",
    icon: MicVocal,
    href: "/app/voices",
    color: "text-black",
  },
  {
    label: "Sound Effects",
    icon: AudioLines,
    href: "/app/sound-effects",
    color: "text-black",
  },
];

interface Props {
  apiLimitCount: number;
  isPremium: boolean;
  maxLimitCount: number;
}

export const Sidebar = ({ apiLimitCount = 0, isPremium = false, maxLimitCount }: Props) => {
  const pathname = usePathname();

  return (
    <div className='space-y-4 py-4 flex flex-col h-full'>
      <div className='px-3 py-2 flex-1'>
        {/* <Logo link="/dashboard" className="items-center justify-start mb-10" /> */}
        <div className='space-y-1 flex flex-col'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(buttonVariants({
                variant: "ghost",
                size: "sm",
              }), pathname === route.href ? "bg-accent text-accent-foreground" : "")}
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter maxLimitCount={maxLimitCount} apiLimitCount={apiLimitCount} isPremium={isPremium} />
    </div>
  );
};
