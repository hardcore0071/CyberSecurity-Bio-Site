"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Terminal, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Expertise", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-emerald-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Terminal className="h-8 w-8 text-emerald-500 group-hover:scale-110 transition-transform floating-icon" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground font-mono">
                <span className="text-emerald-500">Umar</span>
                <span className="text-cyan-500">Mushtaq</span>
              </span>
              <span className="text-xs text-muted-foreground font-mono">Red Team Specialist</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-muted-foreground hover:text-emerald-500 transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-emerald-500" /> : <Menu className="h-6 w-6 text-emerald-500" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 rounded-lg mx-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animation: `slideInLeft 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 opacity-50" />
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
