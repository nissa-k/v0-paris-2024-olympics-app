import { BarChart3 } from "lucide-react"

export function DashboardHero() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <BarChart3 className="h-4 w-4" />
            <span>Interactive Dashboard</span>
          </div>
          
          <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Athlete Performance Dashboard
          </h1>
          
          <p className="text-pretty text-lg text-primary-foreground/80">
            Explore comprehensive medal statistics, country rankings, and 
            individual athlete performances from the Paris 2024 Olympic Games.
          </p>
        </div>
      </div>
    </section>
  )
}
