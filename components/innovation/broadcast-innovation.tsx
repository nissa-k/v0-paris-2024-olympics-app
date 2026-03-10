import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tv, Radio, Smartphone, Globe, Play, Camera } from "lucide-react"

const broadcastStats = [
  { label: "Hours of Coverage", value: "11,000+" },
  { label: "Camera Positions", value: "1,200" },
  { label: "Countries Reached", value: "200+" },
  { label: "Digital Viewers", value: "4 Billion" },
]

const features = [
  {
    icon: Camera,
    title: "8K Broadcasting",
    description: "Select events broadcast in 8K ultra-high definition for the first time at an Olympic Games.",
  },
  {
    icon: Play,
    title: "Immersive Video",
    description: "360-degree and VR experiences allowing viewers to feel like they're at the venue.",
  },
  {
    icon: Globe,
    title: "Cloud Production",
    description: "Remote production workflows reduced on-site infrastructure and carbon footprint.",
  },
  {
    icon: Smartphone,
    title: "Personalized Streaming",
    description: "AI-driven content recommendations for personalized viewing experiences across devices.",
  },
]

export function BroadcastInnovation() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Broadcast Innovation
          </h2>
          <p className="text-muted-foreground">
            Bringing the Games to billions of viewers worldwide with cutting-edge media technology.
          </p>
        </div>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {broadcastStats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <feature.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
