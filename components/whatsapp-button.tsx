"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "911234567890" // Replace with actual number
  const message = encodeURIComponent("Hello! I would like to know more about Divine Foundation of India.")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      <div
        className={cn(
          "absolute bottom-20 right-0 w-80 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-[#25D366] p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white">Divine Foundation</p>
              <p className="text-sm text-white/80">Typically replies within an hour</p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="p-4 bg-muted/50">
          <div className="bg-card rounded-lg p-3 shadow-sm max-w-[85%]">
            <p className="text-sm text-card-foreground">
              Namaste! How can we help you today? Feel free to ask about our programs, donations, or volunteer opportunities.
            </p>
            <p className="text-xs text-muted-foreground mt-1">Just now</p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-4 border-t border-border">
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-medium transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Start Chat
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isOpen ? "bg-foreground text-background rotate-0" : "bg-[#25D366] text-white"
        )}
        aria-label={isOpen ? "Close chat" : "Open WhatsApp chat"}
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      )}
    </div>
  )
}
