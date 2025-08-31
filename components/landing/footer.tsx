export function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">Seentimo</h3>
          <p className="text-primary-foreground/80 mb-6">
            A sandbox for experimenting with blockchain-backed government budget transparency in the Philippine context.
          </p>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/60">
            <span>Powered by Kinde Auth</span>
            <span>•</span>
            <span>Ethereum Sepolia Testnet</span>
            <span>•</span>
            <span>Built with Hardhat</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
