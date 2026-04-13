"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { 
    href: "/services", 
    label: "Our Work",
    children: [
      { href: "/services", label: "All Programs" },
      { href: "/spiritual", label: "Spiritual Services" },
    ]
  },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-foreground text-background py-2">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +91 9625321566
            </a>
            <a href="mailto:contact@divinefoundation.org" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              divinefoundationofindia@gmail.com
            </a>
          </div>
          <p className="text-background/80">Empowering Lives Through Education & Spirituality</p>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-lg shadow-md border-b border-border"
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/images/dfi-logo.webp"
                alt="Divine Foundation of India Logo"
                width={56}
                height={56}
                className="h-14 w-14 group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                Divine Foundation
              </p>
              <p className="text-xs text-muted-foreground">of India</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground rounded-lg transition-colors hover:text-primary hover:bg-primary/5",
                    link.children && "pr-2"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-48 bg-card rounded-xl shadow-xl border border-border overflow-hidden transition-all duration-200",
                      activeDropdown === link.label
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    )}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
            <Button asChild className="rounded-full">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-20 bg-background border-b border-border shadow-xl transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
                  onClick={() => !link.children && setMobileMenuOpen(false)}
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-4 w-4" />}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-muted-foreground rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <Link href="/volunteer" onClick={() => setMobileMenuOpen(false)}>
                  Volunteer
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
