"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Building2, Users, ChevronDown, ChevronUp, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Entity {
  id: string
  name: string
  fullName: string
  role: string
  icon: typeof Globe
  color: string
  borderColor: string
  details: string[]
  stats?: { label: string; value: string }[]
}

const entities: Entity[] = [
  {
    id: "ioc",
    name: "IOC",
    fullName: "International Olympic Committee",
    role: "Supervises the Olympic movement and validates Olympic programs",
    icon: Globe,
    color: "bg-primary",
    borderColor: "border-primary",
    details: [
      "Supreme authority of the Olympic Movement",
      "Selects host cities for Olympic Games",
      "Owns and manages all rights to the Olympic symbols",
      "Ensures regular celebration of the Olympic Games",
      "Leads the fight against doping in sport",
    ],
    stats: [
      { label: "Members", value: "111" },
      { label: "Founded", value: "1894" },
      { label: "Headquarters", value: "Lausanne" },
    ],
  },
  {
    id: "cojo",
    name: "COJO",
    fullName: "Paris 2024 Organizing Committee",
    role: "Operational organization of the Games including logistics, budget, ticketing and security",
    icon: Building2,
    color: "bg-secondary",
    borderColor: "border-secondary",
    details: [
      "Responsible for all operational aspects of Paris 2024",
      "Manages the 4.494 billion euro budget",
      "Coordinates 45,000 volunteers",
      "Oversees 35 competition venues",
      "Handles ticketing for 10+ million spectators",
    ],
    stats: [
      { label: "Employees", value: "4,000+" },
      { label: "Volunteers", value: "45,000" },
      { label: "Venues", value: "35" },
    ],
  },
  {
    id: "cnosf",
    name: "CNOSF",
    fullName: "French National Olympic Committee",
    role: "Represents the French Olympic movement and coordinates athletes",
    icon: Users,
    color: "bg-accent",
    borderColor: "border-accent",
    details: [
      "Represents France within the Olympic Movement",
      "Coordinates French athletes for Olympic Games",
      "Promotes Olympic values in France",
      "Oversees 108 national sports federations",
      "Manages Team France preparation programs",
    ],
    stats: [
      { label: "Federations", value: "108" },
      { label: "Athletes", value: "573" },
      { label: "Sports", value: "32" },
    ],
  },
]

const connections = [
  { from: "ioc", to: "cojo", label: "Supervises & Validates" },
  { from: "ioc", to: "cnosf", label: "Recognizes & Coordinates" },
  { from: "cojo", to: "cnosf", label: "Collaborates with" },
]

export function GovernanceDiagram() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">Governance</Badge>
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Key Organizations
          </h2>
          <p className="text-muted-foreground">
            Three interconnected entities work together to deliver the Paris 2024 Olympic Games. 
            Click on each card to learn more about their roles and responsibilities.
          </p>
        </div>

        {/* Interactive Diagram */}
        <div className="relative mx-auto max-w-5xl">
          {/* SVG Connections */}
          <svg 
            className="absolute inset-0 h-full w-full pointer-events-none z-0"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line-gradient-ioc-cojo" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--gold)" />
              </linearGradient>
              <linearGradient id="line-gradient-ioc-cnosf" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--blue)" />
              </linearGradient>
              <linearGradient id="line-gradient-cojo-cnosf" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--gold)" />
                <stop offset="100%" stopColor="var(--blue)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Animated connection lines - visible on larger screens */}
            <g className="hidden lg:block">
              {/* IOC to COJO */}
              <line 
                x1="25%" y1="50%" x2="75%" y2="25%"
                stroke="url(#line-gradient-ioc-cojo)"
                strokeWidth={hoveredId === "ioc" || hoveredId === "cojo" ? 3 : 2}
                strokeDasharray="8 4"
                className={cn(
                  "transition-all duration-500",
                  (hoveredId === "ioc" || hoveredId === "cojo") && "animate-pulse"
                )}
                filter={hoveredId === "ioc" || hoveredId === "cojo" ? "url(#glow)" : ""}
              >
                <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />
              </line>
              
              {/* IOC to CNOSF */}
              <line 
                x1="25%" y1="50%" x2="75%" y2="75%"
                stroke="url(#line-gradient-ioc-cnosf)"
                strokeWidth={hoveredId === "ioc" || hoveredId === "cnosf" ? 3 : 2}
                strokeDasharray="8 4"
                className={cn(
                  "transition-all duration-500",
                  (hoveredId === "ioc" || hoveredId === "cnosf") && "animate-pulse"
                )}
                filter={hoveredId === "ioc" || hoveredId === "cnosf" ? "url(#glow)" : ""}
              >
                <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />
              </line>
              
              {/* COJO to CNOSF */}
              <line 
                x1="75%" y1="25%" x2="75%" y2="75%"
                stroke="url(#line-gradient-cojo-cnosf)"
                strokeWidth={hoveredId === "cojo" || hoveredId === "cnosf" ? 3 : 2}
                strokeDasharray="8 4"
                className={cn(
                  "transition-all duration-500",
                  (hoveredId === "cojo" || hoveredId === "cnosf") && "animate-pulse"
                )}
                filter={hoveredId === "cojo" || hoveredId === "cnosf" ? "url(#glow)" : ""}
              >
                <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />
              </line>
            </g>
          </svg>

          {/* Entity Cards Grid */}
          <div className="relative z-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* IOC Card - Positioned left on large screens */}
            <div className="lg:col-span-1 lg:row-span-2 lg:flex lg:items-center">
              <EntityCard
                entity={entities[0]}
                isExpanded={expandedId === entities[0].id}
                isHovered={hoveredId === entities[0].id}
                onToggle={() => toggleExpand(entities[0].id)}
                onHover={(hovered) => setHoveredId(hovered ? entities[0].id : null)}
              />
            </div>

            {/* COJO Card - Top right */}
            <div className="lg:col-span-2">
              <EntityCard
                entity={entities[1]}
                isExpanded={expandedId === entities[1].id}
                isHovered={hoveredId === entities[1].id}
                onToggle={() => toggleExpand(entities[1].id)}
                onHover={(hovered) => setHoveredId(hovered ? entities[1].id : null)}
              />
            </div>

            {/* CNOSF Card - Bottom right */}
            <div className="lg:col-span-2">
              <EntityCard
                entity={entities[2]}
                isExpanded={expandedId === entities[2].id}
                isHovered={hoveredId === entities[2].id}
                onToggle={() => toggleExpand(entities[2].id)}
                onHover={(hovered) => setHoveredId(hovered ? entities[2].id : null)}
              />
            </div>
          </div>

          {/* Connection Labels - Mobile */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:hidden">
            {connections.map((conn) => (
              <Badge key={`${conn.from}-${conn.to}`} variant="secondary" className="text-xs">
                {entities.find(e => e.id === conn.from)?.name} → {entities.find(e => e.id === conn.to)?.name}: {conn.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EntityCard({
  entity,
  isExpanded,
  isHovered,
  onToggle,
  onHover,
}: {
  entity: Entity
  isExpanded: boolean
  isHovered: boolean
  onToggle: () => void
  onHover: (hovered: boolean) => void
}) {
  const Icon = entity.icon

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-1",
        isExpanded && "ring-2",
        isExpanded && entity.borderColor,
        isHovered && !isExpanded && "shadow-lg"
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onToggle}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300",
              entity.color,
              isHovered && "scale-110"
            )}>
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-xl">{entity.name}</CardTitle>
                <Badge variant="outline" className="text-xs">{entity.fullName.split(" ")[0]}</Badge>
              </div>
              <CardDescription className="mt-1 text-xs">
                {entity.fullName}
              </CardDescription>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            {isExpanded ? (
              <X className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {entity.role}
        </p>

        {/* Stats Row */}
        {entity.stats && (
          <div className="mt-4 flex gap-4 border-t pt-4">
            {entity.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={cn(
                  "text-lg font-bold transition-colors",
                  isHovered ? "text-primary" : "text-foreground"
                )}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Expanded Details */}
        <div className={cn(
          "grid transition-all duration-300",
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        )}>
          <div className="overflow-hidden">
            <div className="border-t pt-4">
              <h4 className="mb-3 text-sm font-semibold">Key Responsibilities</h4>
              <ul className="space-y-2">
                {entity.details.map((detail, index) => (
                  <li 
                    key={index} 
                    className={cn(
                      "flex items-start gap-2 text-sm text-muted-foreground",
                      "transform transition-all duration-300",
                      isExpanded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className={cn("mt-1.5 h-2 w-2 rounded-full shrink-0", entity.color)} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
