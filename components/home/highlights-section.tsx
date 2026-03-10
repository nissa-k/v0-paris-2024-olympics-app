import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Flame, MapPin } from "lucide-react"

const highlights = [
  {
    icon: Flame,
    title: "Opening Ceremony",
    description: "For the first time in Olympic history, the opening ceremony took place outside a stadium, along the River Seine with athletes parading on boats.",
  },
  {
    icon: MapPin,
    title: "Iconic Venues",
    description: "Events held at historic locations including the Palace of Versailles, the Eiffel Tower, and the Grand Palais, blending sport with French heritage.",
  },
  {
    icon: Trophy,
    title: "Record-Breaking Performances",
    description: "Athletes from around the world shattered records and achieved historic firsts, cementing Paris 2024 as an unforgettable Games.",
  },
]

export function HighlightsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Unforgettable Moments
          </h2>
          <p className="text-pretty text-muted-foreground">
            The defining moments that made Paris 2024 truly special.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="relative overflow-hidden border-none bg-card shadow-md">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5" />
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <highlight.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle>{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {highlight.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
