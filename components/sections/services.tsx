"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Sparkles, Megaphone, Star, Heart, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: BookOpen,
    title: "Education for All",
    description: "Providing access to quality education, learning resources, and awareness programs to eliminate illiteracy.",
    image: "/images/service1.jpg",
    color: "primary",
    link: "/services",
  },
  {
    icon: Users,
    title: "Community Upliftment",
    description: "Empowering disadvantaged groups through education, skill development, and awareness initiatives.",
    image: "/images/service2.jpeg",
    color: "secondary",
    link: "/services",
  },
  {
    icon: Sparkles,
    title: "Spiritual Development",
    description: "Promoting inner peace, values, and ethical living through spiritual awareness programs.",
    image: "/images/service3.jpeg",
    color: "accent",
    link: "/spiritual",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description: "Organizing campaigns on education, equality, and social responsibility across communities.",
    image: "/images/service4.jpeg",
    color: "primary",
    link: "/services",
  },
  {
    icon: Star,
    title: "Astrology & Guidance",
    description: "Providing life, career, and relationship guidance through ancient Vedic wisdom and astrology.",
    image: "/images/service5.jpeg",
    color: "secondary",
    link: "/spiritual",
  },
  {
    icon: Heart,
    title: "Meditation & Growth",
    description: "Sessions focused on mindfulness, meditation, and personal development for a balanced life.",
    image: "/images/service6.jpeg",
    color: "accent",
    link: "/spiritual",
  },
]

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "group-hover:border-primary/50",
    gradient: "from-primary/80",
  },
  secondary: {
    bg: "bg-secondary/50",
    text: "text-foreground",
    border: "group-hover:border-secondary",
    gradient: "from-secondary/80",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "group-hover:border-accent/50",
    gradient: "from-accent/80",
  },
}

export function ServicesSection() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Do</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
            Our Programs & Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that true growth combines education with spiritual wisdom. Our programs are designed to nurture not just educated individuals, but compassionate human beings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            return (
              <Link
                key={index}
                href={service.link}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:-translate-y-2",
                  colors.border,
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-t to-transparent", colors.gradient)} />
                  <div className={cn("absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl", colors.bg)}>
                    <service.icon className={cn("h-6 w-6", colors.text)} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/services">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
