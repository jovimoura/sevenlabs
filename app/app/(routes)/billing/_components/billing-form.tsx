"use client";

import { getUserSubscriptionPlan } from "@/lib/stripe";
import { useToast } from "@/hooks/use-toast";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createStripeSession } from "@/app/app/actions";

interface BillingFormProps {
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

export const BillingForm = ({ subscriptionPlan }: BillingFormProps) => {
  const { toast } = useToast();

  const router = useRouter();
  const searchParams = useSearchParams();
  const params = searchParams.get("success");

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateStripeSession = async () => {
    setIsLoading(true);
    const { url, error } = await createStripeSession();

    if (error) {
      toast({
        title: "Error in method Payment",
        description: "Please try again later.",
        variant: "destructive",
      });
      setIsLoading(false);
    }

    setIsLoading(false);
    window.location.href = url ?? "/dashboard/billing";
  };

  useEffect(() => {
    if (params === "true") {
      router.refresh();
      toast({
        title: "Congratulations",
        description: "Enjoy the most of SevenLabz!",
        variant: "default",
      });
    }
  }, []);

  return (
    <MaxWidthWrapper className="max-w-5xl">
      <form
        className="mt-12"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateStripeSession();
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Subscription Plan</CardTitle>
            <CardDescription>
              You are currently on the plan:{" "}
              <strong>{subscriptionPlan.name}</strong>.
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex flex-col items-start space-y-2 md:flex-row md:justify-between md:space-x-0">
            <Button type="submit">
              {isLoading ? (
                <Loader2 className="mr-4 h-4 w-4 animate-spin" />
              ) : null}
              {subscriptionPlan.isSubscribed
                ? "Manage Subscription"
                : "Upgrade to PRO"}
            </Button>

            {subscriptionPlan.isSubscribed ? (
              <p className="rounded-full text-xs font-medium">
                {subscriptionPlan.isCanceled
                  ? "Your plan will be canceled on "
                  : "Your plan renews on "}
                {format(subscriptionPlan.stripeCurrentPeriodEnd!, "dd.MM.yyyy")}
                .
              </p>
            ) : null}
          </CardFooter>
        </Card>
      </form>
    </MaxWidthWrapper>
  );
};
