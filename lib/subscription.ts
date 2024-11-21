import { prisma } from "@/lib/prisma";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async (clerkId: string) => {
  if (!clerkId) {
    return false;
  }

  const userSubscription = await prisma.user.findUnique({
    where: {
      clerkId
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  })

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid;
};

export const checkSubscriptionPremium = async (clerkId: string) => {
  if (!clerkId) {
    return false;
  }

  const userSubscription = await prisma.user.findUnique({
    where: {
      clerkId
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
      typePlan: true
    },
  })

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now() &&
    userSubscription.typePlan === 'premium'

  return !!isValid;
};

export const checkPlan = async (clerkId: string) => {
  if (!clerkId) {
    return false;
  }

  const userSubscription = await prisma.user.findUnique({
    where: {
      clerkId
    }
  })

  if (!userSubscription) {
    return false;
  }

  const plan = userSubscription.typePlan

  return plan;
};
