"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, HandHeart, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Donate Card */}
          <div
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-primary p-8 lg:p-12 text-primary-foreground transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/hero-education.jpg"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-balance">
                Support the Change
              </h3>
              
              <p className="text-primary-foreground/90 leading-relaxed mb-8 max-w-md">
                Your contribution can transform lives. Help us educate underprivileged children, provide learning materials, conduct awareness programs, and promote equality and empowerment.
              </p>

              {/* Impact Preview */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-white/10">
                <div className="text-center">
                  <p className="text-2xl font-bold">500</p>
                  <p className="text-xs text-primary-foreground/70">Books Donated</p>
                </div>
                <div className="text-center border-x border-white/20">
                  <p className="text-2xl font-bold">100</p>
                  <p className="text-xs text-primary-foreground/70">Children Fed</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">50</p>
                  <p className="text-xs text-primary-foreground/70">Classes Funded</p>
                </div>
              </div>
              
              <Button size="lg" variant="secondary" asChild className="group/btn">
                <Link href="/donate">
                  Donate Today
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Volunteer Card */}
          <div
            className={cn(
              "group relative overflow-hidden rounded-3xl bg-accent p-8 lg:p-12 text-accent-foreground transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/images/hero-community.jpg"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/90 to-accent/70" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 mb-6 group-hover:scale-110 transition-transform">
                <HandHeart className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-balance">
                Be the Change You Want to See
              </h3>
              
              <p className="text-accent-foreground/90 leading-relaxed mb-8 max-w-md">
                Join our volunteer community. Teach and mentor students, participate in awareness campaigns, help organize community programs, and offer your professional skills.
              </p>

              {/* Volunteer Roles */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Teaching", "Mentoring", "Events", "Skills Training", "Outreach"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
              
              <Button size="lg" variant="secondary" asChild className="group/btn">
                <Link href="/volunteer">
                  Join as Volunteer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className={cn(
            "mt-12 p-8 lg:p-12 rounded-3xl bg-card border border-border shadow-lg transition-all duration-700 delay-400",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/30">
                <Sparkles className="h-8 w-8 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-card-foreground">Need Spiritual Guidance?</h3>
                <p className="text-muted-foreground">Explore our astrology and meditation services</p>
              </div>
            </div>
            <Button size="lg" variant="outline" asChild className="group">
              <Link href="/spiritual">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
