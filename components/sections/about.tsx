"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Eye, Sparkles, ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

export function AboutSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Image Side */}
          <div
            className={cn(
              "relative transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="Divine Foundation Team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card rounded-2xl shadow-xl p-6 border border-border max-w-[200px]">
                <p className="text-4xl font-bold text-primary mb-1">5+</p>
                <p className="text-sm text-muted-foreground">Years of dedicated service to humanity</p>
              </div>

              {/* Video Play Button (Decorative) */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform">
                <Play className="h-8 w-8 ml-1" />
              </button>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
              Building a Better Tomorrow, Together
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Divine Foundation of India is a non-governmental organization dedicated to creating a more inclusive, educated, and spiritually aware society. We focus on empowering underprivileged and marginalized communities across India through education, awareness, and holistic development.
            </p>

            {/* Values List */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Target, label: "Mission-Driven Approach" },
                { icon: Eye, label: "Vision for Inclusive Growth" },
                { icon: Sparkles, label: "Spiritual Wisdom & Values" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <Button size="lg" asChild className="group">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-8 md:grid-cols-3 mt-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To uplift lives by bridging the gap between opportunity and accessibility, ensuring that every individual has access to education, dignity, and personal growth.",
              color: "primary",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description: "An India where every individual is educated, empowered, and spiritually aware—living a life of purpose, equality, and respect.",
              color: "secondary",
            },
            {
              icon: Sparkles,
              title: "Our Values",
              description: "Compassion & Inclusivity, Transparency & Integrity, Community Participation, and Spiritual Awareness guide everything we do.",
              color: "accent",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm border border-border transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <div
                className={cn(
                  "absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2 transition-colors",
                  card.color === "primary" && "bg-primary/5 group-hover:bg-primary/10",
                  card.color === "secondary" && "bg-secondary/10 group-hover:bg-secondary/20",
                  card.color === "accent" && "bg-accent/5 group-hover:bg-accent/10"
                )}
              />
              <div className="relative">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-xl mb-6",
                    card.color === "primary" && "bg-primary/10",
                    card.color === "secondary" && "bg-secondary/30",
                    card.color === "accent" && "bg-accent/10"
                  )}
                >
                  <card.icon
                    className={cn(
                      "h-7 w-7",
                      card.color === "primary" && "text-primary",
                      card.color === "secondary" && "text-foreground",
                      card.color === "accent" && "text-accent"
                    )}
                  />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
