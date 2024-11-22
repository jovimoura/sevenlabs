import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Text to Speech & AI Voice Generator | SevenLabz",
  description: "Create the most realistic speech with our AI audio in 1000s of voices and 32 languages. Pioneering research in Text to Speech and AI Voice Generation",
  icons: '/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={font.className}
      >
        <Toaster />
        <Providers
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
