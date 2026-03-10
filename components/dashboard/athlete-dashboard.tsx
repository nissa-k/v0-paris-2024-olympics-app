"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  ReferenceLine,
  CartesianGrid,
} from "recharts"
import { Medal, Trophy, Timer, TrendingDown, Filter, Waves } from "lucide-react"
import { cn } from "@/lib/utils"

type MedalType = "all" | "gold" | "bronze"
type EventType = "all" | "individual" | "relay"

interface EventResult {
  id: string
  event: string
  preOlympicTime: number
  olympicTime: number
  preOlympicDisplay: string
  olympicDisplay: string
  improvement: number
  improvementDisplay: string
  medal: "gold" | "bronze"
  type: "individual" | "relay"
  distance: number
}

const eventResults: EventResult[] = [
  {
    id: "400im",
    event: "400m Individual Medley",
    preOlympicTime: 243.69,
    olympicTime: 242.95,
    preOlympicDisplay: "4:03.69",
    olympicDisplay: "4:02.95",
    improvement: 0.74,
    improvementDisplay: "-0.74s",
    medal: "gold",
    type: "individual",
    distance: 400,
  },
  {
    id: "200br",
    event: "200m Breaststroke",
    preOlympicTime: 128.11,
    olympicTime: 125.85,
    preOlympicDisplay: "2:08.11",
    olympicDisplay: "2:05.85",
    improvement: 2.26,
    improvementDisplay: "-2.26s",
    medal: "gold",
    type: "individual",
    distance: 200,
  },
  {
    id: "200fly",
    event: "200m Butterfly",
    preOlympicTime: 113.50,
    olympicTime: 111.21,
    preOlympicDisplay: "1:53.50",
    olympicDisplay: "1:51.21",
    improvement: 2.29,
    improvementDisplay: "-2.29s",
    medal: "gold",
    type: "individual",
    distance: 200,
  },
  {
    id: "200im",
    event: "200m Individual Medley",
    preOlympicTime: 116.31,
    olympicTime: 114.06,
    preOlympicDisplay: "1:56.31",
    olympicDisplay: "1:54.06",
    improvement: 2.25,
    improvementDisplay: "-2.25s",
    medal: "gold",
    type: "individual",
    distance: 200,
  },
  {
    id: "4x100",
    event: "4x100m Medley Relay",
    preOlympicTime: 0,
    olympicTime: 208.38,
    preOlympicDisplay: "N/A",
    olympicDisplay: "3:28.38",
    improvement: 0,
    improvementDisplay: "Team Event",
    medal: "bronze",
    type: "relay",
    distance: 400,
  },
]

const chartData = eventResults
  .filter((e) => e.type === "individual")
  .map((e) => ({
    event: e.event.replace("200m ", "200 ").replace("400m ", "400 "),
    shortEvent: e.event.split(" ").slice(1).join(" "),
    preOlympic: e.preOlympicTime,
    olympic: e.olympicTime,
    improvement: e.improvement,
  }))

const progressionData = [
  { stage: "Training Best", time: 114.5, label: "1:54.50" },
  { stage: "World Champs 2023", time: 113.8, label: "1:53.80" },
  { stage: "Olympic Trials", time: 113.2, label: "1:53.20" },
  { stage: "Olympic Heats", time: 112.4, label: "1:52.40" },
  { stage: "Olympic Final", time: 111.21, label: "1:51.21" },
]

export function AthleteDashboard() {
  const [medalFilter, setMedalFilter] = useState<MedalType>("all")
  const [eventFilter, setEventFilter] = useState<EventType>("all")

  const filteredEvents = useMemo(() => {
    return eventResults.filter((event) => {
      const medalMatch = medalFilter === "all" || event.medal === medalFilter
      const eventMatch = eventFilter === "all" || event.type === eventFilter
      return medalMatch && eventMatch
    })
  }, [medalFilter, eventFilter])

  const stats = useMemo(() => {
    const gold = eventResults.filter((e) => e.medal === "gold").length
    const bronze = eventResults.filter((e) => e.medal === "bronze").length
    const totalImprovement = eventResults
      .filter((e) => e.type === "individual")
      .reduce((acc, e) => acc + e.improvement, 0)
    return { gold, bronze, total: gold + bronze, totalImprovement }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="relative">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary-foreground/10 md:h-40 md:w-40">
                <Waves className="h-16 w-16 text-primary-foreground md:h-20 md:w-20" />
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <span className="text-lg font-bold text-secondary-foreground">FR</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
                <Trophy className="h-4 w-4" />
                <span>Swimming Legend</span>
              </div>
              <h1 className="mb-2 text-3xl font-bold text-primary-foreground md:text-5xl">
                Leon Marchand
              </h1>
              <p className="mb-4 text-lg text-primary-foreground/80">
                France&apos;s Swimming Sensation | Paris 2024 Olympic Champion
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
                  {stats.gold} Gold Medals
                </Badge>
                <Badge className="bg-amber-600 text-amber-100 hover:bg-amber-600">
                  {stats.bronze} Bronze Medal
                </Badge>
                <Badge variant="secondary">
                  {stats.total} Total Medals
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medal Summary Cards */}
      <section className="border-b py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                  <Medal className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.gold}</p>
                  <p className="text-sm text-muted-foreground">Gold Medals</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                  <Medal className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.bronze}</p>
                  <p className="text-sm text-muted-foreground">Bronze Medal</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Timer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Events Competed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <TrendingDown className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">-{stats.totalImprovement.toFixed(2)}s</p>
                  <p className="text-sm text-muted-foreground">Total Time Improved</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Filter className="h-4 w-4" />
              Filters:
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={eventFilter === "all" ? "default" : "outline"}
                onClick={() => setEventFilter("all")}
              >
                All Events
              </Button>
              <Button
                size="sm"
                variant={eventFilter === "individual" ? "default" : "outline"}
                onClick={() => setEventFilter("individual")}
              >
                Individual
              </Button>
              <Button
                size="sm"
                variant={eventFilter === "relay" ? "default" : "outline"}
                onClick={() => setEventFilter("relay")}
              >
                Relay
              </Button>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={medalFilter === "all" ? "default" : "outline"}
                onClick={() => setMedalFilter("all")}
              >
                All Medals
              </Button>
              <Button
                size="sm"
                variant={medalFilter === "gold" ? "default" : "outline"}
                onClick={() => setMedalFilter("gold")}
                className={medalFilter === "gold" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
              >
                Gold Only
              </Button>
              <Button
                size="sm"
                variant={medalFilter === "bronze" ? "default" : "outline"}
                onClick={() => setMedalFilter("bronze")}
                className={medalFilter === "bronze" ? "bg-amber-600 hover:bg-amber-700" : ""}
              >
                Bronze Only
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Results Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Event Results</h2>
          <div className="grid gap-4">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className={cn(
                  "overflow-hidden transition-all hover:shadow-lg",
                  event.medal === "gold" && "border-l-4 border-l-yellow-400",
                  event.medal === "bronze" && "border-l-4 border-l-amber-600"
                )}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-full",
                          event.medal === "gold" ? "bg-yellow-100" : "bg-amber-100"
                        )}
                      >
                        <Medal
                          className={cn(
                            "h-6 w-6",
                            event.medal === "gold" ? "text-yellow-600" : "text-amber-700"
                          )}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{event.event}</h3>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className={cn(
                              "text-xs",
                              event.medal === "gold"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-amber-100 text-amber-800"
                            )}
                          >
                            {event.medal === "gold" ? "Gold Medal" : "Bronze Medal"}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {event.type === "individual" ? "Individual" : "Relay"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-6">
                      {event.type === "individual" && (
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Pre-Olympic</p>
                          <p className="font-mono text-lg">{event.preOlympicDisplay}</p>
                        </div>
                      )}
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Olympic Final</p>
                        <p className="font-mono text-lg font-bold text-primary">
                          {event.olympicDisplay}
                        </p>
                      </div>
                      {event.type === "individual" && (
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Improvement</p>
                          <p className="font-mono text-lg font-semibold text-green-600">
                            {event.improvementDisplay}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredEvents.length === 0 && (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No events match the selected filters.</p>
            </Card>
          )}
        </div>
      </section>

      {/* Charts Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="comparison" className="w-full">
            <TabsList className="mb-6 grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="comparison">Event Comparison</TabsTrigger>
              <TabsTrigger value="progression">Performance Progression</TabsTrigger>
            </TabsList>

            <TabsContent value="comparison">
              <Card>
                <CardHeader>
                  <CardTitle>Pre-Olympic vs Olympic Times</CardTitle>
                  <CardDescription>
                    Comparison of Leon Marchand&apos;s times before and during the Paris 2024 Olympics
                    (Individual events only)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} layout="vertical" barGap={8}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                        <XAxis
                          type="number"
                          domain={["dataMin - 5", "dataMax + 5"]}
                          tickFormatter={(value) => {
                            const mins = Math.floor(value / 60)
                            const secs = (value % 60).toFixed(0)
                            return `${mins}:${secs.padStart(2, "0")}`
                          }}
                        />
                        <YAxis
                          dataKey="shortEvent"
                          type="category"
                          width={140}
                          tick={{ fontSize: 12 }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                          formatter={(value: number) => {
                            const mins = Math.floor(value / 60)
                            const secs = (value % 60).toFixed(2)
                            return [`${mins}:${secs.padStart(5, "0")}`, ""]
                          }}
                        />
                        <Legend />
                        <Bar
                          dataKey="preOlympic"
                          name="Pre-Olympic"
                          fill="hsl(var(--muted-foreground))"
                          radius={[0, 4, 4, 0]}
                        />
                        <Bar
                          dataKey="olympic"
                          name="Olympic Final"
                          fill="hsl(var(--primary))"
                          radius={[0, 4, 4, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progression">
              <Card>
                <CardHeader>
                  <CardTitle>200m Butterfly Performance Progression</CardTitle>
                  <CardDescription>
                    Leon Marchand&apos;s journey to the Olympic gold medal showing time improvements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={progressionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="stage" tick={{ fontSize: 11 }} />
                        <YAxis
                          domain={[110, 116]}
                          tickFormatter={(value) => {
                            const mins = Math.floor(value / 60)
                            const secs = (value % 60).toFixed(0)
                            return `${mins}:${secs.padStart(2, "0")}`
                          }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                          }}
                          formatter={(value: number) => {
                            const mins = Math.floor(value / 60)
                            const secs = (value % 60).toFixed(2)
                            return [`${mins}:${secs.padStart(5, "0")}`, "Time"]
                          }}
                        />
                        <ReferenceLine
                          y={111.21}
                          stroke="hsl(var(--chart-2))"
                          strokeDasharray="5 5"
                          label={{
                            value: "Olympic Record",
                            position: "right",
                            fontSize: 11,
                            fill: "hsl(var(--chart-2))",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="time"
                          stroke="hsl(var(--primary))"
                          strokeWidth={3}
                          dot={{ r: 6, fill: "hsl(var(--primary))" }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievement Highlight */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <Trophy className="mx-auto mb-4 h-12 w-12 text-secondary" />
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Historic Achievement</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Leon Marchand became the first French swimmer to win 4 individual Olympic gold
                  medals at a single Games, breaking Michael Phelps&apos;s longstanding Olympic
                  record in the 400m Individual Medley with a time of 4:02.95.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="px-4 py-2 text-sm" variant="secondary">
                    First French 4x Gold Swimming
                  </Badge>
                  <Badge className="px-4 py-2 text-sm" variant="secondary">
                    Olympic Record Holder
                  </Badge>
                  <Badge className="px-4 py-2 text-sm" variant="secondary">
                    Home Crowd Favorite
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
