"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const departments = [
  {
    id: "leadership",
    title: "Executive Leadership",
    color: "bg-primary",
    roles: [
      { name: "Tony Estanguet", position: "President" },
      { name: "Etienne Thobois", position: "CEO" },
      { name: "Michel Cadot", position: "Interministerial Delegate" },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    color: "bg-accent",
    roles: [
      { name: "Venue Management", position: "35 Competition Sites" },
      { name: "Transportation", position: "Athlete & Spectator Logistics" },
      { name: "Security", position: "35,000+ Security Personnel" },
    ],
  },
  {
    id: "sports",
    title: "Sports & Athletes",
    color: "bg-secondary",
    roles: [
      { name: "Sport Delivery", position: "32 Olympic Sports" },
      { name: "Athlete Services", position: "Olympic Village" },
      { name: "Competition", position: "329 Medal Events" },
    ],
  },
  {
    id: "experience",
    title: "Games Experience",
    color: "bg-chart-4",
    roles: [
      { name: "Ceremonies", position: "Opening & Closing" },
      { name: "Torch Relay", position: "68 Days Across France" },
      { name: "Cultural Program", position: "Olympiad Culturelle" },
    ],
  },
]

export function ParisCommittee() {
  const [activeId, setActiveId] = useState<string | null>("leadership")

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Paris 2024 Organizing Committee
          </h2>
          <p className="text-muted-foreground">
            The committee responsible for delivering the Games, with over 4,000 
            employees and 45,000 volunteers.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {departments.map((dept) => (
            <Card
              key={dept.id}
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg",
                activeId === dept.id && "ring-2 ring-primary"
              )}
              onClick={() => setActiveId(activeId === dept.id ? null : dept.id)}
            >
              <CardHeader className="pb-3">
                <div className={cn("mb-3 h-2 w-full rounded-full", dept.color)} />
                <CardTitle className="text-base">{dept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {dept.roles.map((role) => (
                    <div
                      key={role.name}
                      className={cn(
                        "rounded-lg border p-3 transition-all",
                        activeId === dept.id ? "border-primary bg-primary/5" : "border-border"
                      )}
                    >
                      <div className="font-medium text-sm">{role.name}</div>
                      <div className="text-xs text-muted-foreground">{role.position}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">4,000+</div>
              <CardDescription className="mt-1">Employees</CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">45,000</div>
              <CardDescription className="mt-1">Volunteers</CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">$4.4B</div>
              <CardDescription className="mt-1">Budget</CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">7 Years</div>
              <CardDescription className="mt-1">Preparation</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
