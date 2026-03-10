import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Network, BarChart3, History, Lightbulb } from "lucide-react"

const features = [
  {
    title: "Olympic Governance",
    description: "Explore the organizational structure of the International Olympic Committee and Paris 2024 organizing committee through interactive infographics.",
    href: "/infographic",
    icon: Network,
    color: "bg-primary",
  },
  {
    title: "Athlete Dashboard",
    description: "Dive into comprehensive athlete performance data, medal statistics, and country rankings with interactive charts and visualizations.",
    href: "/dashboard",
    icon: BarChart3,
    color: "bg-accent",
  },
  {
    title: "Olympic Legacy",
    description: "Discover the lasting impact of the Paris 2024 Games on the city, its people, and the future of the Olympic movement.",
    href: "/legacy",
    icon: History,
    color: "bg-secondary",
  },
  {
    title: "Innovation Report",
    description: "Learn about the cutting-edge technologies and innovations that powered the most advanced Olympic Games in history.",
    href: "/innovation",
    icon: Lightbulb,
    color: "bg-chart-4",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Explore Paris 2024
          </h2>
          <p className="text-pretty text-muted-foreground">
            Four comprehensive sections covering every aspect of the Olympic Games, 
            from governance and athletics to legacy and innovation.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    {feature.title}
                    <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
