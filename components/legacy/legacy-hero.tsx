import { History } from "lucide-react"

export function LegacyHero() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <History className="h-4 w-4" />
            <span>Olympic Legacy</span>
          </div>
          
          <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            A Lasting Legacy for Paris
          </h1>
          
          <p className="text-pretty text-lg text-primary-foreground/80">
            The Paris 2024 Olympic Games were designed to leave a positive, 
            lasting impact on the city, its residents, and the global Olympic movement.
          </p>
        </div>
      </div>
    </section>
  )
}
