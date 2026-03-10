"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Medal } from "lucide-react"
import { cn } from "@/lib/utils"

const medalData = [
  { rank: 1, country: "United States", code: "USA", gold: 40, silver: 44, bronze: 42, total: 126 },
  { rank: 2, country: "China", code: "CHN", gold: 40, silver: 27, bronze: 24, total: 91 },
  { rank: 3, country: "Great Britain", code: "GBR", gold: 14, silver: 22, bronze: 29, total: 65 },
  { rank: 4, country: "France", code: "FRA", gold: 16, silver: 26, bronze: 22, total: 64 },
  { rank: 5, country: "Australia", code: "AUS", gold: 18, silver: 19, bronze: 16, total: 53 },
  { rank: 6, country: "Japan", code: "JPN", gold: 20, silver: 12, bronze: 13, total: 45 },
  { rank: 7, country: "Italy", code: "ITA", gold: 12, silver: 13, bronze: 15, total: 40 },
  { rank: 8, country: "Netherlands", code: "NED", gold: 15, silver: 7, bronze: 12, total: 34 },
  { rank: 9, country: "South Korea", code: "KOR", gold: 13, silver: 9, bronze: 10, total: 32 },
  { rank: 10, country: "Germany", code: "GER", gold: 12, silver: 13, bronze: 8, total: 33 },
]

type SortField = "rank" | "gold" | "silver" | "bronze" | "total"

export function MedalTable() {
  const [sortField, setSortField] = useState<SortField>("rank")
  const [sortAsc, setSortAsc] = useState(true)

  const sortedData = [...medalData].sort((a, b) => {
    const modifier = sortAsc ? 1 : -1
    if (sortField === "rank") return (a.rank - b.rank) * modifier
    return (b[sortField] - a[sortField]) * modifier
  })

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc)
    } else {
      setSortField(field)
      setSortAsc(field === "rank")
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Medal Standings
          </h2>
          <p className="text-muted-foreground">
            Top 10 countries by medal count at the Paris 2024 Olympic Games.
          </p>
        </div>

        <Card className="mx-auto max-w-4xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5 text-secondary" />
              Medal Table
            </CardTitle>
            <CardDescription>Click column headers to sort</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left">
                      <Button variant="ghost" size="sm" onClick={() => handleSort("rank")} className="gap-1 font-semibold">
                        Rank
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">Country</th>
                    <th className="px-4 py-3 text-center">
                      <Button variant="ghost" size="sm" onClick={() => handleSort("gold")} className="gap-1 font-semibold">
                        <div className="h-4 w-4 rounded-full bg-yellow-400" />
                        Gold
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <Button variant="ghost" size="sm" onClick={() => handleSort("silver")} className="gap-1 font-semibold">
                        <div className="h-4 w-4 rounded-full bg-gray-300" />
                        Silver
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <Button variant="ghost" size="sm" onClick={() => handleSort("bronze")} className="gap-1 font-semibold">
                        <div className="h-4 w-4 rounded-full bg-amber-600" />
                        Bronze
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <Button variant="ghost" size="sm" onClick={() => handleSort("total")} className="gap-1 font-semibold">
                        Total
                        <ArrowUpDown className="h-3 w-3" />
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((row, index) => (
                    <tr
                      key={row.code}
                      className={cn(
                        "border-b transition-colors hover:bg-muted/50",
                        index < 3 && "bg-secondary/5"
                      )}
                    >
                      <td className="px-4 py-3">
                        <Badge variant={index < 3 ? "default" : "secondary"}>
                          {row.rank}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{row.country}</span>
                          <span className="text-xs text-muted-foreground">({row.code})</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center font-semibold text-yellow-600">{row.gold}</td>
                      <td className="px-4 py-3 text-center font-semibold text-gray-500">{row.silver}</td>
                      <td className="px-4 py-3 text-center font-semibold text-amber-700">{row.bronze}</td>
                      <td className="px-4 py-3 text-center font-bold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
