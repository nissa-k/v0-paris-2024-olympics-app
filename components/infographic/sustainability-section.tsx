"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Building2, Recycle, Wind, Droplets, ChevronRight, Check, TreePine } from "lucide-react"
import { cn } from "@/lib/utils"

const infrastructureStats = [
  {
    id: "existing",
    label: "Existing Venues",
    percentage: 95,
    count: "95%",
    description: "of venues are existing or temporary structures",
    color: "bg-green-500",
  },
  {
    id: "temporary",
    label: "Temporary",
    percentage: 70,
    count: "70%",
    description: "of temporary structures will be dismantled",
    color: "bg-secondary",
  },
  {
    id: "new",
    label: "New Permanent",
    percentage: 5,
    count: "5%",
    description: "only new permanent constructions",
    color: "bg-accent",
  },
]

const sustainabilityPillars = [
  {
    id: "carbon",
    title: "Carbon Reduction",
    icon: Wind,
    color: "bg-green-500",
    metric: "-50%",
    metricLabel: "vs previous Games",
    details: [
      "First carbon-neutral Olympic Games target",
      "100% renewable electricity for all venues",
      "Low-emission transport solutions",
      "Carbon offsetting for unavoidable emissions",
    ],
  },
  {
    id: "circular",
    title: "Circular Economy",
    icon: Recycle,
    color: "bg-secondary",
    metric: "100%",
    metricLabel: "waste sorting",
    details: [
      "Zero single-use plastic policy",
      "Reusable and compostable serviceware",
      "Material recovery and recycling programs",
      "Second-life planning for all equipment",
    ],
  },
  {
    id: "biodiversity",
    title: "Biodiversity",
    icon: TreePine,
    color: "bg-accent",
    metric: "+30%",
    metricLabel: "green spaces",
    details: [
      "Urban greening initiatives",
      "Protection of natural habitats",
      "Sustainable landscaping practices",
      "Wildlife corridor preservation",
    ],
  },
  {
    id: "water",
    title: "Water Management",
    icon: Droplets,
    color: "bg-blue-500",
    metric: "-30%",
    metricLabel: "water consumption",
    details: [
      "Rainwater harvesting systems",
      "Water-efficient fixtures throughout",
      "Seine River restoration project",
      "Smart irrigation systems",
    ],
  },
]

const legacyItems = [
  {
    title: "Olympic Aquatics Centre",
    description: "New sustainable swimming facility for Seine-Saint-Denis community",
    status: "Permanent Legacy",
  },
  {
    title: "Athletes Village",
    description: "Converting to 2,800 housing units including social housing",
    status: "Housing Conversion",
  },
  {
    title: "Media Village",
    description: "Transforming into new neighborhood with 1,300 homes",
    status: "Urban Development",
  },
]

export function SustainabilitySection() {
  const [activePillar, setActivePillar] = useState<string | null>(null)
  const [hoveredStat, setHoveredStat] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">Sustainability Legacy</Badge>
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            The Greenest Games Ever
          </h2>
          <p className="text-muted-foreground">
            Paris 2024 is committed to setting a new benchmark for sustainable Olympic Games, 
            with 95% of infrastructure being existing or temporary structures.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Infrastructure Stats - Hero Display */}
          <Card className="mb-12 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Main Stat */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                      <Leaf className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Infrastructure Strategy</p>
                      <h3 className="text-2xl font-bold">Existing & Temporary</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-7xl font-bold">95</span>
                    <span className="text-4xl font-bold">%</span>
                  </div>
                  
                  <p className="text-white/80 mb-6">
                    of all venues and infrastructure are either existing facilities 
                    or temporary installations that will be removed after the Games.
                  </p>

                  {/* Animated Progress Ring */}
                  <div className="flex items-center gap-6">
                    <svg className="h-20 w-20 -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="white"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${95 * 2.51} ${100 * 2.51}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <div className="text-sm text-white/80">
                      <div className="font-semibold text-white">Only 5% New Construction</div>
                      <div>Minimal environmental footprint</div>
                    </div>
                  </div>
                </div>

                {/* Breakdown Stats */}
                <div className="p-8">
                  <h4 className="font-semibold mb-6">Infrastructure Breakdown</h4>
                  <div className="space-y-6">
                    {infrastructureStats.map((stat) => (
                      <div
                        key={stat.id}
                        className={cn(
                          "rounded-lg border p-4 transition-all duration-300 cursor-pointer",
                          hoveredStat === stat.id ? "border-primary bg-muted/50 shadow-md" : "border-border"
                        )}
                        onMouseEnter={() => setHoveredStat(stat.id)}
                        onMouseLeave={() => setHoveredStat(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">{stat.label}</span>
                          <span className={cn(
                            "text-2xl font-bold transition-colors",
                            hoveredStat === stat.id ? "text-primary" : "text-foreground"
                          )}>
                            {stat.count}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div 
                            className={cn(
                              "h-full rounded-full transition-all duration-700",
                              stat.color,
                              hoveredStat === stat.id ? "opacity-100" : "opacity-80"
                            )}
                            style={{ width: `${stat.percentage}%` }}
                          />
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">{stat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sustainability Pillars */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Sustainability Pillars</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sustainabilityPillars.map((pillar) => {
                const Icon = pillar.icon
                const isActive = activePillar === pillar.id

                return (
                  <Card
                    key={pillar.id}
                    className={cn(
                      "cursor-pointer transition-all duration-300",
                      "hover:shadow-lg hover:-translate-y-1",
                      isActive && "ring-2 ring-primary"
                    )}
                    onClick={() => setActivePillar(isActive ? null : pillar.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className={cn(
                        "mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-transform",
                        pillar.color,
                        isActive && "scale-110"
                      )}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-base">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-3">
                        <span className={cn(
                          "text-3xl font-bold transition-colors",
                          isActive ? "text-primary" : "text-foreground"
                        )}>
                          {pillar.metric}
                        </span>
                        <p className="text-xs text-muted-foreground">{pillar.metricLabel}</p>
                      </div>

                      <div className={cn(
                        "grid transition-all duration-300 overflow-hidden",
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <ul className="space-y-2 border-t pt-3">
                            {pillar.details.map((detail, index) => (
                              <li 
                                key={index}
                                className="flex items-start gap-2 text-xs text-muted-foreground"
                                style={{ 
                                  transitionDelay: `${index * 50}ms`,
                                  transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                                  opacity: isActive ? 1 : 0,
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                <Check className="h-3 w-3 mt-0.5 text-green-500 shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Legacy Projects */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle>Post-Games Legacy</CardTitle>
                  <CardDescription>Transforming Olympic infrastructure into community assets</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {legacyItems.map((item) => (
                  <div 
                    key={item.title}
                    className="group rounded-lg border p-4 transition-all hover:border-primary hover:bg-muted/50"
                  >
                    <Badge variant="secondary" className="mb-2 text-xs">{item.status}</Badge>
                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
