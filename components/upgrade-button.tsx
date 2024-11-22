"use client"

import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { createStripeSession } from '@/app/app/actions'
import { useToast } from '@/hooks/use-toast'

export const UpgradeButton = () => {
  const { toast } = useToast()

  const handleCreateStripeSession = async () => {
    const { url, error } = await createStripeSession()

    if (error) {
      toast({
        title: 'Error in method Payment',
        description: 'Please try again later.',
        variant: "destructive"
      })
    }

    window.location.href = url ?? "/dashboard/billing"
  }

  return (
    <Button onClick={handleCreateStripeSession} className='w-full'>
      Upgrade <ArrowRight className='h-5 w-5 ml-1.5' />
    </Button>
  )
}