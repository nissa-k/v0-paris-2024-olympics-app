import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin } from "lucide-react"

const venues = [
  {
    name: "Olympic Aquatics Centre",
    location: "Seine-Saint-Denis",
    duringGames: "Swimming, Diving, Water Polo",
    afterGames: "Public swimming facility and community sports center",
    capacity: "5,000",
    isNew: true,
  },
  {
    name: "Athletes' Village",
    location: "Saint-Denis, Saint-Ouen, L'Île-Saint-Denis",
    duringGames: "Housing for 14,500 athletes and officials",
    afterGames: "2,800 housing units including social housing, offices, and schools",
    capacity: "52 hectares",
    isNew: true,
  },
  {
    name: "Stade de France",
    location: "Saint-Denis",
    duringGames: "Athletics, Rugby Sevens",
    afterGames: "Continues as France's national stadium for football and rugby",
    capacity: "80,000",
    isNew: false,
  },
  {
    name: "Grand Palais",
    location: "Paris 8th",
    duringGames: "Fencing, Taekwondo",
    afterGames: "Restored historic venue for exhibitions and cultural events",
    capacity: "8,000",
    isNew: false,
  },
  {
    name: "Paris La Défense Arena",
    location: "Nanterre",
    duringGames: "Swimming, Water Polo",
    afterGames: "Multi-purpose arena for sports and entertainment",
    capacity: "17,000",
    isNew: false,
  },
  {
    name: "Eiffel Tower Stadium",
    location: "Champ de Mars",
    duringGames: "Beach Volleyball",
    afterGames: "Temporary venue - site returns to public park",
    capacity: "13,000",
    isNew: false,
  },
]

export function LegacyVenues() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight md:text-3xl">
            Venue Transformation
          </h2>
          <p className="text-muted-foreground">
            How Olympic venues are being repurposed to serve communities long after the Games.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue) => (
            <Card key={venue.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <Building className="h-5 w-5 text-accent-foreground" />
                  </div>
                  {venue.isNew && (
                    <Badge variant="secondary">New Build</Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{venue.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {venue.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">During Games:</span>
                    <p className="text-sm">{venue.duringGames}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">After Games:</span>
                    <p className="text-sm">{venue.afterGames}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Badge variant="outline" className="text-xs">
                    Capacity: {venue.capacity}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
