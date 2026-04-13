"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowRight, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Work" },
  { href: "/spiritual", label: "Spiritual Services" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { label: "Education for All", href: "/services" },
  { label: "Community Upliftment", href: "/services" },
  { label: "Spiritual Guidance", href: "/spiritual" },
  { label: "Astrology Services", href: "/spiritual" },
  { label: "Awareness Programs", href: "/services" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
    }
  }

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Banner */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="hidden lg:flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
                <Heart className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-foreground">Join Us in Making a Difference</h3>
                <p className="text-primary-foreground/80">Your support can change lives. Donate or volunteer today.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" asChild>
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/volunteer">Volunteer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/dfi-logo.webp"
                alt="Divine Foundation of India Logo"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full bg-background/10 p-1"
              />
              <div>
                <p className="text-lg font-bold text-background leading-tight">Divine Foundation</p>
                <p className="text-sm text-background/70">of India</p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Empowering lives through education, awareness, and spiritual growth. Building an inclusive and compassionate society.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-background/80 hover:text-secondary transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link 
                    href={service.href}
                    className="group flex items-center gap-2 text-sm text-background/80 hover:text-secondary transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-background/80">
                  <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>Divine Foundation of India<br />New Delhi, India - 110001</span>
                </li>
                <li>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-background/80 hover:text-secondary transition-colors">
                    <Phone className="h-5 w-5 text-secondary shrink-0" />
                    <span>+91 98765 43210</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@divinefoundation.org" className="flex items-center gap-3 text-sm text-background/80 hover:text-secondary transition-colors">
                    <Mail className="h-5 w-5 text-secondary shrink-0" />
                    <span>contact@divinefoundation.org</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3 text-background">Newsletter</h4>
              {subscribed ? (
                <p className="text-sm text-secondary">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/50 h-10"
                  />
                  <Button type="submit" size="sm" variant="secondary" className="shrink-0 h-10 px-4">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Divine Foundation of India. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
