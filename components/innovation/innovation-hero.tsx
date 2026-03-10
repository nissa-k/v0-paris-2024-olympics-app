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
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-purple via-blue to-purple">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-blue/30 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[60px]" />
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-16 w-16 animate-pulse rounded-xl bg-white/5 backdrop-blur-sm" />
        <div className="absolute right-[15%] top-[30%] h-24 w-24 animate-pulse rounded-xl bg-white/5 backdrop-blur-sm" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[25%] left-[20%] h-20 w-20 animate-pulse rounded-xl bg-white/5 backdrop-blur-sm" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[30%] right-[10%] h-12 w-12 animate-pulse rounded-xl bg-white/5 backdrop-blur-sm" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container relative mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
            <Lightbulb className="h-4 w-4" />
            <span>Interactive Technology Report</span>
          </div>
          
          {/* Main heading */}
          <h1 className="animate-fade-in-up animation-delay-100 mb-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Innovation at
            <span className="relative ml-3 inline-block">
              <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">
                Paris 2024
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M2 8 Q50 2 100 8 T198 8" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  className="text-gold"
                />
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mb-12 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Discover how cutting-edge technologies transformed the spectator experience, 
            athlete performance, and sustainability goals of the most advanced Olympic Games in history.
          </p>

          {/* Quick Stats */}
          <div className="animate-fade-in-up animation-delay-300 grid grid-cols-2 gap-4 md:grid-cols-4">
            {highlights.map((item, index) => (
              <div 
                key={item.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:p-6"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="mb-3 flex h-10 w-10 mx-auto items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-gold/20 sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 text-gold sm:h-6 sm:w-6" />
                </div>
                <div className="text-xl font-bold text-white sm:text-2xl">{item.value}</div>
                <div className="text-xs text-white/60 sm:text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
