"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "/images/hero-education.jpg",
    title: "Education Programs",
    description: "Children learning in our education centers",
  },
  {
    src: "/images/hero-community.jpg",
    title: "Community Events",
    description: "Bringing communities together",
  },
  {
    src: "/images/hero-spiritual.jpg",
    title: "Spiritual Sessions",
    description: "Meditation and spiritual guidance",
  },
  {
    src: "/images/about-team.jpg",
    title: "Our Volunteers",
    description: "Dedicated team making a difference",
  },
  {
    src: "/images/services-education.jpg",
    title: "Teaching Sessions",
    description: "One-on-one mentoring",
  },
  {
    src: "/images/spiritual-guidance.jpg",
    title: "Vedic Guidance",
    description: "Ancient wisdom for modern life",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Work</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
            Moments of Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A glimpse into the lives we touch and the communities we serve.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-2xl",
                index === 0 && "md:col-span-2 md:row-span-2 aspect-auto md:aspect-square"
              )}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-8 w-8 text-background mb-2" />
                <p className="text-sm font-medium text-background text-center px-4">{image.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-5xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <h3 className="text-xl font-bold text-background">{galleryImages[selectedImage].title}</h3>
              <p className="text-background/80">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
