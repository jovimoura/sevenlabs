import { auth } from "@clerk/nextjs/server";
import { BillingForm } from "./_components/billing-form";
import { getUserSubscriptionPlan } from "@/lib/stripe";

const Page = async () => {
  const { userId } = await auth();
  const subscriptionPlan = await getUserSubscriptionPlan(userId!);

  return <BillingForm subscriptionPlan={subscriptionPlan} />;
};

export default Page;
