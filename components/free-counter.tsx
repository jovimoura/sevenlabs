import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useProModal } from "@/hooks/use-pro-modal";

interface Props {
  isPremium: boolean;
  apiLimitCount: number;
  maxLimitCount: number;
}

export const FreeCounter = ({ isPremium = false, apiLimitCount = 0, maxLimitCount }: Props) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (isPremium) {
    return null;
  }

  const label = `${apiLimitCount} / ${maxLimitCount} Gerações ${maxLimitCount > 5 ? '': 'Gratuitas'}`

  return (
    <div className='px-3'>
      <Card className='bg-white/10 border-0'>
        <CardContent className='py-6'>
          <div className='text-center text-sm text-white mb-4 space-y-2'>
            <p>
              {label}
            </p>
            <Progress
              className='h-3'
              value={(apiLimitCount / maxLimitCount) * 100}
            />
          </div>
          <Button
            onClick={proModal.onOpen}
            // variant='premium'
            className='w-full'
          >
            Upgrade
            <Zap className='w-4 h-4 ml-2 fill-white' />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
