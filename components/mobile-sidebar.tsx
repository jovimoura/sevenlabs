"use client";

import { ArrowRight, Gem, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
export const MobileSidebar = ({ user }: { user: any }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="space-y-4 py-4 flex flex-col h-full">
          <div className="px-3 py-2 flex-1">
            <div className="space-y-1 flex flex-col mt-10">
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
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
