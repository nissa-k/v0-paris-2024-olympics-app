"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Train, 
  Bike, 
  Building2, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Dumbbell,
  MapPin,
  Quote,
  ChevronDown,
  Home,
  Sparkles
} from "lucide-react"

// Animation hook for scroll-based reveals
function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.15, rootMargin: "-50px" }
    )
    
    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))
    
    return () => observer.disconnect()
  }, [])
  
  return visibleSections
}

// Introduction Section
function IntroSection({ isVisible }: { isVisible: boolean }) {
  return (
    <section 
      id="intro" 
      data-animate
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary/70" />
      
      {/* Animated pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <Badge className="mb-6 bg-secondary text-secondary-foreground">
          Seine-Saint-Denis
        </Badge>
        
        <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl mb-6">
          A Territory Transformed
        </h1>
        
        <p className="text-pretty mx-auto max-w-2xl text-lg text-primary-foreground/80 md:text-xl mb-8">
          For the residents of Seine-Saint-Denis, the Paris 2024 Olympics meant more than 
          world-class sports. It marked the beginning of a profound transformation of their 
          daily lives, their neighborhoods, and their opportunities.
        </p>
        
        <div className={`mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary">1.6M</div>
            <div className="text-sm text-primary-foreground/70">Residents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary">21</div>
            <div className="text-sm text-primary-foreground/70">Olympic Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary">40+</div>
            <div className="text-sm text-primary-foreground/70">Years of Impact</div>
          </div>
        </div>
        
        <div className={`mt-16 animate-bounce transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <ChevronDown className="h-8 w-8 mx-auto text-primary-foreground/50" />
        </div>
      </div>
    </section>
  )
}

// Quote Component
function HighlightedQuote({ 
  quote, 
  author, 
  role,
  isVisible,
  delay = 0 
}: { 
  quote: string
  author: string
  role: string
  isVisible: boolean
  delay?: number
}) {
  return (
    <div 
      className={`relative my-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-secondary to-transparent rounded-full" />
      <div className="pl-8">
        <Quote className="h-8 w-8 text-secondary mb-4" />
        <blockquote className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="mt-4">
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  )
}

// Infrastructure Section
function InfrastructureSection({ isVisible }: { isVisible: boolean }) {
  const infrastructureItems = [
    {
      icon: Train,
      title: "Metro Line 14 Extension",
      description: "Extended to Saint-Denis Pleyel, connecting Seine-Saint-Denis to central Paris in just 15 minutes. The new stations feature accessible design and increased capacity.",
      stat: "15 min",
      statLabel: "to Paris center",
    },
    {
      icon: Train,
      title: "Metro Line 16",
      description: "A brand new automated metro line serving the eastern suburbs, dramatically reducing commute times for thousands of daily travelers.",
      stat: "25 km",
      statLabel: "of new track",
    },
    {
      icon: Bike,
      title: "Cycling Infrastructure",
      description: "60 kilometers of new protected cycling lanes connecting neighborhoods, making sustainable transportation accessible to all residents.",
      stat: "60 km",
      statLabel: "of bike lanes",
    },
    {
      icon: Building2,
      title: "Olympic Village Transformation",
      description: "The Athletes' Village is being converted into a vibrant new neighborhood with 2,800 housing units, schools, shops, and public services.",
      stat: "2,800",
      statLabel: "new homes",
    },
  ]

  return (
    <section 
      id="infrastructure" 
      data-animate
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Badge variant="outline" className="mb-4">Infrastructure & Transportation</Badge>
          <h2 className="text-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Connecting Communities
          </h2>
          <p className="text-muted-foreground text-lg">
            The Games catalyzed decades of planned infrastructure improvements, 
            revolutionizing how residents move through and experience their region.
          </p>
        </div>

        {/* Map visualization */}
        <div className={`relative mb-16 bg-card rounded-2xl border overflow-hidden transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="aspect-video md:aspect-[21/9] relative">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
            
            {/* Map grid */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
            
            {/* Metro lines visualization */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid meet">
              {/* Line 14 */}
              <path 
                d="M 80 140 Q 120 100 200 90 T 320 60" 
                fill="none" 
                stroke="hsl(var(--primary))" 
                strokeWidth="4"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{
                  strokeDasharray: 300,
                  strokeDashoffset: isVisible ? 0 : 300,
                  transition: "stroke-dashoffset 1.5s ease-out 0.5s, opacity 0.3s"
                }}
              />
              
              {/* Line 16 */}
              <path 
                d="M 100 50 Q 180 70 260 90 T 350 120" 
                fill="none" 
                stroke="hsl(var(--secondary))" 
                strokeWidth="4"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{
                  strokeDasharray: 300,
                  strokeDashoffset: isVisible ? 0 : 300,
                  transition: "stroke-dashoffset 1.5s ease-out 0.7s, opacity 0.3s"
                }}
              />
              
              {/* Bike lanes */}
              <path 
                d="M 50 100 L 150 80 L 250 100 L 350 70" 
                fill="none" 
                stroke="hsl(var(--accent))" 
                strokeWidth="2"
                strokeDasharray="8,4"
                strokeLinecap="round"
                className={`transition-all duration-1000 delay-900 ${isVisible ? "opacity-100" : "opacity-0"}`}
              />
              
              {/* Station dots */}
              {[
                { x: 80, y: 140, label: "Paris" },
                { x: 200, y: 90, label: "Saint-Denis" },
                { x: 320, y: 60, label: "Pleyel" },
                { x: 260, y: 90, label: "Olympic Village" },
              ].map((station, i) => (
                <g key={station.label} className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${1000 + i * 100}ms` }}>
                  <circle cx={station.x} cy={station.y} r="8" fill="white" stroke="hsl(var(--primary))" strokeWidth="3" />
                  <text x={station.x} y={station.y + 20} textAnchor="middle" className="fill-foreground text-[8px] font-medium">{station.label}</text>
                </g>
              ))}
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-4 h-1 bg-primary rounded-full" />
                <span>Metro Line 14</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-4 h-1 bg-secondary rounded-full" />
                <span>Metro Line 16</span>
              </div>
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-4 h-0.5 bg-accent rounded-full" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 4px, hsl(var(--accent)) 4px, hsl(var(--accent)) 8px)" }} />
                <span>Bike Lanes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {infrastructureItems.map((item, index) => (
            <Card 
              key={item.title}
              className={`group overflow-hidden hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{item.stat}</span>
                      <span className="text-sm text-muted-foreground">{item.statLabel}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <HighlightedQuote 
          quote="For the first time, I can get to work in central Paris in under 20 minutes. The new metro has changed everything for our family."
          author="Fatou Diallo"
          role="Resident of Saint-Denis for 15 years"
          isVisible={isVisible}
          delay={800}
        />
      </div>
    </section>
  )
}

// Economic Impact Section
function EconomicSection({ isVisible }: { isVisible: boolean }) {
  const economicStats = [
    { value: "150,000", label: "Jobs Created", icon: Briefcase },
    { value: "11,000", label: "Training Opportunities", icon: GraduationCap },
    { value: "4.4B", label: "Euros Invested", icon: Sparkles },
  ]

  const jobCategories = [
    { category: "Construction", jobs: 78000, color: "bg-primary" },
    { category: "Event Management", jobs: 45000, color: "bg-secondary" },
    { category: "Security", jobs: 15000, color: "bg-accent" },
    { category: "Hospitality", jobs: 12000, color: "bg-primary/60" },
  ]

  return (
    <section 
      id="economic" 
      data-animate
      className="relative py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Economic Impact</Badge>
          <h2 className="text-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Investing in People
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            The Olympic investment created unprecedented economic opportunities for 
            residents, particularly in construction, event management, and professional training.
          </p>
        </div>

        {/* Key stats */}
        <div className={`grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {economicStats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 mb-4">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Job distribution visualization */}
        <div className={`max-w-2xl mx-auto mb-16 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-lg font-semibold mb-6 text-center">Job Creation by Sector</h3>
          <div className="space-y-4">
            {jobCategories.map((cat, index) => (
              <div key={cat.category} className="group">
                <div className="flex justify-between text-sm mb-2">
                  <span>{cat.category}</span>
                  <span className="text-primary-foreground/70">{cat.jobs.toLocaleString()} jobs</span>
                </div>
                <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${cat.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`}
                    style={{ 
                      width: isVisible ? `${(cat.jobs / 78000) * 100}%` : "0%",
                      transitionDelay: `${500 + index * 150}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training programs */}
        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-primary-foreground/5 border-primary-foreground/10">
            <CardContent className="p-6">
              <GraduationCap className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Youth Training Programs</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Over 11,000 young residents received professional training through Olympic-linked programs, 
                gaining certifications in construction, hospitality, security, and event management. 
                Many have since secured permanent positions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/5 border-primary-foreground/10">
            <CardContent className="p-6">
              <Briefcase className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Local Hiring Commitments</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Construction contracts required that 10% of work hours go to local residents facing 
                employment barriers. This commitment resulted in over 15,000 people from Seine-Saint-Denis 
                gaining valuable work experience.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
          <HighlightedQuote 
            quote="The Olympic training program gave me skills I never thought I could have. Now I'm a certified electrician with a full-time job. This is my legacy from the Games."
            author="Mamadou Traoré"
            role="Age 24, Saint-Ouen"
            isVisible={isVisible}
            delay={800}
          />
        </div>
      </div>
    </section>
  )
}

// Social Impact Section
function SocialSection({ isVisible }: { isVisible: boolean }) {
  const sportsInfrastructure = [
    {
      name: "Olympic Aquatics Centre",
      location: "Saint-Denis",
      description: "Now a public swimming facility offering lessons, recreational swimming, and sports programs for all residents.",
      capacity: "5,000 visitors/day",
      features: ["50m Olympic Pool", "Diving Platforms", "Community Pools", "Learn-to-Swim Programs"],
    },
    {
      name: "Multisport Complex",
      location: "Dugny",
      description: "A new community sports center with indoor courts, fitness facilities, and youth programs.",
      capacity: "2,500 visitors/day",
      features: ["Basketball Courts", "Fitness Center", "Youth Programs", "Accessible Design"],
    },
    {
      name: "Urban Park Network",
      location: "Multiple Sites",
      description: "New and renovated parks with outdoor fitness equipment, running tracks, and gathering spaces.",
      capacity: "10+ hectares",
      features: ["Running Tracks", "Outdoor Gyms", "Playgrounds", "Gathering Spaces"],
    },
  ]

  return (
    <section 
      id="social" 
      data-animate
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Badge variant="outline" className="mb-4">Social Impact</Badge>
          <h2 className="text-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Building Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond infrastructure, the Games strengthened community bonds and created 
            lasting social benefits through improved access to sports and public spaces.
          </p>
        </div>

        {/* Community cohesion highlight */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="overflow-hidden border-2 border-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Community Cohesion</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    The Games brought together residents from diverse backgrounds in a shared 
                    celebration. Volunteer programs, community events, and neighborhood watch 
                    parties created connections that continue today.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-2xl font-bold text-primary">45,000</div>
                      <div className="text-sm text-muted-foreground">Local Volunteers</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Community Events</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated community visualization */}
                    <div className="w-48 h-48 relative">
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                          style={{
                            backgroundColor: i % 3 === 0 ? "hsl(var(--primary))" : i % 3 === 1 ? "hsl(var(--secondary))" : "hsl(var(--accent))",
                            top: `${50 + 35 * Math.sin(i * Math.PI / 3)}%`,
                            left: `${50 + 35 * Math.cos(i * Math.PI / 3)}%`,
                            transform: "translate(-50%, -50%)",
                            transitionDelay: `${400 + i * 100}ms`,
                          }}
                        >
                          <Users className="h-5 w-5 text-white" />
                        </div>
                      ))}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center transition-all duration-700 delay-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
                        <Home className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sports infrastructure */}
        <div className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h3 className="text-xl font-semibold text-center mb-8">New Sports Infrastructure for Residents</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {sportsInfrastructure.map((facility, index) => (
              <Card 
                key={facility.name}
                className={`group hover:shadow-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    {facility.location}
                  </div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {facility.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {facility.description}
                  </p>
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      Capacity: {facility.capacity}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature) => (
                      <Badge 
                        key={feature} 
                        variant="outline" 
                        className="text-xs bg-muted/50"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sports participation stats */}
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Dumbbell className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Increased Sports Participation</h3>
              </div>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">+35%</div>
                  <div className="text-sm text-muted-foreground mt-1">Youth Sports Enrollment</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">+50%</div>
                  <div className="text-sm text-muted-foreground mt-1">Women in Sports Programs</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">+25%</div>
                  <div className="text-sm text-muted-foreground mt-1">Overall Physical Activity</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <HighlightedQuote 
          quote="My daughter learned to swim at the Aquatics Centre. She never had that opportunity before. Now she dreams of being an Olympic swimmer herself."
          author="Aminata Koné"
          role="Mother of three, Saint-Denis"
          isVisible={isVisible}
          delay={800}
        />
      </div>
    </section>
  )
}

// Closing Section
function ClosingSection({ isVisible }: { isVisible: boolean }) {
  return (
    <section 
      id="closing" 
      data-animate
      className="relative py-24 md:py-32 bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-balance text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A Legacy That Lives On
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            The Paris 2024 Olympic Games were about more than medals and records. 
            For the residents of Seine-Saint-Denis, they represent a turning point: 
            new connections, new opportunities, and a renewed sense of pride in their community.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The true measure of these Games will be seen in the years to come, 
            as infrastructure, training, and community bonds continue to benefit 
            generations of residents.
          </p>
          
          <div className={`mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">The Legacy Continues</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Storytelling Component
export function LegacyStorytelling() {
  const visibleSections = useScrollAnimation()
  
  return (
    <div className="relative">
      <IntroSection isVisible={visibleSections.has("intro")} />
      <InfrastructureSection isVisible={visibleSections.has("infrastructure")} />
      <EconomicSection isVisible={visibleSections.has("economic")} />
      <SocialSection isVisible={visibleSections.has("social")} />
      <ClosingSection isVisible={visibleSections.has("closing")} />
    </div>
  )
}
