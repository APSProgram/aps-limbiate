"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  { href: "#servizi", label: "Servizi" },
  { href: "#news", label: "News" },
  { href: "#dove-siamo", label: "Dove Siamo" },
  { href: "#contatti", label: "Contatti" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/57575e5a-4fd1-41fb-8a99-f8311024a59f-c9PQXhk56r0PSu7c2qMyp4gPurQCS7.jpeg"
              alt="APS Limbiate Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <nav className={`md:flex items-center space-x-6 ${isMenuOpen ? "block" : "hidden"}`}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-secondary transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
              onClick={() => {
                const element = document.querySelector("#contatti")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Prenota Appuntamento
            </Button>
          </nav>
          <Button
            className="md:hidden bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "Chiudi" : "Menu"}
          </Button>
        </div>
      </div>
    </header>
  )
}

