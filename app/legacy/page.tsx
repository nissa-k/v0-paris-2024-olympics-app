import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LegacyStorytelling } from "@/components/legacy/legacy-storytelling"

export const metadata = {
  title: "Olympic Legacy in Seine-Saint-Denis | Paris 2024",
  description: "Discover how the Paris 2024 Olympic Games transformed Seine-Saint-Denis through new infrastructure, economic opportunities, and lasting social impact.",
}

export default function LegacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <LegacyStorytelling />
      </main>
      <Footer />
    </div>
  )
}
