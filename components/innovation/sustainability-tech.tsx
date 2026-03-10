"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Leaf, Zap, Recycle, Droplets, Sun, Wind } from "lucide-react"

const sustainabilityMetrics = [
  {
    icon: Leaf,
    title: "Carbon Reduction",
    current: 55,
    target: 50,
    unit: "% reduction vs 2012 baseline",
    description: "Achieved through renewable energy and optimized transportation",
  },
  {
    icon: Zap,
    title: "Renewable Energy",
    current: 100,
    target: 100,
    unit: "% of venue electricity",
    description: "All venues powered by certified renewable energy sources",
  },
  {
    icon: Recycle,
    title: "Waste Diversion",
    current: 75,
    target: 80,
    unit: "% of waste recycled or composted",
    description: "Comprehensive waste management across all venues",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    current: 30,
    target: 25,
    unit: "% reduction in water usage",
    description: "Rainwater harvesting and efficient irrigation systems",
  },
]

const greenTech = [
  {
    icon: Sun,
    title: "Solar Integration",
    description: "Photovoltaic panels installed across Olympic venues generated 1.5MW of clean energy during the Games.",
  },
  {
    icon: Wind,
    title: "Natural Ventilation",
    description: "Innovative building designs minimized air conditioning needs, using natural airflow patterns.",
  },
  {
    icon: Recycle,
    title: "Circular Materials",
    description: "95% of construction materials designed for reuse or recycling post-Games.",
  },
]

export function SustainabilityTech() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Sustainability Technology
          </h2>
          <p className="text-muted-foreground">
            Technology-driven solutions for the most sustainable Olympic Games ever.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {sustainabilityMetrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <metric.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex items-end justify-between">
                  <span className="text-3xl font-bold text-primary">{metric.current}%</span>
                  <span className="text-sm text-muted-foreground">Target: {metric.target}%</span>
                </div>
                <Progress value={metric.current} className="mb-2 h-2" />
                <p className="text-xs text-muted-foreground">{metric.unit}</p>
                <CardDescription className="mt-2 text-sm">
                  {metric.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-4xl">
          <h3 className="mb-6 text-center text-xl font-semibold">Green Technology Showcase</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {greenTech.map((tech) => (
              <Card key={tech.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                    <tech.icon className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-base">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tech.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
