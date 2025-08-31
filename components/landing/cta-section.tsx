import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Transparent Governance?
          </h2>
          <p className="text-xl mb-8 text-accent-foreground/90">
            Join the experiment in blockchain-backed government budget transparency. See how every sentimo can be
            tracked and verified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Start with ₱1M Mock Budget
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
            >
              View Public Dashboard
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
