import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Sparkles, Moon, Sun, Heart, Brain, Compass, Flower2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Spiritual & Astrology Services | Divine Foundation of India",
  description: "Align your life with knowledge and energy through our astrology guidance, spiritual counseling, and meditation programs.",
}

const services = [
  {
    icon: Star,
    title: "Astrology Guidance",
    description: "Get personalized insights into your life path, career decisions, and relationships through Vedic astrology analysis.",
    color: "primary",
  },
  {
    icon: Moon,
    title: "Horoscope Analysis",
    description: "Detailed birth chart analysis to understand your strengths, challenges, and life purpose according to ancient wisdom.",
    color: "accent",
  },
  {
    icon: Heart,
    title: "Spiritual Counseling",
    description: "One-on-one guidance sessions to help you navigate life challenges with spiritual wisdom and inner clarity.",
    color: "secondary",
  },
  {
    icon: Brain,
    title: "Meditation Sessions",
    description: "Learn powerful meditation techniques to achieve inner peace, reduce stress, and enhance mental clarity.",
    color: "primary",
  },
  {
    icon: Sun,
    title: "Vedic Knowledge Programs",
    description: "Explore ancient scriptures and timeless wisdom through structured learning programs and workshops.",
    color: "accent",
  },
  {
    icon: Flower2,
    title: "Inner Growth Sessions",
    description: "Transformative sessions focused on personal development, self-awareness, and spiritual evolution.",
    color: "secondary",
  },
]

const benefits = [
  {
    icon: Compass,
    title: "Find Direction",
    description: "Gain clarity on life decisions and discover your true purpose.",
  },
  {
    icon: Heart,
    title: "Inner Peace",
    description: "Learn techniques to manage stress and achieve lasting tranquility.",
  },
  {
    icon: Sparkles,
    title: "Personal Growth",
    description: "Transform challenges into opportunities for spiritual evolution.",
  },
]

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "hover:border-primary/30",
  },
  secondary: {
    bg: "bg-secondary/50",
    text: "text-foreground",
    border: "hover:border-secondary",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "hover:border-accent/30",
  },
}

export default function SpiritualPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/spiritual-guidance.jpg"
            alt="Spiritual Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Spiritual Services</p>
              <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl mb-6 text-balance">
                Align Your Life with Knowledge & Energy
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                At Divine Foundation of India, we believe that true growth combines education with spiritual wisdom. Our services help individuals find clarity, direction, and inner peace.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-background">{benefit.title}</h3>
                  <p className="text-background/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What We Offer</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
                Our Spiritual & Astrology Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each service is designed to help you navigate life&apos;s challenges with ancient wisdom and modern understanding.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const colors = colorClasses[service.color as keyof typeof colorClasses]
                return (
                  <Card key={index} className={`transition-all hover:shadow-lg ${colors.border}`}>
                    <CardHeader>
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} mb-4`}>
                        <service.icon className={`h-7 w-7 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Philosophy</p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
                  Ancient Wisdom for Modern Life
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    In today&apos;s fast-paced world, many seek meaning beyond material success. Our spiritual services bridge ancient Vedic knowledge with contemporary needs, helping you find balance and purpose.
                  </p>
                  <p>
                    We believe that every individual has the potential for profound spiritual growth. Our experienced guides provide personalized support on your journey of self-discovery and transformation.
                  </p>
                  <p>
                    Whether you&apos;re seeking guidance for a specific life decision or looking to deepen your spiritual practice, we&apos;re here to support you every step of the way.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <Sparkles className="h-24 w-24 lg:h-32 lg:w-32 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-foreground mb-2">Discover Your Path</p>
                    <p className="text-muted-foreground">Let ancient wisdom illuminate your journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 text-balance">
              Begin Your Spiritual Journey
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Take the first step toward greater clarity, peace, and purpose. Our experienced guides are ready to support your transformation.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
