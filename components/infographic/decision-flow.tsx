import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, CheckCircle2 } from "lucide-react"

const flowSteps = [
  {
    step: 1,
    title: "Bid Submission",
    description: "Cities submit formal bids to host the Olympic Games",
    details: "Includes venue plans, budget, and legacy proposals",
  },
  {
    step: 2,
    title: "Evaluation",
    description: "IOC Evaluation Commission assesses candidate cities",
    details: "Site visits, technical assessments, and risk analysis",
  },
  {
    step: 3,
    title: "IOC Session Vote",
    description: "IOC members vote to select the host city",
    details: "Paris was selected in September 2017",
  },
  {
    step: 4,
    title: "Host City Contract",
    description: "Formal agreement signed between IOC and host city",
    details: "Defines obligations, rights, and responsibilities",
  },
  {
    step: 5,
    title: "Organizing Committee",
    description: "Local organizing committee established",
    details: "Paris 2024 Committee began operations in 2018",
  },
  {
    step: 6,
    title: "Games Delivery",
    description: "Planning, construction, and staging of the Games",
    details: "7 years of preparation culminating in the event",
  },
]

export function DecisionFlow() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Olympic Host Selection Process
          </h2>
          <p className="text-muted-foreground">
            The journey from bid submission to hosting the Games.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="space-y-4">
            {flowSteps.map((step, index) => (
              <div key={step.step}>
                <Card className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      {index === flowSteps.length - 1 && (
                        <CheckCircle2 className="ml-auto h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pl-14">
                    <p className="text-sm text-foreground">{step.description}</p>
                    <CardDescription className="mt-1 text-xs">
                      {step.details}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
