import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GovernanceHero } from "@/components/infographic/governance-hero"
import { IOCStructure } from "@/components/infographic/ioc-structure"
import { ParisCommittee } from "@/components/infographic/paris-committee"
import { DecisionFlow } from "@/components/infographic/decision-flow"

export const metadata = {
  title: "Olympic Governance | Paris 2024",
  description: "Explore the organizational structure of the International Olympic Committee and Paris 2024 organizing committee",
}

export default function InfographicPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <GovernanceHero />
        <IOCStructure />
        <ParisCommittee />
        <DecisionFlow />
      </main>
      <Footer />
    </div>
  )
}
