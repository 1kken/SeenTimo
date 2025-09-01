import { HeroSection } from "@/components/landing/hero-section";
import { CoreConceptSection } from "@/components/landing/core-concept-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ImpactSection } from "@/components/landing/impact-section";
import { CTASection } from "@/components/landing/cta-section";
import { Navbar } from "@/components/landing/nav-bar";
import { Footer } from "@/components/landing/footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoreConceptSection />
      <FeaturesSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
