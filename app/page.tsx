import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { FounderMessageSection } from "@/components/sections/founder-message"
import { ImpactSection } from "@/components/sections/impact"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { GallerySection } from "@/components/sections/gallery"
import { NewsletterSection } from "@/components/sections/newsletter"
import { CTASection } from "@/components/sections/cta"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ImpactSection />
        <TestimonialsSection />
        <GallerySection />
        <FounderMessageSection />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
