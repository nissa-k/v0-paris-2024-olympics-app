import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InnovationHero } from "@/components/innovation/innovation-hero"
import { TechReport } from "@/components/innovation/tech-report"

export const metadata = {
  title: "Technology Innovation | Paris 2024",
  description: "Interactive technology report about the innovations used during the Paris 2024 Olympic Games",
}

export default function InnovationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <InnovationHero />
        <TechReport />
      </main>
      <Footer />
    </div>
  )
}
