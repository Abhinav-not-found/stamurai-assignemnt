import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      {/* <SidebarHeader /> */}
      <SidebarContent>
        {/* <SidebarGroup /> */}
        <div className="bg-gray-50 h-full w-full">
          <p>logo</p>
        </div>
        {/* <SidebarGroup /> */}
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  )
}
