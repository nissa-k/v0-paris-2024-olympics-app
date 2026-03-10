import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LegacyHero } from "@/components/legacy/legacy-hero"
import { LegacyTimeline } from "@/components/legacy/legacy-timeline"
import { LegacyImpact } from "@/components/legacy/legacy-impact"
import { LegacyVenues } from "@/components/legacy/legacy-venues"

export const metadata = {
  title: "Olympic Legacy | Paris 2024",
  description: "Discover the lasting impact of the Paris 2024 Games on the city, its people, and the future of the Olympic movement",
}

export default function LegacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <LegacyHero />
        <LegacyTimeline />
        <LegacyImpact />
        <LegacyVenues />
      </main>
      <Footer />
    </div>
  )
}
