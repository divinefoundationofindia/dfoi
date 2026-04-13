"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { 
  Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube, 
  CheckCircle, MessageCircle, ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    content: "Divine Foundation of India\nNew Delhi, India - 110001",
    color: "primary",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+91 98765 43210",
    href: "tel:+919876543210",
    color: "secondary",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "contact@divinefoundation.org",
    href: "mailto:contact@divinefoundation.org",
    color: "accent",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Saturday\n10:00 AM - 6:00 PM",
    color: "primary",
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
]

const quickLinks = [
  { label: "General Inquiry", value: "general" },
  { label: "Volunteer Opportunities", value: "volunteer" },
  { label: "Donation Questions", value: "donation" },
  { label: "Spiritual Services", value: "spiritual" },
  { label: "Media & Press", value: "media" },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedInquiry, setSelectedInquiry] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/about-team.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact Us</p>
              <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl mb-6 text-balance">
                Let&apos;s Connect
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Have questions about our programs or want to get involved? We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">Chat with Us</p>
                </div>
              </a>
              <a
                href="mailto:contact@divinefoundation.org"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">contact@divinefoundation.org</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Quick Inquiry Type */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {quickLinks.map((link) => (
                        <button
                          key={link.value}
                          type="button"
                          onClick={() => setSelectedInquiry(link.value)}
                          className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                            selectedInquiry === link.value
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          {link.label}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                          <Input id="firstName" name="firstName" placeholder="Your first name" required className="h-12" />
                        </Field>
                      </FieldGroup>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                          <Input id="lastName" name="lastName" placeholder="Your last name" required className="h-12" />
                        </Field>
                      </FieldGroup>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <Input id="email" name="email" type="email" placeholder="your@email.com" required className="h-12" />
                        </Field>
                      </FieldGroup>
                      <FieldGroup>
                        <Field>
                          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                          <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="h-12" />
                        </Field>
                      </FieldGroup>
                    </div>

                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="subject">Subject</FieldLabel>
                        <Input id="subject" name="subject" placeholder="How can we help you?" required className="h-12" />
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="message">Your Message</FieldLabel>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Tell us more about your inquiry..." 
                          rows={5}
                          required 
                        />
                      </Field>
                    </FieldGroup>

                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={cn(
                        "group p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all",
                        info.href && "cursor-pointer"
                      )}
                      onClick={() => info.href && window.open(info.href, "_blank")}
                    >
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-colors",
                          info.color === "primary" && "bg-primary/10 group-hover:bg-primary/20",
                          info.color === "secondary" && "bg-secondary/30 group-hover:bg-secondary/50",
                          info.color === "accent" && "bg-accent/10 group-hover:bg-accent/20"
                        )}
                      >
                        <info.icon
                          className={cn(
                            "h-6 w-6",
                            info.color === "primary" && "text-primary",
                            info.color === "secondary" && "text-foreground",
                            info.color === "accent" && "text-accent"
                          )}
                        />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted hover:opacity-80 transition-all group"
                        style={{ backgroundColor: `${social.color}20` }}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" style={{ color: social.color }} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129696548!2d77.04417544289063!3d28.527280643580503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Divine Foundation of India Location"
                  />
                </div>

                {/* Directions CTA */}
                <a
                  href="https://maps.google.com/?q=New+Delhi,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">Get Directions to Our Office</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section className="py-16 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">Looking for Something Else?</h2>
              <p className="text-muted-foreground mb-8">
                Explore our programs or learn more about how you can contribute to our mission.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <a href="/donate">Make a Donation</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/volunteer">Become a Volunteer</a>
                </Button>
                <Button variant="ghost" asChild>
                  <a href="/services">View Our Programs</a>
                </Button>
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
