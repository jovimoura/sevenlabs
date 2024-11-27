import { PLANS } from "./config/stripe";

export const MAX_FREE_COUNTS = 100;
export const MAX_PRO_COUNTS = 10000;

export const pricingItems = [
  {
    plan: "Free",
    tagline: "For individuals who want to try out the most advanced AI audio",
    credits: PLANS.find((p) => p.slug === "free")!.credits,
    features: [
      {
        text: "10 minutes of ultra-high quality text to speech per month",
        footnote: "High-quality audios made with the best AI tool.",
      },
      {
        text: "Create custom, synthetic voices.",
      },
      {
        text: "API access.",
      },
      {
        text: "Mobile-friendly interface.",
      },
      {
        text: "Clone your voice with as little as 1 minute of audio",
        negative: true,
      },
      {
        text: "Access to the Dubbing Studio for more control over translation & timing",
        negative: true,
      },
    ],
  },
  {
    plan: "Pro",
    tagline: "For creators making premium content for global audiences",
    credits: PLANS.find((p) => p.slug === "pro")!.credits,
    features: [
      {
        text: "30 minutes of ultra-high quality text to speech per month",
        footnote: "High-quality audios made with the best AI tool.",
      },
      {
        text: "Create custom, synthetic voices.",
      },
      {
        text: "Access to the Dubbing Studio for more control over translation & timing",
      },
      {
        text: "Mobile-friendly interface.",
      },
      {
        text: "License to use ElevenLabs for commercial use",
      },
    ],
  },
];