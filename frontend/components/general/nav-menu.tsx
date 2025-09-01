"use client"
import { Badge } from "@/components/ui/badge"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { NavAuthButtons } from "../general/nav-auth-buttons"

type NavMenuProps = {
    isAuthenticated?: boolean | null;
    userName: string | null;
};

export function NavMenu({ isAuthenticated, userName }: NavMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">

                    <div className="flex items-center space-x-2">
                        <Image
                            src={"/logo.png"}
                            alt="Seentimo Logo"
                            width={48}
                            height={48}
                        />

                        <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-foreground">SeenTimo</span>
                        <Badge variant="outline" className="hidden sm:inline-flex text-xs">
                            Beta
                        </Badge>
                    </div>
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    <NavAuthButtons isAuthenticated={isAuthenticated} userName={userName} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden py-4 border-t border-border">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-2 pt-2">
                            <NavAuthButtons isAuthenticated={isAuthenticated} userName={userName} />
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}