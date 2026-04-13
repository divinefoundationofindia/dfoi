"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Quote, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function FounderMessageSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-5xl mx-auto">
          {/* Background Decoration */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[300px_1fr] items-center">
            {/* Founder Image */}
            <div
              className={cn(
                "relative transition-all duration-1000",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              )}
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-[280px]">
                <Image
                  src="/images/spiritual-guidance.jpg"
                  alt="Founder - Divine Foundation of India"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              </div>

              {/* Logo Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-4 border border-border">
                <Image
                  src="/images/dfi-logo.webp"
                  alt="DFI Logo"
                  width={60}
                  height={60}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Message Content */}
            <div
              className={cn(
                "relative transition-all duration-1000 delay-200",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              )}
            >
              <Quote className="h-16 w-16 text-primary/10 mb-6" />

              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Founder&apos;s Message
              </p>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  At Divine Foundation of India, our journey began with a simple yet powerful belief—that every human being deserves dignity, education, and the opportunity to grow.
                </p>
                <p>
                  Coming from a society where many still struggle for basic education and equal opportunities, I felt a deep responsibility to contribute towards meaningful change. Our focus has always been on uplifting marginalized communities, especially those who have been historically deprived.
                </p>
                <p>
                  We believe that education is the foundation of transformation, and spirituality is the path to inner strength and peace. By combining both, we aim to nurture not just educated individuals, but compassionate human beings.
                </p>
              </div>

              <p className="text-xl font-semibold text-foreground italic mb-2">
                &ldquo;Together, we can make a difference.&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <p className="font-bold text-foreground">— Founder, Divine Foundation of India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
