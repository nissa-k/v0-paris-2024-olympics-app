import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GovernanceHero } from "@/components/infographic/governance-hero"
import { GovernanceDiagram } from "@/components/infographic/governance-diagram"
import { BudgetSection } from "@/components/infographic/budget-section"
import { SustainabilitySection } from "@/components/infographic/sustainability-section"

export const metadata = {
  title: "Olympic Governance | Paris 2024",
  description: "Explore the governance structure, budget, and sustainability initiatives of the Paris 2024 Olympic Games",
}

export default function InfographicPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <GovernanceHero />
        <GovernanceDiagram />
        <BudgetSection />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  )
}
