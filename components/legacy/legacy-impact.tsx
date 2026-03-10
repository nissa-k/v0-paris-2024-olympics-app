import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Home, Users, Train, Accessibility, Heart } from "lucide-react"

const impactAreas = [
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "First carbon-neutral Olympic Games in history, with 95% of venues using existing or temporary structures.",
    stats: "50% reduction in carbon footprint vs. previous Games",
  },
  {
    icon: Home,
    title: "Housing & Urban Development",
    description: "Athletes' Village converting to 2,800 housing units, with 25% reserved for social housing.",
    stats: "6,000 new homes for Seine-Saint-Denis",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "45,000 volunteers participated, with programs to maintain engagement post-Games.",
    stats: "1 million residents engaged in Olympic programs",
  },
  {
    icon: Train,
    title: "Transportation Infrastructure",
    description: "New metro lines and improved cycling infrastructure benefiting daily commuters.",
    stats: "60km of new cycling lanes",
  },
  {
    icon: Accessibility,
    title: "Accessibility Improvements",
    description: "Comprehensive accessibility upgrades across Paris, benefiting residents with disabilities.",
    stats: "100% accessible competition venues",
  },
  {
    icon: Heart,
    title: "Sport Participation",
    description: "Programs to increase sport participation among youth and underserved communities.",
    stats: "30-minute daily physical activity initiative in schools",
  },
]

export function LegacyImpact() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Lasting Impact
          </h2>
          <p className="text-muted-foreground">
            How the Games are transforming Paris and the Ile-de-France region for generations to come.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {impactAreas.map((area) => (
            <Card key={area.title} className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-primary/5" />
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <area.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{area.description}</CardDescription>
                <div className="rounded-lg bg-secondary/10 px-3 py-2 text-sm font-medium text-secondary-foreground">
                  {area.stats}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
