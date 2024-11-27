import { MAX_FREE_COUNTS, MAX_PRO_COUNTS } from "@/consts";
import { prisma } from "./prisma";

export const incrementApiLimit = async (clerkId: string, value: number) => {
  if (!clerkId) {
    return;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: { clerkId },
  });

  if (userApiLimit) {
    await prisma.userApiLimit.update({
      where: { clerkId },
      data: { count: userApiLimit.count + value },
    });
  } else {
    await prisma.userApiLimit.create({
      data: { clerkId, count: value },
    });
  }
};

export const checkApiLimit = async (clerkId: string) => {
  if (!clerkId) {
    return false;
  }

  const userSubscription = await prisma.user.findUnique({
    where: { clerkId },
  })

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: { clerkId },
  });

  const MAX_COUNTS = userSubscription?.typePlan === 'pro' ? MAX_PRO_COUNTS : MAX_FREE_COUNTS

  if (!userApiLimit || userApiLimit.count < MAX_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiMaxLimitCount = async (clerkId: string) => {
  if (!clerkId) {
    return 0;
  }

  const userSubscription = await prisma.user.findUnique({
    where: { clerkId },
  })

  const MAX_COUNTS = userSubscription?.typePlan === 'pro' ? MAX_PRO_COUNTS : MAX_FREE_COUNTS

  return MAX_COUNTS
}

export const getApiLimitCount = async (clerkId: string) => {
  if (!clerkId) {
    return 0;
  }

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      clerkId
    }
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
