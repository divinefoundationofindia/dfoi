import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FounderMessageSection } from "@/components/sections/founder-message"
import { ImpactSection } from "@/components/sections/impact"
import { Target, Eye, Heart, Users, Compass, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Divine Foundation of India",
  description: "Learn about Divine Foundation of India, our mission, vision, and commitment to transforming lives through education and spiritual growth.",
}

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every individual with empathy and understanding, recognizing the inherent dignity in all.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We welcome all, regardless of background, ensuring our programs reach those who need them most.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "We maintain open communication and accountability in all our operations and use of resources.",
  },
  {
    icon: Compass,
    title: "Integrity",
    description: "We uphold the highest ethical standards in everything we do, staying true to our mission.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/about-team.jpg"
            alt="About Divine Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
              <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl mb-6 text-balance">
                Creating a More Compassionate Society
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Divine Foundation of India is a non-governmental organization dedicated to creating a more inclusive, educated, and spiritually aware society through grassroots initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Mission */}
              <div className="relative overflow-hidden rounded-3xl bg-primary p-8 lg:p-12 text-primary-foreground">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 mb-6">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-primary-foreground/90 leading-relaxed text-lg">
                    To uplift lives by bridging the gap between opportunity and accessibility, ensuring that every individual has access to education, dignity, and personal growth. We work tirelessly to break barriers and create pathways for those who have been historically underserved.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative overflow-hidden rounded-3xl bg-accent p-8 lg:p-12 text-accent-foreground">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 mb-6">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Vision</h2>
                  <p className="text-accent-foreground/90 leading-relaxed text-lg">
                    An India where every individual is educated, empowered, and spiritually aware—living a life of purpose, equality, and respect. We envision communities where knowledge and wisdom flow freely, uplifting all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">What Drives Us</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These values guide every decision we make and every program we run, ensuring we stay true to our commitment to humanity.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Approach</p>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
                  Grassroots Change
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    We follow a grassroots approach, working closely with communities to understand their real needs. Our programs are not top-down initiatives; they are co-created with the people we serve.
                  </p>
                  <p>
                    By engaging directly with communities, we ensure that our interventions are culturally sensitive, contextually relevant, and sustainable in the long term.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Community-driven needs assessment
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Local partnerships and collaboration
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Sustainable, long-term impact focus
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      Regular monitoring and evaluation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl lg:text-8xl font-bold text-primary mb-4">100%</div>
                    <p className="text-xl text-foreground font-semibold">Community Focused</p>
                    <p className="text-muted-foreground mt-2">Every program designed with the community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Message */}
        <FounderMessageSection />

        {/* Impact Stats */}
        <ImpactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
