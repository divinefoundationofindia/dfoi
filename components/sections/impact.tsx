"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Users, BookOpen, MapPin, Calendar, Heart, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Children and families served",
  },
  {
    icon: BookOpen,
    value: 50,
    suffix: "+",
    label: "Programs Conducted",
    description: "Educational & spiritual initiatives",
  },
  {
    icon: MapPin,
    value: 20,
    suffix: "+",
    label: "Communities Reached",
    description: "Across multiple states",
  },
  {
    icon: Calendar,
    value: 5,
    suffix: "+",
    label: "Years of Service",
    description: "Dedicated to humanity",
  },
  {
    icon: Heart,
    value: 100,
    suffix: "+",
    label: "Volunteers",
    description: "Passionate changemakers",
  },
  {
    icon: Sparkles,
    value: 1000,
    suffix: "+",
    label: "Spiritual Sessions",
    description: "Guidance & meditation",
  },
]

function AnimatedCounter({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          
          setTimeout(() => {
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-background">
      {count.toLocaleString()}{suffix}
    </div>
  )
}

export function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-community.jpg"
          alt="Impact Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Impact</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 text-balance text-background">
            Making a Difference, One Life at a Time
          </h2>
          <p className="text-lg text-background/80 leading-relaxed">
            Every number represents a story of transformation, hope, and empowerment. Your support helps us create lasting change in communities across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "group relative text-center p-8 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm hover:bg-background/10 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                
                <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={index * 100} />
                
                <p className="mt-2 text-lg font-semibold text-background">{stat.label}</p>
                <p className="text-sm text-background/60">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div
          className={cn(
            "mt-16 text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-xl text-background/80 italic max-w-2xl mx-auto">
            &ldquo;Every contribution matters. Together, we can build a better, more conscious, and compassionate society.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
