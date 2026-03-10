import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Medal, Trophy } from "lucide-react"

const topAthletes = [
  {
    name: "Leon Marchand",
    country: "France",
    sport: "Swimming",
    gold: 4,
    silver: 0,
    bronze: 1,
    highlight: "Broke Michael Phelps's Olympic record",
  },
  {
    name: "Simone Biles",
    country: "United States",
    sport: "Gymnastics",
    gold: 3,
    silver: 1,
    bronze: 0,
    highlight: "Most decorated American gymnast in history",
  },
  {
    name: "Summer McIntosh",
    country: "Canada",
    sport: "Swimming",
    gold: 3,
    silver: 1,
    bronze: 0,
    highlight: "Youngest Canadian triple gold medalist",
  },
  {
    name: "Katie Ledecky",
    country: "United States",
    sport: "Swimming",
    gold: 2,
    silver: 2,
    bronze: 0,
    highlight: "Most decorated female swimmer ever",
  },
  {
    name: "Noah Lyles",
    country: "United States",
    sport: "Athletics",
    gold: 1,
    silver: 0,
    bronze: 2,
    highlight: "100m Olympic Champion",
  },
  {
    name: "Armand Duplantis",
    country: "Sweden",
    sport: "Athletics",
    gold: 1,
    silver: 0,
    bronze: 0,
    highlight: "Set world record in pole vault final",
  },
]

export function TopAthletes() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Star Athletes
          </h2>
          <p className="text-muted-foreground">
            The standout performers who defined the Paris 2024 Games.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topAthletes.map((athlete) => (
            <Card key={athlete.name} className="overflow-hidden">
              <CardHeader className="bg-primary/5 pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{athlete.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      {athlete.country}
                      <span className="text-xs">|</span>
                      {athlete.sport}
                    </CardDescription>
                  </div>
                  {athlete.gold >= 3 && (
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="h-5 w-5 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-yellow-900">{athlete.gold}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-5 w-5 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-700">{athlete.silver}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-5 w-5 rounded-full bg-amber-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-amber-100">{athlete.bronze}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-auto text-xs">
                    {athlete.gold + athlete.silver + athlete.bronze} medals
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{athlete.highlight}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
