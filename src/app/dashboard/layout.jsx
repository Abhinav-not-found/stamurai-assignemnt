import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

const layout = ({children}) => {
  return (
    
    <SidebarProvider>
    <AppSidebar />
    <main className="flex items w-full mr-10 pt-2">
      <SidebarTrigger className={'cursor-pointer'} />
      {children}
    </main>
  </SidebarProvider>
  )
}

export default layout

