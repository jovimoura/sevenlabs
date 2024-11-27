"use client";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { UpgradeButton } from "@/components/upgrade-button";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { PLANS } from "@/config/stripe";  
import { cn, REVIEWS } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  ChevronRight,
  HelpCircle,
  Minus,
  StarIcon,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";

import { useUser } from "@clerk/nextjs";
import { AnimatedContainer } from "@/components/ui/animated-container";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { SectionBadge } from "@/components/ui/section-badge";
import { LampContainer } from "@/components/ui/lamp-container";
import MagicCard from "@/components/ui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RetroGrid from "@/components/ui/retro-grid";
import { Header } from "@/components/header";
import { pricingItems } from "@/consts";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <AnimatedContainer>
      <Header />
        <div className="mb-12 pb-20 md:pb-0 md:mt-20 flex flex-col items-center justify-center text-center">
          <div className="relative flex h-[500px] md:h-[600px] w-full flex-col shadow-none items-center justify-center overflow-hidden  bg-background">
            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
              <span>
                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
              </span>
              <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
              <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
              <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                <Image
                  src="/icons/sparkles-dark.svg"
                  alt="✨"
                  width={24}
                  height={24}
                  className="w-4 h-4"
                />
                Introducing SevenLabz
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
            <h1 className="mt-10 max-w-4xl text-4xl font-bold md:text-6xl lg:text-7xl">
              Create the most realistic speech with our AI audio platform
            </h1>

            <p className="mt-5 max-w-prose sm:text-lg">
              Pioneering research in Text to Speech, AI Voice Generator, and more
            </p>

            <RetroGrid />
          </div>
        </div>
      </AnimatedContainer>

      <AnimatedContainer>
        <MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
          <div className="relative flex items-center py-10 md:py-20 w-full">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <Image
                src="/dashboard.png"
                alt="banner image"
                width={1200}
                height={1200}
                quality={100}
                className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
              />

              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          </div>
        </MaxWidthWrapper>
      </AnimatedContainer>

      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* PRICING SECTION */}
      <AnimatedContainer>
        <MaxWidthWrapper className="mb-8 text-center max-w-5xl">
          <AnimatedContainer delay={0.1}>
            <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
              <SectionBadge title="Simple Pricing" />
              <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                Choose a plan that works for you
              </h2>
              <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                From individual creators to the biggest enterprises, we have a plan for you.
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
                        {plan === "Free" ? (
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

      {/* REVIEWS SECTION */}
      <MaxWidthWrapper className="py-10">
        <AnimatedContainer delay={0.1}>
          <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
            <SectionBadge title="Our Customers" />
            <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
              What our users are saying
            </h2>
            <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Here&apos;s what some of our users have to say about SevenLabz.
            </p>
          </div>
        </AnimatedContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(0, 3).map((review, index) => (
              <AnimatedContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className="md:p-0">
                  <Card className="flex flex-col w-full border-none h-min">
                    <CardHeader className="space-y-0">
                      <CardTitle className="text-lg font-medium text-muted-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription>{review.username}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-muted-foreground">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimatedContainer>
            ))}
          </div>
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(3, 6).map((review, index) => (
              <AnimatedContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className="md:p-0">
                  <Card className="flex flex-col w-full border-none h-min">
                    <CardHeader className="space-y-0">
                      <CardTitle className="text-lg font-medium text-muted-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription>{review.username}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-muted-foreground">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimatedContainer>
            ))}
          </div>
          <div className="flex flex-col items-start h-min gap-6">
            {REVIEWS.slice(6, 9).map((review, index) => (
              <AnimatedContainer delay={0.2 * index} key={index}>
                <MagicCard key={index} className="md:p-0">
                  <Card className="flex flex-col w-full border-none h-min">
                    <CardHeader className="space-y-0">
                      <CardTitle className="text-lg font-medium text-muted-foreground">
                        {review.name}
                      </CardTitle>
                      <CardDescription>{review.username}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pb-4">
                      <p className="text-muted-foreground">{review.review}</p>
                    </CardContent>
                    <CardFooter className="w-full space-x-1 mt-auto">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <StarIcon
                          key={i}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </CardFooter>
                  </Card>
                </MagicCard>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      <AnimatedContainer>
        <LampContainer className="mt-32">
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
              Making content <br /> universally accessible
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
            From Text to Speech to AI dubbing, our tools bridge language gaps, restore voices to those who have lost them, and make digital interactions feel more human, transforming the way we connect online.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/sign-in">
                Get started for free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </LampContainer>
      </AnimatedContainer>
      <Footer />
    </>
  );
}
