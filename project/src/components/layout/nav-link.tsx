import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavLinkProps {
  href: string
  icon: LucideIcon
  children: React.ReactNode
  active?: boolean
}

export function NavLink({ href, icon: Icon, children, active }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "w-full justify-start gap-2",
        active && "bg-accent text-accent-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {children}
    </a>
  )
}