"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Content */}
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20 mb-6">
                <Mail className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4 text-balance">
                Stay Connected with Our Mission
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                Subscribe to receive updates about our programs, success stories, and ways you can make a difference.
              </p>
            </div>

            {/* Form */}
            <div>
              {isSubmitted ? (
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-primary-foreground/10">
                  <CheckCircle className="h-8 w-8 text-primary-foreground shrink-0" />
                  <div>
                    <p className="font-semibold text-primary-foreground">Thank you for subscribing!</p>
                    <p className="text-sm text-primary-foreground/80">You will hear from us soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/30"
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    disabled={isLoading}
                    className={cn("h-12 px-6", isLoading && "opacity-70")}
                  >
                    {isLoading ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
