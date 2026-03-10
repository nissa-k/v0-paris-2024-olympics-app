import { Lightbulb } from "lucide-react"

export function InnovationHero() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <Lightbulb className="h-4 w-4" />
            <span>Technology Report</span>
          </div>
          
          <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Innovation at Paris 2024
          </h1>
          
          <p className="text-pretty text-lg text-primary-foreground/80">
            Discover the cutting-edge technologies that made the Paris 2024 
            Olympic Games the most technologically advanced in history.
          </p>
        </div>
      </div>
    </section>
  )
}
