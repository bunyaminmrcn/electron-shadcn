import React from "react";


import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar>
                <SidebarTrigger />
                {children}
            </AppSidebar>
        </SidebarProvider>
    );
}
