import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">P24</span>
              </div>
              <span className="text-lg font-semibold">Paris 2024</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Celebrating excellence, unity, and the spirit of competition at the 2024 Olympic Games in Paris.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/infographic" className="hover:text-foreground transition-colors">Infographic</Link></li>
              <li><Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
              <li><Link href="/legacy" className="hover:text-foreground transition-colors">Legacy</Link></li>
              <li><Link href="/innovation" className="hover:text-foreground transition-colors">Innovation</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="cursor-default">Official Results</span></li>
              <li><span className="cursor-default">Athlete Profiles</span></li>
              <li><span className="cursor-default">Event Schedule</span></li>
              <li><span className="cursor-default">Venues</span></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="cursor-default">Contact Us</span></li>
              <li><span className="cursor-default">Media Kit</span></li>
              <li><span className="cursor-default">Accessibility</span></li>
              <li><span className="cursor-default">Privacy Policy</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>Paris 2024 Olympic Games Project</p>
        </div>
      </div>
    </footer>
  )
}
