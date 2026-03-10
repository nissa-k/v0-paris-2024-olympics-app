import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InnovationHero } from "@/components/innovation/innovation-hero"
import { TechHighlights } from "@/components/innovation/tech-highlights"
import { BroadcastInnovation } from "@/components/innovation/broadcast-innovation"
import { SustainabilityTech } from "@/components/innovation/sustainability-tech"

export const metadata = {
  title: "Technology Innovation | Paris 2024",
  description: "Learn about the cutting-edge technologies and innovations that powered the most advanced Olympic Games in history",
}

export default function InnovationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <InnovationHero />
        <TechHighlights />
        <BroadcastInnovation />
        <SustainabilityTech />
      </main>
      <Footer />
    </div>
  )
}
