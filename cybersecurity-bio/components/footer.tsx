import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-sidebar-primary" />
            <span className="text-lg font-bold text-sidebar-foreground">Umar Mushtaq</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-sidebar-foreground/80">© 2024 Umar Mushtaq. All rights reserved.</p>
            <p className="text-xs text-sidebar-foreground/60 mt-1">Cybersecurity Expert & Security Consultant</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-sidebar-border text-center">
          <p className="text-xs text-sidebar-foreground/60">
            Built with security in mind. Protecting digital assets worldwide.
          </p>
        </div>
      </div>
    </footer>
  )
}
