"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"
import {
  Cpu,
  Ticket,
  Leaf,
  Tv,
  Shield,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Check,
  Zap,
  Users,
  Clock,
} from "lucide-react"

type Domain = "all" | "sport" | "media" | "sustainability" | "security"

interface Technology {
  id: string
  title: string
  domain: Exclude<Domain, "all">
  icon: typeof Cpu
  description: string
  details: string[]
  stats: { label: string; value: string }[]
  metrics: {
    efficiency: number
    acceptability: number
    sustainability: number
  }
}

const technologies: Technology[] = [
  {
    id: "ai-sports",
    title: "AI for Sports Analysis",
    domain: "sport",
    icon: Cpu,
    description: "Real-time performance tracking and assisted refereeing powered by artificial intelligence.",
    details: [
      "Machine learning algorithms analyze athlete biomechanics in real-time",
      "Assisted refereeing for line calls, photo finishes, and rule violations",
      "Performance prediction models helping coaches optimize strategies",
      "Injury risk assessment through movement pattern analysis",
    ],
    stats: [
      { label: "Sports Using AI", value: "32" },
      { label: "Decisions Assisted", value: "15,000+" },
      { label: "Accuracy Rate", value: "99.8%" },
    ],
    metrics: { efficiency: 95, acceptability: 78, sustainability: 85 },
  },
  {
    id: "digital-ticketing",
    title: "Digital Ticketing & Contactless Access",
    domain: "security",
    icon: Ticket,
    description: "QR codes and mobile entry systems for seamless venue access and crowd management.",
    details: [
      "Dynamic QR codes preventing ticket fraud and scalping",
      "Biometric verification integrated with mobile tickets",
      "Real-time capacity monitoring and crowd flow optimization",
      "Contactless payment integration across all venues",
    ],
    stats: [
      { label: "Mobile Tickets", value: "10M+" },
      { label: "Avg Entry Time", value: "8 sec" },
      { label: "Fraud Prevention", value: "99.9%" },
    ],
    metrics: { efficiency: 92, acceptability: 88, sustainability: 90 },
  },
  {
    id: "green-infrastructure",
    title: "Green Infrastructures",
    domain: "sustainability",
    icon: Leaf,
    description: "Energy-efficient and modular stadiums designed for minimal environmental impact.",
    details: [
      "95% of venues were existing or temporary structures",
      "Solar panels and green roofs integrated into venue design",
      "Modular construction allowing rapid assembly and disassembly",
      "Natural ventilation systems reducing AC needs by 40%",
    ],
    stats: [
      { label: "Renewable Energy", value: "100%" },
      { label: "Carbon Reduction", value: "55%" },
      { label: "Materials Reused", value: "95%" },
    ],
    metrics: { efficiency: 88, acceptability: 95, sustainability: 98 },
  },
  {
    id: "vr-8k",
    title: "VR & 8K Broadcasting",
    domain: "media",
    icon: Tv,
    description: "Immersive spectator experience with ultra-high definition and virtual reality content.",
    details: [
      "8K broadcasts for select flagship events",
      "360-degree VR experiences for remote spectators",
      "Multi-angle viewing with viewer-controlled cameras",
      "Real-time 3D replays from any perspective",
    ],
    stats: [
      { label: "8K Events", value: "45" },
      { label: "VR Viewers", value: "2.5M" },
      { label: "Camera Angles", value: "1,200+" },
    ],
    metrics: { efficiency: 85, acceptability: 82, sustainability: 70 },
  },
  {
    id: "smart-security",
    title: "Smart Security Systems",
    domain: "security",
    icon: Shield,
    description: "AI cameras, drones, and incident detection for comprehensive venue safety.",
    details: [
      "AI-powered video analytics detecting suspicious behavior",
      "Drone surveillance for large outdoor venues and perimeters",
      "Facial recognition integration with access control",
      "Predictive crowd management preventing bottlenecks",
    ],
    stats: [
      { label: "AI Cameras", value: "8,000+" },
      { label: "Response Time", value: "< 30 sec" },
      { label: "Incidents Prevented", value: "500+" },
    ],
    metrics: { efficiency: 94, acceptability: 65, sustainability: 75 },
  },
  {
    id: "mobile-apps",
    title: "Spectator Mobile Applications",
    domain: "media",
    icon: Smartphone,
    description: "Navigation, transport information, and services all in one official app.",
    details: [
      "Real-time navigation within and between venues",
      "Public transport integration with live updates",
      "Personalized event schedules and notifications",
      "Food ordering and merchandise purchases in-app",
    ],
    stats: [
      { label: "Downloads", value: "15M+" },
      { label: "Daily Users", value: "3.2M" },
      { label: "Languages", value: "12" },
    ],
    metrics: { efficiency: 90, acceptability: 92, sustainability: 88 },
  },
]

const domainFilters: { value: Domain; label: string; color: string }[] = [
  { value: "all", label: "All Technologies", color: "bg-foreground text-background" },
  { value: "sport", label: "Sport", color: "bg-primary text-primary-foreground" },
  { value: "media", label: "Media", color: "bg-secondary text-secondary-foreground" },
  { value: "sustainability", label: "Sustainability", color: "bg-accent text-accent-foreground" },
  { value: "security", label: "Security", color: "bg-muted text-muted-foreground" },
]

function TechnologyCard({ tech, isExpanded, onToggle }: { tech: Technology; isExpanded: boolean; onToggle: () => void }) {
  const domainColors: Record<string, string> = {
    sport: "bg-primary/10 text-primary border-primary/20",
    media: "bg-secondary/80 text-secondary-foreground border-secondary",
    sustainability: "bg-accent/10 text-accent border-accent/20",
    security: "bg-muted text-muted-foreground border-muted-foreground/20",
  }

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg ${
        isExpanded ? "ring-2 ring-primary" : ""
      }`}
      onClick={onToggle}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${domainColors[tech.domain]}`}>
              <tech.icon className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-lg leading-tight">{tech.title}</CardTitle>
              <Badge variant="outline" className="mt-1 text-xs capitalize">
                {tech.domain}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">
          {tech.description}
        </CardDescription>

        <div className={`mt-4 grid grid-cols-3 gap-2 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-70"}`}>
          {tech.stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-muted/50 p-2 text-center">
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-2 border-t pt-4">
            <h4 className="text-sm font-semibold">Key Features</h4>
            <ul className="space-y-2">
              {tech.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 border-t pt-4">
            <div className="text-center">
              <Zap className="mx-auto mb-1 h-5 w-5 text-primary" />
              <div className="text-lg font-bold">{tech.metrics.efficiency}%</div>
              <div className="text-xs text-muted-foreground">Efficiency</div>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-1 h-5 w-5 text-secondary-foreground" />
              <div className="text-lg font-bold">{tech.metrics.acceptability}%</div>
              <div className="text-xs text-muted-foreground">Acceptability</div>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-1 h-5 w-5 text-accent" />
              <div className="text-lg font-bold">{tech.metrics.sustainability}%</div>
              <div className="text-xs text-muted-foreground">Sustainability</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function RadarComparison({ technologies }: { technologies: Technology[] }) {
  const chartData = [
    {
      metric: "Efficiency",
      fullMark: 100,
      ...Object.fromEntries(technologies.map((t) => [t.id, t.metrics.efficiency])),
    },
    {
      metric: "Acceptability",
      fullMark: 100,
      ...Object.fromEntries(technologies.map((t) => [t.id, t.metrics.acceptability])),
    },
    {
      metric: "Sustainability",
      fullMark: 100,
      ...Object.fromEntries(technologies.map((t) => [t.id, t.metrics.sustainability])),
    },
  ]

  const colors = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
    "hsl(var(--primary))",
  ]

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="text-xl">Technology Comparison</CardTitle>
        <CardDescription>
          Radar chart comparing efficiency, acceptability, and long-term sustainability across all technologies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="metric" 
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              />
              <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
              />
              {technologies.map((tech, index) => (
                <Radar
                  key={tech.id}
                  name={tech.title}
                  dataKey={tech.id}
                  stroke={colors[index % colors.length]}
                  fill={colors[index % colors.length]}
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              ))}
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  borderColor: "hsl(var(--border))",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value) => <span className="text-sm text-foreground">{value}</span>}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export function TechReport() {
  const [activeFilter, setActiveFilter] = useState<Domain>("all")
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())

  const filteredTechnologies = useMemo(() => {
    if (activeFilter === "all") return technologies
    return technologies.filter((tech) => tech.domain === activeFilter)
  }, [activeFilter])

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-4xl">
            Paris 2024 Technology Report
          </h2>
          <p className="text-pretty text-muted-foreground">
            Explore the six key technologies that powered the most innovative Olympic Games in history. 
            Filter by domain and click cards to reveal detailed insights.
          </p>
        </div>

        {/* Domain Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {domainFilters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className={`transition-all duration-200 ${
                activeFilter === filter.value ? "" : "hover:bg-muted"
              }`}
            >
              {filter.label}
              {activeFilter === filter.value && (
                <span className="ml-2 rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs">
                  {filter.value === "all" 
                    ? technologies.length 
                    : technologies.filter((t) => t.domain === filter.value).length}
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTechnologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isExpanded={expandedCards.has(tech.id)}
              onToggle={() => toggleCard(tech.id)}
            />
          ))}
        </div>

        {/* Radar Chart Comparison */}
        <RadarComparison technologies={filteredTechnologies} />
      </div>
    </section>
  )
}
