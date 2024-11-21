import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { getApiLimitCount, getApiMaxLimitCount } from "@/lib/api-limit";
import { checkSubscriptionPremium } from "@/lib/subscription";
import { currentUser } from "@clerk/nextjs/server";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"

// export const metadata: Metadata = {
//   title: 'Easy IA',
//   description: 'Crie Imagens e GIFs Incríveis com IA | Acesso ao GPT-4',
// }

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await currentUser()
  const apiLimitCount = await getApiLimitCount(user?.id as string);
  const isPremium = await checkSubscriptionPremium(user?.id as string);
  const maxLimitCount = await getApiMaxLimitCount(user?.id as string)

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {/* @ts-ignore */}
        <Navbar />
        {children}
      </main>
      </SidebarProvider>

  )
}
