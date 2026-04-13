"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Heart, BookOpen, Users, Megaphone, Shield, CheckCircle, Sparkles, Gift } from "lucide-react"

const impactItems = [
  {
    icon: BookOpen,
    title: "Educate Children",
    description: "Provide learning materials and resources for underprivileged students.",
  },
  {
    icon: Users,
    title: "Empower Communities",
    description: "Support skill development and awareness programs in marginalized areas.",
  },
  {
    icon: Megaphone,
    title: "Spread Awareness",
    description: "Conduct campaigns on education, equality, and social responsibility.",
  },
  {
    icon: Heart,
    title: "Promote Equality",
    description: "Help create opportunities for those who have been historically underserved.",
  },
]

const donationAmounts = [500, 1000, 2500, 5000, 10000]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000)
  const [customAmount, setCustomAmount] = useState("")

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <Image
            src="/images/hero-education.jpg"
            alt="Donate to Divine Foundation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground mb-6">
                <Gift className="h-4 w-4" />
                <span>Tax Deductible Under 80G</span>
              </div>
              <h1 className="text-4xl font-bold text-background sm:text-5xl lg:text-6xl mb-6 text-balance">
                Your Contribution Can Transform Lives
              </h1>
              <p className="text-xl text-background/80 leading-relaxed">
                Every donation, no matter the size, helps us bring education, awareness, and spiritual growth to those who need it most.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Donation Form */}
              <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-lg border border-border">
                <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-6">Make a Donation</h2>
                
                {/* Amount Selection */}
                <div className="mb-8">
                  <p className="text-sm font-medium text-card-foreground mb-4">Select an amount (INR)</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                          selectedAmount === amount
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {amount.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">INR</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-14"
                    />
                  </div>
                </div>

                {/* Impact Preview */}
                {currentAmount && currentAmount >= 100 && (
                  <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-sm text-primary font-medium mb-2">Your Impact</p>
                    <p className="text-muted-foreground text-sm">
                      {currentAmount >= 10000
                        ? "Your generous donation can educate multiple children for a year!"
                        : currentAmount >= 5000
                        ? "Your donation can provide learning materials for an entire classroom!"
                        : currentAmount >= 2500
                        ? "Your donation can sponsor a child's education for a month!"
                        : currentAmount >= 1000
                        ? "Your donation can provide books and supplies for a student!"
                        : "Every contribution makes a difference in someone's life!"}
                    </p>
                  </div>
                )}

                {/* Donor Information */}
                <div className="space-y-6 mb-8">
                  <h3 className="text-lg font-semibold text-card-foreground">Your Information</h3>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="donorName">Full Name</FieldLabel>
                        <Input id="donorName" placeholder="Your full name" required />
                      </Field>
                    </FieldGroup>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="donorEmail">Email Address</FieldLabel>
                        <Input id="donorEmail" type="email" placeholder="your.email@example.com" required />
                      </Field>
                    </FieldGroup>
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="donorPhone">Phone Number</FieldLabel>
                      <Input id="donorPhone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </Field>
                  </FieldGroup>

                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="donorPAN">PAN Number (For 80G Receipt)</FieldLabel>
                      <Input id="donorPAN" placeholder="ABCDE1234F" />
                    </Field>
                  </FieldGroup>
                </div>

                <Button size="lg" className="w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Donate {currentAmount ? currentAmount.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }) : ""}
                </Button>

                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure payment powered by trusted payment gateway</span>
                </div>
              </div>

              {/* Impact Information */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">Your Donations Help Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every rupee you contribute goes directly toward our programs that transform lives. Here is how your donation makes a difference:
                </p>

                <div className="space-y-6 mb-12">
                  {impactItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tax Benefits */}
                <div className="bg-secondary/30 rounded-2xl p-6 lg:p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Tax Benefits
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All donations to Divine Foundation of India are eligible for tax exemption under Section 80G of the Income Tax Act.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      80G tax exemption certificate provided
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Receipt sent within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      100% of donations used for programs
                    </li>
                  </ul>
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
