"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Flame, MapPin } from "lucide-react"

const highlights = [
  {
    icon: Flame,
    title: "Opening Ceremony",
    description: "For the first time in Olympic history, the opening ceremony took place outside a stadium, along the River Seine with athletes parading on boats.",
    gradient: "from-gold to-orange-500",
    bgGradient: "bg-gradient-to-br from-gold/10 to-orange-500/10",
  },
  {
    icon: MapPin,
    title: "Iconic Venues",
    description: "Events held at historic locations including the Palace of Versailles, the Eiffel Tower, and the Grand Palais, blending sport with French heritage.",
    gradient: "from-purple to-blue",
    bgGradient: "bg-gradient-to-br from-purple/10 to-blue/10",
  },
  {
    icon: Trophy,
    title: "Record-Breaking Performances",
    description: "Athletes from around the world shattered records and achieved historic firsts, cementing Paris 2024 as an unforgettable Games.",
    gradient: "from-blue to-accent",
    bgGradient: "bg-gradient-to-br from-blue/10 to-accent/10",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Highlights
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Unforgettable Moments
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            The defining moments that made Paris 2024 truly special.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.title} 
              className={`group relative overflow-hidden border-border/50 ${highlight.bgGradient} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative corner accent */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-2xl transition-all duration-500 group-hover:scale-150" />
              
              <CardHeader className="relative pb-4">
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${highlight.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <highlight.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-sm leading-relaxed md:text-base">
                  {highlight.description}
                </CardDescription>
              </CardContent>
              
              {/* Bottom gradient line on hover */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${highlight.gradient} transition-all duration-500 group-hover:w-full`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
