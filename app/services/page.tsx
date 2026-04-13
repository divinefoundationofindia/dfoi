import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Megaphone, GraduationCap, Briefcase, Heart, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Work | Divine Foundation of India",
  description: "Explore our education programs, community upliftment initiatives, and awareness campaigns designed to transform lives.",
}

const programs = [
  {
    icon: BookOpen,
    title: "Education for All",
    description: "Providing access to quality education, learning resources, and awareness programs to eliminate illiteracy. We work with schools, communities, and local educators to ensure no child is left behind.",
    features: [
      "Free learning materials and resources",
      "After-school tutoring programs",
      "Digital literacy initiatives",
      "Scholarship support for deserving students",
    ],
    color: "primary",
  },
  {
    icon: Users,
    title: "Upliftment of Marginalized Communities",
    description: "Empowering disadvantaged groups through education, skill development, and awareness. We focus on historically underserved communities to create pathways for social mobility.",
    features: [
      "Skill development workshops",
      "Women empowerment programs",
      "Legal awareness sessions",
      "Social welfare support",
    ],
    color: "accent",
  },
  {
    icon: Megaphone,
    title: "Community Awareness Programs",
    description: "Organizing campaigns on education, equality, and social responsibility across communities. We believe awareness is the first step toward meaningful change.",
    features: [
      "Health and hygiene awareness",
      "Rights and entitlements education",
      "Environmental consciousness",
      "Social harmony initiatives",
    ],
    color: "secondary",
  },
  {
    icon: GraduationCap,
    title: "Youth Development",
    description: "Preparing young people for successful futures through mentorship, career guidance, and leadership development programs.",
    features: [
      "Career counseling sessions",
      "Leadership development camps",
      "Personality development workshops",
      "Competitive exam preparation",
    ],
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Livelihood Support",
    description: "Helping families achieve financial independence through vocational training and entrepreneurship support programs.",
    features: [
      "Vocational skill training",
      "Small business guidance",
      "Financial literacy programs",
      "Market linkage support",
    ],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Humanitarian Aid",
    description: "Providing immediate support during times of crisis and helping communities recover and rebuild stronger.",
    features: [
      "Disaster relief support",
      "Food and essentials distribution",
      "Medical camp organization",
      "Rehabilitation assistance",
    ],
    color: "secondary",
  },
]

const colorClasses = {
  primary: {
    bg: "bg-primary",
    bgLight: "bg-primary/10",
    text: "text-primary",
    textLight: "text-primary-foreground",
  },
  secondary: {
    bg: "bg-secondary",
    bgLight: "bg-secondary/50",
    text: "text-foreground",
    textLight: "text-secondary-foreground",
  },
  accent: {
    bg: "bg-accent",
    bgLight: "bg-accent/10",
    text: "text-accent",
    textLight: "text-accent-foreground",
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/services-education.jpg"
            alt="Our Programs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Work</p>
              <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl mb-6 text-balance">
                Programs That Transform Lives
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Through our comprehensive programs, we address the root causes of inequality and create lasting change in communities across India.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {programs.map((program, index) => {
                const colors = colorClasses[program.color as keyof typeof colorClasses]
                const isEven = index % 2 === 0
                return (
                  <div
                    key={index}
                    className={`grid gap-8 lg:grid-cols-2 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={`order-2 ${!isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className={`aspect-video rounded-3xl ${colors.bgLight} flex items-center justify-center`}>
                        <program.icon className={`h-24 w-24 lg:h-32 lg:w-32 ${colors.text}`} />
                      </div>
                    </div>
                    <div className={`order-1 ${!isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bgLight} mb-6`}>
                        <program.icon className={`h-7 w-7 ${colors.text}`} />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{program.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                      <ul className="space-y-3 mb-8">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                            <span className={`h-2 w-2 rounded-full ${colors.bg}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 text-balance">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you want to volunteer your time, donate to support our programs, or partner with us, there are many ways to contribute to our mission.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/volunteer">
                  Become a Volunteer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/donate">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
