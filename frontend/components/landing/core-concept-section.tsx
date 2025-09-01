import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Eye, Shield } from "lucide-react"

export function CoreConceptSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
            Blockchain for Transparency, Not Cryptocurrency
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Contrary to misconceptions, Seentimo doesn&#39;t digitize the peso. Instead, it uses blockchain for what it does
            best:
            <strong className="text-foreground"> logging, immutability, and auditability</strong>. Every peso flow is
            recorded as a verifiable blockchain log that cannot be altered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <Database className="h-12 w-12 mx-auto mb-4 text-accent" />
              <CardTitle>Immutable Logging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every transaction is permanently recorded on the Ethereum Sepolia testnet, creating an unalterable audit
                trail.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Eye className="h-12 w-12 mx-auto mb-4 text-accent" />
              <CardTitle>Public Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Anyone can view the complete transaction flow without logging in, ensuring maximum transparency.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-12 w-12 mx-auto mb-4 text-accent" />
              <CardTitle>Secure Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Powered by Kinde authentication with no personal data stored by SeenTimo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
