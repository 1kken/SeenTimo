import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, Lock } from "lucide-react"

export function ImpactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
            Why This Matters
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Globe className="h-10 w-10 text-accent mb-4" />
              <CardTitle>Opens Public Auditing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Demonstrates how blockchain can revolutionize auditing of public funds, making government spending truly
                transparent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-accent mb-4" />
              <CardTitle>MVP Prototype</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Serves as a working prototype of what a transparent budget system could look like in practice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Lock className="h-10 w-10 text-accent mb-4" />
              <CardTitle>Bridges Traditional & Blockchain</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connects traditional finance with blockchain auditing tools without converting money into
                cryptocurrency.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
