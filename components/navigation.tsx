"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/infographic", label: "Governance" },
  { href: "/dashboard", label: "Athletes" },
  { href: "/legacy", label: "Legacy" },
  { href: "/innovation", label: "Innovation" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/80" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6 lg:px-8">
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-purple to-blue shadow-lg md:h-12 md:w-12">
            <span className="text-base font-bold text-white md:text-lg">P24</span>
            <div className="absolute inset-0 bg-gold/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-foreground md:text-lg">Paris 2024</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Olympic Games</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 lg:px-4",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple via-blue to-gold" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="relative md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={cn(
            "absolute transition-all duration-200",
            mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          )}>
            <Menu className="h-5 w-5" />
          </span>
          <span className={cn(
            "absolute transition-all duration-200",
            mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          )}>
            <X className="h-5 w-5" />
          </span>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                style={{ 
                  animationDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  animation: mobileMenuOpen ? "fadeInUp 0.3s ease-out forwards" : "none"
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
