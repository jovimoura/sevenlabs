"use client";

import { buttonVariants } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { AnimatedContainer } from "./ui/animated-container";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { MobileSidebar } from "./mobile-sidebar";

export const Header = () => {
  const { user } = useUser();

  const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 8) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <header
    className={cn(
      "sticky top-0 exclude-print inset-x-0 h-14 w-full border-b border-transparent z-[9999] select-none",
      scroll && "border-background/80 bg-background/40 backdrop-blur-md"
  )}
    >
      <AnimatedContainer reverse className="size-full">
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Logo href={!user ? "/" : "/app/text-to-speech"} />
          </div>
          <MobileSidebar user={user} />
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center gap-2">
              {!user ? (
                <>
                  <Link
                    href="/app/text-to-speech"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    Login
                  </Link>
                  <Link
                    href="/app/text-to-speech"
                    className={buttonVariants({
                      size: "sm",
                    })}
                  >
                    Get Started
                    <ArrowRight className="ml-1.5 h-5 w-5" />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/app/text-to-speech"
                    className={buttonVariants({
                      size: "sm",
                    })}
                  >
                    GO TO APP
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </AnimatedContainer>
    </header>
  );
};
