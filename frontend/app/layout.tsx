import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google"
import "./globals.css";
import { AuthProvider } from "@/components/general/auth-provider";
import { Navbar } from "@/components/landing/nav-bar";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeenTimo",
  description: `Seentimo is an experimental platform exploring how blockchain can make government financial transactions transparent, trustworthy, and auditable.
                Inspired by Sen. Bam Aquino’s proposal to use blockchain for government transparency (PhilStar article).`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
        >   
          <Navbar />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
