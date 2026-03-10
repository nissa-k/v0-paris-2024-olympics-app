"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Eye, Wifi, Shield, Smartphone, Cloud } from "lucide-react"

const technologies = {
  ai: [
    {
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms analyzed athlete performances in real-time, providing coaches with instant insights.",
      impact: "15% improvement in training efficiency",
      icon: Cpu,
    },
    {
      title: "Computer Vision",
      description: "Advanced image recognition for automatic officiating assistance and real-time tracking.",
      impact: "Used in 12 sports",
      icon: Eye,
    },
    {
      title: "AI Commentary",
      description: "Automated highlights and AI-assisted commentary in multiple languages for global audiences.",
      impact: "50+ languages supported",
      icon: Smartphone,
    },
  ],
  connectivity: [
    {
      title: "5G Networks",
      description: "Ultra-fast 5G connectivity across all venues enabling seamless streaming and communication.",
      impact: "10Gbps peak speeds",
      icon: Wifi,
    },
    {
      title: "Edge Computing",
      description: "Distributed computing infrastructure for low-latency data processing at venue level.",
      impact: "Sub-10ms latency",
      icon: Cloud,
    },
    {
      title: "Cybersecurity",
      description: "Multi-layered security systems protecting athlete data and critical infrastructure.",
      impact: "Zero major breaches",
      icon: Shield,
    },
  ],
}

export function TechHighlights() {
  const [activeTab, setActiveTab] = useState("ai")

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Technology Highlights
          </h2>
          <p className="text-muted-foreground">
            The key innovations that powered the Paris 2024 Games experience.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-4xl">
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger value="ai">AI & Analytics</TabsTrigger>
            <TabsTrigger value="connectivity">Connectivity & Security</TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {technologies.ai.map((tech) => (
                <Card key={tech.title} className="relative overflow-hidden">
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-4 -translate-y-4 rounded-full bg-primary/5" />
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <tech.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-base">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{tech.description}</CardDescription>
                    <Badge variant="secondary" className="text-xs">
                      {tech.impact}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="connectivity" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {technologies.connectivity.map((tech) => (
                <Card key={tech.title} className="relative overflow-hidden">
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-4 -translate-y-4 rounded-full bg-accent/10" />
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      <tech.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-base">{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{tech.description}</CardDescription>
                    <Badge variant="secondary" className="text-xs">
                      {tech.impact}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
