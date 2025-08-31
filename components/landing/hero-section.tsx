import { Button , buttonVariants} from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

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
            <RegisterLink className={twMerge(buttonVariants({ variant: "secondary",size:"lg" }), "bg-accent text-foreground hover:bg-background/90")}>
              Try the Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </RegisterLink>
            <Link href="/dashboard" className={twMerge(buttonVariants({ variant: "outline",size:"lg" }), "border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent flex items-center justify-center")}>
              View Public Dashboard
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
