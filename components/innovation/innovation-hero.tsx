"use client"

import { Lightbulb, Cpu, Leaf, Tv, Shield } from "lucide-react"

const highlights = [
  { icon: Cpu, label: "AI Systems", value: "32 Sports" },
  { icon: Leaf, label: "Green Tech", value: "95% Reused" },
  { icon: Tv, label: "8K Events", value: "45 Broadcasts" },
  { icon: Shield, label: "Smart Security", value: "8,000+ Cameras" },
]

export function InnovationHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-16 w-16 animate-pulse rounded-full bg-primary-foreground/5" />
        <div className="absolute right-[15%] top-[30%] h-24 w-24 animate-pulse rounded-full bg-primary-foreground/5" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[25%] left-[20%] h-20 w-20 animate-pulse rounded-full bg-primary-foreground/5" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[30%] right-[10%] h-12 w-12 animate-pulse rounded-full bg-primary-foreground/5" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-5 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <Lightbulb className="h-4 w-4" />
            <span>Interactive Technology Report</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            Innovation at
            <span className="relative ml-3">
              Paris 2024
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M2 8 Q50 2 100 8 T198 8" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="text-secondary"
                />
              </svg>
            </span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-primary-foreground/80 md:text-xl">
            Discover how cutting-edge technologies transformed the spectator experience, 
            athlete performance, and sustainability goals of the most advanced Olympic Games in history.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {highlights.map((item) => (
              <div 
                key={item.label}
                className="group rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/15"
              >
                <item.icon className="mx-auto mb-2 h-6 w-6 text-secondary transition-transform duration-300 group-hover:scale-110" />
                <div className="text-xl font-bold text-primary-foreground">{item.value}</div>
                <div className="text-sm text-primary-foreground/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
