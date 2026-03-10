"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, MapPin, Calendar, Star, Users, Heart } from "lucide-react"

const stats = [
  { icon: Trophy, label: "Sports", value: "32", color: "text-gold" },
  { icon: MapPin, label: "Venues", value: "35", color: "text-purple" },
  { icon: Calendar, label: "Days", value: "19", color: "text-blue" },
  { icon: Star, label: "World Records", value: "45+", color: "text-gold" },
  { icon: Users, label: "Paralympic Athletes", value: "4,400", color: "text-purple" },
  { icon: Heart, label: "Volunteers", value: "45,000", color: "text-blue" },
]

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 md:py-28 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(var(--purple),0.03)_50%,transparent_100%)]" />
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-purple/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            Statistics
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Paris 2024 By The Numbers
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            The scale and scope of the world&apos;s greatest sporting celebration.
          </p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-all duration-300 group-hover:scale-110 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
              {/* Hover gradient effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple via-blue to-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
