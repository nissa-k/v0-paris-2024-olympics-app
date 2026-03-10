import { Network } from "lucide-react"

export function GovernanceHero() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <Network className="h-4 w-4" />
            <span>Interactive Infographic</span>
          </div>
          
          <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
            Olympic Governance Structure
          </h1>
          
          <p className="text-pretty text-lg text-primary-foreground/80">
            Understand how the Olympic Games are organized, from the International 
            Olympic Committee to the Paris 2024 Organizing Committee.
          </p>
        </div>
      </div>
    </section>
  )
}
