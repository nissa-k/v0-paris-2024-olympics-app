import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2017",
    title: "Paris Wins the Bid",
    description: "The IOC selects Paris as the host city for the 2024 Summer Olympics, exactly 100 years after Paris last hosted in 1924.",
  },
  {
    year: "2018",
    title: "Organizing Committee Formed",
    description: "Paris 2024 Organizing Committee established under the leadership of Tony Estanguet, triple Olympic champion.",
  },
  {
    year: "2021",
    title: "Construction Begins",
    description: "Major infrastructure projects kick off, including the Athletes' Village and Aquatics Centre in Seine-Saint-Denis.",
  },
  {
    year: "2023",
    title: "Test Events",
    description: "Olympic test events held across Paris venues, fine-tuning operations and security protocols.",
  },
  {
    year: "2024",
    title: "The Games",
    description: "Paris hosts 10,500 athletes from 206 nations over 19 days of competition, celebrating sport and unity.",
  },
  {
    year: "2025+",
    title: "Legacy Phase",
    description: "Olympic venues transform into community facilities, housing, and public spaces serving Greater Paris residents.",
  },
]

export function LegacyTimeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            The Journey to Paris 2024
          </h2>
          <p className="text-muted-foreground">
            Seven years of planning, building, and preparing for the world's greatest sporting event.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary md:left-1/2" />

                  {/* Content */}
                  <div className={`ml-10 w-full md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <Card>
                      <CardHeader className="pb-2">
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                            {event.year}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{event.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
