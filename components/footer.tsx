import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-muted/30">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple to-blue shadow-lg">
                <span className="text-base font-bold text-white">P24</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">Paris 2024</span>
                <span className="text-xs text-muted-foreground">Olympic Games</span>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Celebrating excellence, unity, and the spirit of competition at the 2024 Olympic Games in Paris.
            </p>
            {/* Olympic rings representation */}
            <div className="flex items-center gap-1 pt-2">
              <div className="h-4 w-4 rounded-full border-2 border-blue" />
              <div className="-ml-1 h-4 w-4 rounded-full border-2 border-foreground" />
              <div className="-ml-1 h-4 w-4 rounded-full border-2 border-destructive" />
              <div className="-ml-1 h-4 w-4 rounded-full border-2 border-gold" />
              <div className="-ml-1 h-4 w-4 rounded-full border-2 border-green-600" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/infographic", label: "Governance" },
                { href: "/dashboard", label: "Athletes" },
                { href: "/legacy", label: "Legacy" },
                { href: "/innovation", label: "Innovation" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Official Results</li>
              <li>Athlete Profiles</li>
              <li>Event Schedule</li>
              <li>Venues</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Contact Us</li>
              <li>Media Kit</li>
              <li>Accessibility</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Paris 2024 Olympic Games Project
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="h-2 w-2 rounded-full bg-purple" />
            <span className="h-2 w-2 rounded-full bg-blue" />
          </div>
        </div>
      </div>
    </footer>
  )
}
