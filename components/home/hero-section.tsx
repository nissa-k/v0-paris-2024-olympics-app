import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Medal, Users, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
            <Calendar className="h-4 w-4" />
            <span>July 26 - August 11, 2024</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Paris 2024 Olympic Games
          </h1>
          
          <p className="mb-10 text-pretty text-lg text-primary-foreground/80 md:text-xl">
            Experience the world's greatest sporting event. Explore Olympic governance, 
            athlete performances, the lasting legacy, and technological innovations 
            that defined the Paris 2024 Games.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/dashboard">
                Explore Athletes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="/infographic">
                View Governance
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 text-primary-foreground">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <Medal className="h-7 w-7" />
              </div>
              <span className="text-3xl font-bold">329</span>
              <span className="text-sm text-primary-foreground/70">Medal Events</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <Users className="h-7 w-7" />
              </div>
              <span className="text-3xl font-bold">10,500+</span>
              <span className="text-sm text-primary-foreground/70">Athletes</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-primary-foreground">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                <Calendar className="h-7 w-7" />
              </div>
              <span className="text-3xl font-bold">206</span>
              <span className="text-sm text-primary-foreground/70">Nations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
