import type { Metadata } from "next";
import { HeroUIProvider } from "@heroui/react";

import "../../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/sidebar";

export const metadata: Metadata = {
  title: "CRM",
  description: "Generated by create next app",
};

export default function CRMLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <HeroUIProvider className="w-full">
        <section className="w-full pt-6 md:max-w-[80%] max-w-[96%] mx-auto">
          {children}
        </section>
      </HeroUIProvider>
    </SidebarProvider>
  );
}
