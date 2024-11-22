import { AudioLines, ChevronUp, Mic, MicVocal, User2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserAccount } from "../user-account";
import { getUserSubscriptionPlan } from "@/lib/stripe";

const items = [
  {
    title: "Text to Speech",
    icon: Mic,
    url: "/app/text-to-speech",
    beta: false
  },
  {
    title: "Voices",
    icon: MicVocal,
    url: "/app/voices",
    beta: true
  },
  {
    title: "Sound Effects",
    icon: AudioLines,
    url: "/app/sound-effects",
    beta: true
  },
];

export async function AppSidebar() {
  const { userId: clerkId } = await auth();
  const user = await currentUser();
  const subscriptionPlan = await getUserSubscriptionPlan(clerkId!);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-2">
          <span className="text-lg font-bold text-black">7SevenLabz</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CREATE</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a aria-disabled={item.beta} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                      {item.beta && <span className="inline-flex items-center rounded-full border border-transparent px-2 py-0.5 font-medium transition-colors whitespace-nowrap focus-ring bg-gray-200 text-dark text-xs">Beta</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {user && (
              <UserAccount
                user={{
                  name: user.firstName as string,
                  avatar: user?.imageUrl ?? "",
                  email: user?.emailAddresses[0].emailAddress || "",
                }}
                // name={
                //   !user?.firstName
                //     ? "Sua Conta"
                //     : `${user.firstName} ${user.lastName}`
                // }
                // email={user?.emailAddresses[0].emailAddress || ""}
                // imageUrl={user?.imageUrl ?? ""}
                // subscriptionPlan={subscriptionPlan}
              />
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
