"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Network, BarChart3, History, Lightbulb } from "lucide-react"

const features = [
  {
    title: "Olympic Governance",
    description: "Explore the organizational structure of the International Olympic Committee and Paris 2024 organizing committee through interactive infographics.",
    href: "/infographic",
    icon: Network,
    gradient: "from-purple to-blue",
    hoverGradient: "group-hover:from-purple/90 group-hover:to-blue/90",
  },
  {
    title: "Athlete Dashboard",
    description: "Dive into comprehensive athlete performance data, medal statistics, and country rankings with interactive charts and visualizations.",
    href: "/dashboard",
    icon: BarChart3,
    gradient: "from-blue to-accent",
    hoverGradient: "group-hover:from-blue/90 group-hover:to-accent/90",
  },
  {
    title: "Olympic Legacy",
    description: "Discover the lasting impact of the Paris 2024 Games on the city, its people, and the future of the Olympic movement.",
    href: "/legacy",
    icon: History,
    gradient: "from-gold to-secondary",
    hoverGradient: "group-hover:from-gold/90 group-hover:to-secondary/90",
  },
  {
    title: "Innovation Report",
    description: "Learn about the cutting-edge technologies and innovations that powered the most advanced Olympic Games in history.",
    href: "/innovation",
    icon: Lightbulb,
    gradient: "from-purple via-blue to-gold",
    hoverGradient: "group-hover:from-purple/90 group-hover:via-blue/90 group-hover:to-gold/90",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Discover
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Explore Paris 2024
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Four comprehensive sections covering every aspect of the Olympic Games, 
            from governance and athletics to legacy and innovation.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((feature, index) => (
            <Link 
              key={feature.title} 
              href={feature.href} 
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-border hover:shadow-xl hover:shadow-primary/5">
                <CardHeader className="pb-4">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-all duration-300 ${feature.hoverGradient}`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="flex items-center gap-2 text-xl transition-colors group-hover:text-primary">
                    {feature.title}
                    <ArrowRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                {/* Decorative gradient line */}
                <div className={`h-1 w-0 bg-gradient-to-r ${feature.gradient} transition-all duration-500 group-hover:w-full`} />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
