import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AthleteDashboard } from "@/components/dashboard/athlete-dashboard"

export const metadata = {
  title: "Leon Marchand Performance Dashboard | Paris 2024",
  description: "Explore Leon Marchand's historic performance at the Paris 2024 Olympic Games with interactive charts and statistics",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <AthleteDashboard />
      </main>
      <Footer />
    </div>
  )
}
