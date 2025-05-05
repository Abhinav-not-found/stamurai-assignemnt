import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar>
      {/* <SidebarHeader /> */}
      <SidebarContent>
        {/* <SidebarGroup /> */}
        <div className="bg-gray-50 h-full w-full">
          <p>Task Manager</p>
          <div className="flex flex-col">
            <Link href={'/dashboard'}>Dashboard</Link>
            <Link href={'/dashboard/my-tasks'}>My tasks</Link>
          </div>
        </div>
        {/* <SidebarGroup /> */}
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  )
}
