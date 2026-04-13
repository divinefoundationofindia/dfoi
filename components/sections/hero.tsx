"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Users, BookOpen, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/slider/slide4.jpg",
    badge: "Education for All",
    badgeIcon: BookOpen,
    title: "Empowering Lives Through Education",
    subtitle: "Building brighter futures for underprivileged children across India",
    cta: { label: "Support Education", href: "/donate" },
  },
  {
    image: "/images/slider/slide2.jpeg",
    badge: "Community Upliftment",
    badgeIcon: Users,
    title: "Spreading Knowledge. Uplifting Humanity.",
    subtitle: "Working together to create an inclusive and compassionate society",
    cta: { label: "Join Our Mission", href: "/volunteer" },
  },
  {
  image: "/images/slider/gov1.jpeg",
  badge: "Social Empowerment",
  badgeIcon: Users,
  title: "Sharing Knowledge. Empowering Lives.",
  subtitle: "Collaborating to build a more inclusive and caring community",
  cta: { label: "Become a Volunteer", href: "/volunteer" },
},
{
  image: "/images/slider/gov2.jpeg",
  badge: "Social Welfare",
  badgeIcon: Users,
  title: "Inclusive Growth for Every Citizen",
  subtitle: "Ensuring equal opportunities and welfare schemes for all sections of society",
  cta: { label: "Check Schemes", href: "/schemes" },
}, 
{
  image: "/images/slider/astro1.jpeg",
  badge: "Life Guidance",
  badgeIcon: Users,
  title: "Guided by the Stars",
  subtitle: "Find clarity in love, career, and life through astrology",
  cta: { label: "Consult Now", href: "/consultation" },
},
{
  image: "/images/slider/astro2.jpeg",
  badge: "Vedic Astrology",
  badgeIcon: Users,
  title: "Ancient Wisdom for Modern Life",
  subtitle: "Explore Vedic astrology to understand karma, destiny, and future",
  cta: { label: "Check Kundli", href: "/kundli" },
},
{
  image: "/images/slider/astro3.jpeg",
  badge: "Astrology Guidance",
  badgeIcon: Users,
  title: "Discover Your Cosmic Path",
  subtitle: "Unlock the wisdom of the stars to guide your life’s journey",
  cta: { label: "Explore Horoscope", href: "/horoscope" },
}
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = slides[currentSlide]
  const BadgeIcon = slide.badgeIcon

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-700 ease-out",
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground mb-6 transition-all duration-500",
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            <BadgeIcon className="h-4 w-4" />
            <span>{slide.badge}</span>
          </div>

          {/* Title */}
          <h1
            className={cn(
              "text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-balance transition-all duration-500 delay-100",
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "text-lg lg:text-xl text-background/90 leading-relaxed max-w-2xl mb-8 transition-all duration-500 delay-200",
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-wrap gap-4 transition-all duration-500 delay-300",
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            <Button size="lg" asChild className="group">
              <Link href={slide.cta.href}>
                {slide.cta.label}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 border-background/30 text-background hover:bg-background/20" asChild>
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div
            className={cn(
              "flex flex-wrap gap-8 mt-12 pt-8 border-t border-background/20 transition-all duration-500 delay-400",
              isAnimating ? "opacity-0" : "opacity-100"
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-background">5000+</p>
                <p className="text-sm text-background/70">Lives Impacted</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <BookOpen className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-background">50+</p>
                <p className="text-sm text-background/70">Programs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
                <Sparkles className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-background">5+</p>
                <p className="text-sm text-background/70">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm text-background hover:bg-background/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentSlide(index)
                  setTimeout(() => setIsAnimating(false), 700)
                }
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentSlide ? "w-8 bg-primary" : "w-2 bg-background/50 hover:bg-background/70"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-background/20 backdrop-blur-sm text-background hover:bg-background/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Logo Watermark */}
      <div className="absolute top-8 right-8 opacity-30">
        <Image
          src="/images/dfi-logo.webp"
          alt="DFI"
          width={80}
          height={80}
          className="drop-shadow-lg"
        />
      </div>
    </section>
  )
}
