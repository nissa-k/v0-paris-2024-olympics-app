import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Sports", value: "32" },
  { label: "Competition Venues", value: "35" },
  { label: "Days of Competition", value: "19" },
  { label: "World Records", value: "45+" },
  { label: "Paralympic Athletes", value: "4,400" },
  { label: "Volunteers", value: "45,000" },
]

export function StatsSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Paris 2024 By The Numbers
          </h2>
          <p className="text-pretty text-muted-foreground">
            The scale and scope of the world's greatest sporting celebration.
          </p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
