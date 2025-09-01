import { CheckCircle } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
            Platform Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience government budget transparency through our comprehensive feature set
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Mock Budget Allocation</h3>
                <p className="text-muted-foreground">
                  Every new signup receives a ₱1,000,000 mock budget allocation to simulate high-level budget
                  distribution.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Send & Receive Transactions</h3>
                <p className="text-muted-foreground">
                  Complete transaction system with sender/receiver details, amounts, timestamps, and Ethereum Sepolia
                  transaction hashes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Smart Contract Integration</h3>
                <p className="text-muted-foreground">
                  Developed with Hardhat and deployed on Ethereum Sepolia testnet for reliable blockchain logging.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Secure Authentication</h3>
                <p className="text-muted-foreground">
                  Kinde-powered authentication ensures user security while maintaining privacy - no personal data
                  stored.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Public Dashboard</h3>
                <p className="text-muted-foreground">
                  View complete transaction flows publicly, with authenticated users able to verify via Etherscan
                  Sepolia.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Database Integration</h3>
                <p className="text-muted-foreground">
                  Transaction details stored in Postgres via Prisma, linked to immutable on-chain proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
