"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Medal, Users, Calendar, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-purple via-purple to-blue">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/3 rounded-full bg-blue/30 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[80px]" />
      </div>
      
      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
            <Calendar className="h-4 w-4" />
            <span>July 26 - August 11, 2024</span>
          </div>
          
          {/* Main heading */}
          <h1 className="animate-fade-in-up animation-delay-100 mb-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Paris 2024
            <span className="mt-2 block bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">
              Olympic Games
            </span>
          </h1>
          
          {/* Description */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Experience the world&apos;s greatest sporting event. Explore Olympic governance, 
            athlete performances, the lasting legacy, and technological innovations 
            that defined the Paris 2024 Games.
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              asChild 
              size="lg" 
              className="group h-12 gap-2 rounded-full bg-gold px-8 text-base font-semibold text-secondary-foreground shadow-lg shadow-gold/25 transition-all duration-300 hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30"
            >
              <Link href="/dashboard">
                Explore Athletes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="h-12 rounded-full border-2 border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20"
            >
              <Link href="/infographic">
                View Governance
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="animate-fade-in-up animation-delay-400 mt-16 w-full max-w-3xl md:mt-20">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {[
              { icon: Medal, value: "329", label: "Medal Events" },
              { icon: Users, value: "10,500+", label: "Athletes" },
              { icon: Globe, value: "206", label: "Nations" },
              { icon: Calendar, value: "19", label: "Days" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:p-6"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-gold/20 sm:h-12 sm:w-12">
                  <stat.icon className="h-5 w-5 text-gold sm:h-6 sm:w-6" />
                </div>
                <span className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
                <span className="text-xs text-white/60 sm:text-sm">{stat.label}</span>
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
