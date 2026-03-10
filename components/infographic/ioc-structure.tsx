"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building2, Globe, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const iocStructure = [
  {
    id: "session",
    title: "IOC Session",
    description: "The supreme organ of the IOC, meeting annually to elect members and make key decisions",
    icon: Globe,
    members: "111 Members",
    role: "Supreme Authority",
    details: [
      "Elects IOC President and members",
      "Selects host cities for Olympic Games",
      "Approves Olympic sports program",
      "Amends Olympic Charter",
    ],
  },
  {
    id: "executive",
    title: "Executive Board",
    description: "Manages IOC affairs and oversees the administration of the Olympic Movement",
    icon: Building2,
    members: "15 Members",
    role: "Executive Management",
    details: [
      "Manages day-to-day operations",
      "Prepares IOC Session agendas",
      "Monitors compliance with Olympic Charter",
      "Approves technical regulations",
    ],
  },
  {
    id: "commissions",
    title: "IOC Commissions",
    description: "Specialized groups advising on specific areas of Olympic governance",
    icon: Users,
    members: "30+ Commissions",
    role: "Advisory Bodies",
    details: [
      "Athletes Commission",
      "Ethics Commission",
      "Coordination Commissions",
      "Marketing Commission",
    ],
  },
]

export function IOCStructure() {
  const [expandedId, setExpandedId] = useState<string | null>("session")

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            International Olympic Committee
          </h2>
          <p className="text-muted-foreground">
            The IOC is the supreme authority of the Olympic Movement, responsible 
            for the organization of the Olympic Games.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2 lg:block" />

            <div className="space-y-6">
              {iocStructure.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Connector dot */}
                  <div className="absolute left-8 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary md:left-1/2 lg:block" />

                  <Card
                    className={cn(
                      "cursor-pointer transition-all duration-300 hover:shadow-md",
                      index % 2 === 0 ? "lg:mr-[52%]" : "lg:ml-[52%]",
                      expandedId === item.id && "ring-2 ring-primary"
                    )}
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <item.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <div className="mt-1 flex gap-2">
                              <Badge variant="secondary" className="text-xs">{item.members}</Badge>
                              <Badge variant="outline" className="text-xs">{item.role}</Badge>
                            </div>
                          </div>
                        </div>
                        {expandedId === item.id ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                      
                      {expandedId === item.id && (
                        <div className="mt-4 border-t pt-4">
                          <h4 className="mb-2 text-sm font-medium">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {item.details.map((detail) => (
                              <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
