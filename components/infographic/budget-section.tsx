"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Euro, Building, Users, Shield, Ticket, TrendingUp, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const budgetBreakdown = [
  {
    id: "venues",
    category: "Venues & Infrastructure",
    amount: "1.5B",
    percentage: 33,
    icon: Building,
    color: "bg-primary",
    details: "Construction, renovation, and temporary installations for 35 competition venues",
  },
  {
    id: "operations",
    category: "Operations & Logistics",
    amount: "1.2B",
    percentage: 27,
    icon: TrendingUp,
    color: "bg-secondary",
    details: "Transportation, technology, catering, and day-to-day operational costs",
  },
  {
    id: "workforce",
    category: "Workforce & Volunteers",
    amount: "0.8B",
    percentage: 18,
    icon: Users,
    color: "bg-accent",
    details: "4,000+ employees and 45,000 volunteer coordination and training",
  },
  {
    id: "security",
    category: "Security",
    amount: "0.5B",
    percentage: 11,
    icon: Shield,
    color: "bg-chart-4",
    details: "35,000+ security personnel, surveillance systems, and safety protocols",
  },
  {
    id: "other",
    category: "Marketing & Other",
    amount: "0.5B",
    percentage: 11,
    icon: Ticket,
    color: "bg-muted",
    details: "Ticketing systems, ceremonies, cultural programs, and contingency",
  },
]

const fundingSources = [
  { label: "Private Funding", percentage: 96, color: "bg-secondary" },
  { label: "Public Funding", percentage: 4, color: "bg-primary" },
]

export function BudgetSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">Budget</Badge>
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Financial Overview
          </h2>
          <p className="text-muted-foreground">
            Paris 2024 operates with a total budget of 4.494 billion euros, 
            with an unprecedented 96% coming from private funding sources.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Main Budget Display */}
          <Card className="mb-8 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Total Budget */}
                <div className="bg-primary p-8 text-primary-foreground">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20">
                      <Euro className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/80">Total Budget</p>
                      <h3 className="text-3xl font-bold">4.494 Billion</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-primary-foreground/80">
                      The Paris 2024 organizing budget is designed to deliver exceptional 
                      Games while maintaining fiscal responsibility.
                    </p>
                    
                    <div className="pt-4 border-t border-primary-foreground/20">
                      <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-2">
                        Funding Sources
                      </p>
                      <div className="space-y-3">
                        {fundingSources.map((source) => (
                          <div key={source.label}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{source.label}</span>
                              <span className="font-semibold">{source.percentage}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-primary-foreground/20 overflow-hidden">
                              <div 
                                className={cn("h-full rounded-full transition-all duration-1000", source.color)}
                                style={{ width: `${source.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Private Funding Highlight */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-baseline gap-1 mb-4">
                      <span className="text-6xl font-bold text-secondary">96</span>
                      <span className="text-3xl font-bold text-secondary">%</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Private Funding</h4>
                    <p className="text-muted-foreground text-sm">
                      Paris 2024 sets a new standard for Olympic financing with nearly 
                      all funding coming from private sources, including:
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-secondary" />
                        IOC contributions and broadcast rights
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-secondary" />
                        Corporate sponsorships and partnerships
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-secondary" />
                        Ticket sales and merchandising
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-secondary" />
                        Licensing and hospitality programs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Budget Breakdown */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {budgetBreakdown.map((item) => {
              const Icon = item.icon
              const isActive = activeCategory === item.id

              return (
                <Card
                  key={item.id}
                  className={cn(
                    "cursor-pointer transition-all duration-300 hover:shadow-lg",
                    isActive && "ring-2 ring-primary shadow-lg"
                  )}
                  onMouseEnter={() => setActiveCategory(item.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  onClick={() => setShowDetails(showDetails && activeCategory === item.id ? false : true)}
                >
                  <CardHeader className="pb-2">
                    <div className={cn(
                      "mb-2 flex h-10 w-10 items-center justify-center rounded-lg transition-transform",
                      item.color,
                      isActive && "scale-110"
                    )}>
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardDescription className="text-xs">{item.category}</CardDescription>
                    <CardTitle className="text-2xl">{item.amount}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>of total</span>
                        <span className="font-medium">{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} className="h-1.5" />
                    </div>
                    
                    <div className={cn(
                      "grid transition-all duration-300 overflow-hidden",
                      isActive ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <div className="overflow-hidden">
                        <p className="text-xs text-muted-foreground border-t pt-3">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
