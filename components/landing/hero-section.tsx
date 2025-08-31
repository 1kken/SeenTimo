import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent/20 text-primary-foreground">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
            Inspired by Sen. Bam Aquino&#39;s Proposal
          </Badge>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            See Where Every <span className="text-accent">Sentimo</span> Goes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty max-w-3xl mx-auto">
            An experimental blockchain platform making Philippine government financial transactions transparent,
            trustworthy, and publicly auditable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Try the Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              View Transparency Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
