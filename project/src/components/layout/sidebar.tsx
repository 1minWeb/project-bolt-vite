// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, ClipboardList, FileSpreadsheet, Settings, Users, Building2 } from "lucide-react"
import { NavLink } from "./nav-link"
export function Sidebar() {
  return (
    <div className={`fixed left-0 top-0 z-20 h-full w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 `}>
      {/* <Button onClick={toggleSidebar} className="absolute top-4 right-4 z-30">
        <MenuSquare className="h-6 w-6" />
      </Button> */}
      <ScrollArea className="h-full py-6">
        <div className="flex items-center gap-2 px-6 py-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">JobFlow Pro</span>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              <NavLink href="#" icon={LayoutDashboard}>Dashboard</NavLink>
              <NavLink href="#" icon={ClipboardList} active>Jobs</NavLink>
              <NavLink href="#" icon={Users}>Clients</NavLink>
              <NavLink href="#" icon={FileSpreadsheet}>Reports</NavLink>
              <NavLink href="#" icon={Settings}>Settings</NavLink>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}