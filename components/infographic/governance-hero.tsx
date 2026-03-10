"use client"

import { Network, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function GovernanceHero() {
  const scrollToContent = () => {
    const element = document.getElementById("governance-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full border border-primary-foreground/10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full border border-primary-foreground/10 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/2 right-1/3 h-32 w-32 rounded-full border border-primary-foreground/10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge 
            variant="secondary" 
            className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
          >
            <Network className="mr-2 h-3.5 w-3.5" />
            Interactive Infographic
          </Badge>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Paris 2024 Olympic{" "}
            <span className="text-secondary">Governance</span>
          </h1>
          
          <p className="mb-8 text-pretty text-lg text-primary-foreground/80 md:text-xl">
            Explore the organizational structure, budget allocation, and sustainability 
            initiatives behind the Paris 2024 Olympic Games.
          </p>

          {/* Quick Stats */}
          <div className="mb-10 flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary md:text-4xl">3</div>
              <div className="text-sm text-primary-foreground/70">Key Entities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary md:text-4xl">4.494B</div>
              <div className="text-sm text-primary-foreground/70">Total Budget</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary md:text-4xl">95%</div>
              <div className="text-sm text-primary-foreground/70">Existing Venues</div>
            </div>
          </div>

          <Button 
            variant="secondary" 
            size="lg" 
            className="group"
            onClick={scrollToContent}
          >
            Explore the Structure
            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path 
            d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
