"use client";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { UpgradeButton } from "@/components/upgrade-button";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS } from "@/config/stripe";
import { cn } from "@/lib/utils";

import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { pricingItems } from "@/consts";

const Page = () => {
  const { user } = useUser();

  return (
    <>
      <AnimatedContainer>
        <MaxWidthWrapper className="mb-8 text-center max-w-5xl">
          <AnimatedContainer delay={0.1}>
            <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
              <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                Choose a plan that works for you
              </h2>
              <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                Whether you&lsquo;re just trying out our service or need more,
                we've got you covered.
              </p>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.2}>
            <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <TooltipProvider>
                {pricingItems.map(({ plan, tagline, credits, features }) => {
                  const price =
                    PLANS.find((p) => p.slug === plan.toLowerCase())?.price
                      .amount || 0;

                  return (
                    <div
                      key={plan}
                      className={cn("relative rounded-2xl bg-white shadow-lg", {
                        "border-2 border-primary shadow-violet-200":
                          plan === "Pro",
                        "border border-gray-200": plan !== "Pro",
                      })}
                    >
                      {plan === "Pro" && (
                        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-primary to-gray-200 px-3 py-2 text-sm font-medium text-white">
                          Upgrade Now
                        </div>
                      )}

                      <div className="p-5">
                        <h3 className="my-3 text-center font-display text-3xl text-black font-bold">
                          {plan}
                        </h3>
                        <p className="text-muted-foreground">{tagline}</p>
                        <p className="my-5 font-display text-6xl font-semibold text-gray-900">
                          {price}
                          <span className="font-normal text-base mr-1 text-gray-900">
                            $
                          </span>
                        </p>
                        <p className="text-muted-foreground">per month</p>
                      </div>

                      <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                        <div className="flex items-center space-x-1">
                          <p className="text-muted-foreground">
                            {credits} credits/month included
                          </p>

                          <Tooltip delayDuration={300}>
                            <TooltipTrigger className="cursor-default ml-1.5">
                              <HelpCircle className="h-4 w-4 text-zinc-500" />
                            </TooltipTrigger>
                            <TooltipContent className="w-80 p-2">
                              How many credits you can have/create.
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>

                      <ul className="my-10 space-y-5 px-8">
                        {features.map(({ text, footnote, negative }) => (
                          <li key={text} className="flex space-x-5">
                            <div className="flex-shrink-0">
                              {negative ? (
                                <Minus className="h-6 w-6 text-gray-300" />
                              ) : (
                                <Check className="h-6 w-6 text-primary" />
                              )}
                            </div>
                            {footnote ? (
                              <div className="flex items-center space-x-1">
                                <p
                                  className={cn("text-gray-600 text-left", {
                                    "text-gray-400": negative,
                                  })}
                                >
                                  {text}
                                </p>
                                <Tooltip delayDuration={300}>
                                  <TooltipTrigger className="cursor-default ml-1.5">
                                    <HelpCircle className="h-4 w-4 text-zinc-500" />
                                  </TooltipTrigger>
                                  <TooltipContent className="w-80 p-2">
                                    {footnote}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ) : (
                              <p
                                className={cn("text-gray-600", {
                                  "text-gray-400": negative,
                                })}
                              >
                                {text}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-gray-200" />
                      <div className="p-5">
                        {plan === "Gratuito" ? (
                          <Link
                            href={user ? "/app/text-to-speech" : "/sign-in"}
                            className={buttonVariants({
                              className: "w-full",
                              variant: "secondary",
                            })}
                          >
                            {user
                              ? "Get Started"
                              : "Get Started - It&lsquo;free"}
                            <ArrowRight className="h-5 w-5 ml-1.5" />
                          </Link>
                        ) : user ? (
                          <UpgradeButton />
                        ) : (
                          <Link
                            href="/sign-in"
                            className={buttonVariants({
                              className: "w-full",
                            })}
                          >
                            {user ? "Upgrade Now" : "Get Started"}
                            <ArrowRight className="h-5 w-5 ml-1.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </TooltipProvider>
            </div>
          </AnimatedContainer>
        </MaxWidthWrapper>
      </AnimatedContainer>
    </>
  );
};

export default Page;
