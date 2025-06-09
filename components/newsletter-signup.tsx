"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Mail, Users } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          source: "linktree",
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for joining! Check your email for confirmation.",
        })
        setEmail("")
        setName("")
      } else {
        throw new Error(data.error || "Subscription failed")
      }
    } catch (error) {
      console.error("Subscription error:", error)
      toast({
        title: "Subscription Error",
        description: "There was an issue subscribing. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Mail className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">ATC Newsletter</h3>
        </div>
        <p className="text-sm text-gray-400">
          Get exclusive ATC insights, aviation stories, and behind-the-scenes content from a retired FAA controller.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            First Name
          </Label>
          <Input
            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            id="name"
            placeholder="Your first name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email Address
          </Label>
          <Input
            className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-start space-x-2 pt-2">
          <Checkbox id="terms" required />
          <Label
            htmlFor="terms"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
          >
            I agree to receive the ATC Newsletter with aviation insights and updates. Unsubscribe anytime.
          </Label>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
          <Mail className="mr-2 h-4 w-4" />
          {isSubmitting ? "Subscribing..." : "Join the Newsletter"}
        </Button>
      </form>

      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <Users className="h-3 w-3" />
          <span>Join 500+ aviation enthusiasts</span>
        </div>
        <p className="text-xs text-gray-500">Weekly insights • Real ATC stories • No spam, ever</p>
      </div>
    </div>
  )
}
