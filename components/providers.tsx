'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {/* <Nprogress /> */}
      <TooltipProvider>
        {children}
      </TooltipProvider>
    </NextThemesProvider>
  )
}
