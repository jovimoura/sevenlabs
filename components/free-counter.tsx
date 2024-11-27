'use client'

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { createStripeSession } from "@/app/app/actions";
import { CreditsRemaining } from "./credits-remaing";

interface Props {
  isPremium: boolean;
  apiLimitCount: number;
  maxLimitCount: number;
}

export const FreeCounter = ({ isPremium = false, apiLimitCount = 0, maxLimitCount }: Props) => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
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
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className=''>
      <Card className='bg-white/10 border-0 shadow-none p-0'>
        <CardContent className='px-4'>
          <div className='text-center text-sm mb-4 space-y-2'>
            <CreditsRemaining credits={maxLimitCount - apiLimitCount} maxCredits={maxLimitCount} />
          </div>
          {!isPremium && <Button
            onClick={e => {
              e.preventDefault()
              handleCreateStripeSession()
            }}
            // variant='premium'
            className='w-full'
          >
            <Sparkles />
            Upgrade to Pro
          </Button>}
        </CardContent>
      </Card>
    </div>
  );
};
