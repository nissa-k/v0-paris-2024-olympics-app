import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DashboardHero } from "@/components/dashboard/dashboard-hero"
import { MedalTable } from "@/components/dashboard/medal-table"
import { PerformanceCharts } from "@/components/dashboard/performance-charts"
import { TopAthletes } from "@/components/dashboard/top-athletes"

export const metadata = {
  title: "Athlete Dashboard | Paris 2024",
  description: "Explore athlete performance data, medal statistics, and country rankings from the Paris 2024 Olympic Games",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <DashboardHero />
        <MedalTable />
        <PerformanceCharts />
        <TopAthletes />
      </main>
      <Footer />
    </div>
  )
}
