"use client"

import { Network, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GovernanceHero() {
  const scrollToContent = () => {
    const element = document.getElementById("governance-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-purple via-purple to-blue">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gold/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue/30 blur-[80px]" />
      </div>

      {/* Animated connection circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
            <Network className="h-4 w-4" />
            <span>Interactive Infographic</span>
          </div>
          
          {/* Main heading */}
          <h1 className="animate-fade-in-up animation-delay-100 mb-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Paris 2024 Olympic
            <span className="mt-2 block bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">
              Governance
            </span>
          </h1>
          
          {/* Description */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Explore the organizational structure, budget allocation, and sustainability 
            initiatives behind the Paris 2024 Olympic Games.
          </p>

          {/* Quick Stats */}
          <div className="animate-fade-in-up animation-delay-300 mb-12 flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { value: "3", label: "Key Entities" },
              { value: "4.494B", label: "Total Budget" },
              { value: "95%", label: "Existing Venues" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gold md:text-4xl">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="animate-fade-in-up animation-delay-400 group h-12 gap-2 rounded-full bg-gold px-8 text-base font-semibold text-secondary-foreground shadow-lg shadow-gold/25 transition-all duration-300 hover:bg-gold/90 hover:shadow-xl"
            onClick={scrollToContent}
          >
            Explore the Structure
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
