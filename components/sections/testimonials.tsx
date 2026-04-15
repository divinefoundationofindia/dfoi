"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Divine Foundation changed my life. They provided me with education and hope when I had none. Today, I am proud to be a teacher myself, helping other children achieve their dreams.",
    name: "Priya Sharma",
    role: "Former Beneficiary, Now Volunteer",
    image: "/images/testimonial1.jpg",
    rating: 5,
  },
  {
    quote: "The spiritual guidance I received helped me find clarity during the most challenging time of my life. Their compassion and wisdom are truly divine.",
    name: "Rajesh Kumar",
    role: "Astrology Services Beneficiary",
    image: "/images/testimonial2.jpeg",
    rating: 5,
  },
  {
    quote: "Volunteering with DFI has been the most rewarding experience. Seeing the smiles on children&apos;s faces when they learn something new is priceless.",
    name: "Anjali Patel",
    role: "Volunteer for 3 Years",
    image: "/images/testimonial3.jpeg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = testimonials[currentIndex]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-secondary/20 via-background to-primary/10 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
            Stories of Transformation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from the people whose lives have been touched by Divine Foundation of India.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className={cn(
                    "object-cover transition-all duration-500",
                    isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="relative p-8 lg:p-12">
                <Quote className="h-12 w-12 text-primary/20 mb-6" />
                
                <div
                  className={cn(
                    "transition-all duration-500",
                    isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  )}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-lg lg:text-xl text-card-foreground leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 lg:bottom-8 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                      setTimeout(() => setIsAnimating(false), 500)
                    }
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
