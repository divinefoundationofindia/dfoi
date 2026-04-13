import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Megaphone, Users, Briefcase, Heart, Clock, MapPin, HandHeart, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Volunteer With Us | Divine Foundation of India",
  description: "Join our volunteer community and make a difference. Teach, mentor, organize, and contribute your skills to transform lives.",
}

const opportunities = [
  {
    icon: GraduationCap,
    title: "Teach & Mentor",
    description: "Share your knowledge by teaching students or mentoring young people in their educational journey.",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description: "Participate in community awareness campaigns on education, health, and social responsibility.",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Help organize and coordinate community development programs and events.",
  },
  {
    icon: Briefcase,
    title: "Professional Skills",
    description: "Contribute your professional expertise in areas like design, technology, finance, or legal.",
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Directly contribute to transforming lives and communities.",
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with like-minded individuals who share your values.",
  },
  {
    icon: GraduationCap,
    title: "Learn & Grow",
    description: "Gain new skills and experiences through hands-on involvement.",
  },
]

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/hero-community.jpg"
            alt="Volunteer with Divine Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Join Our Mission</p>
              <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl mb-6 text-balance">
                Be the Change You Want to See
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Join our volunteer community and make a meaningful difference in the lives of others. Your time and skills can help transform communities across India.
              </p>
            </div>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-background">Why Volunteer With Us?</h2>
            </div>
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

        {/* Opportunities */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Opportunities</p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-6 text-balance">
                Ways to Contribute
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We have volunteer opportunities for everyone, regardless of your background or availability.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-6">
                    <opportunity.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{opportunity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
                  <HandHeart className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Join Our Volunteer Team</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we will get in touch with you about volunteering opportunities.
                </p>
              </div>

              <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                        <Input id="firstName" placeholder="Your first name" required />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                        <Input id="lastName" placeholder="Your last name" required />
                      </Field>
                    </FieldGroup>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                      </Field>
                    </FieldGroup>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="city">City</FieldLabel>
                        <Input id="city" placeholder="Your city" required />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="availability">Availability</FieldLabel>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays</SelectItem>
                            <SelectItem value="weekends">Weekends</SelectItem>
                            <SelectItem value="both">Both Weekdays & Weekends</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                    </FieldGroup>
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="interest">Area of Interest</FieldLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="teaching">Teaching & Mentoring</SelectItem>
                          <SelectItem value="awareness">Awareness Campaigns</SelectItem>
                          <SelectItem value="community">Community Programs</SelectItem>
                          <SelectItem value="professional">Professional Skills</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </FieldGroup>

                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="skills">Your Skills & Experience</FieldLabel>
                      <Textarea 
                        id="skills" 
                        placeholder="Tell us about your skills, experience, and what motivates you to volunteer..." 
                        rows={4}
                      />
                    </Field>
                  </FieldGroup>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid gap-4 sm:grid-cols-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Flexible time commitment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>On-site & remote opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
