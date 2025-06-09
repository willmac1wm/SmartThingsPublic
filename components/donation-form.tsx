"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { CreditCard, DollarSign, Loader2 } from "lucide-react"

export function DonationForm() {
  const [amount, setAmount] = useState<string>("15")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleStripeCheckout = async (donationAmount: string) => {
    setIsProcessing(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(Number.parseFloat(donationAmount) * 100), // Stripe uses cents
          currency: "usd",
        }),
      })

      const data = await response.json()

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL received")
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Payment Error",
        description: "There was an issue processing your donation. Please try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const donationAmount = amount === "custom" ? customAmount : amount

    if (!donationAmount || Number.parseFloat(donationAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
      })
      return
    }

    await handleStripeCheckout(donationAmount)
  }

  return (
    <div className="space-y-6">
      {/* Quick Donation Buttons */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Quick Donation
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => handleStripeCheckout("5")}
            className="h-12 bg-green-600 hover:bg-green-700"
            disabled={isProcessing}
          >
            {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "$5"}
          </Button>
          <Button
            onClick={() => handleStripeCheckout("10")}
            className="h-12 bg-green-600 hover:bg-green-700"
            disabled={isProcessing}
          >
            {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "$10"}
          </Button>
          <Button
            onClick={() => handleStripeCheckout("25")}
            className="h-12 bg-green-600 hover:bg-green-700"
            disabled={isProcessing}
          >
            {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "$25"}
          </Button>
          <Button
            onClick={() => handleStripeCheckout("50")}
            className="h-12 bg-green-600 hover:bg-green-700"
            disabled={isProcessing}
          >
            {isProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : "$50"}
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-black px-2 text-gray-400">Or</span>
        </div>
      </div>

      {/* Custom Amount Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="donation-amount" className="text-white">
            Custom Amount
          </Label>
          <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-3 gap-2">
            <Label
              htmlFor="amount-15"
              className={`flex h-12 items-center justify-center rounded-md border border-gray-700 ${
                amount === "15" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-300"
              } cursor-pointer hover:bg-gray-800`}
            >
              <RadioGroupItem value="15" id="amount-15" className="sr-only" />
              $15
            </Label>
            <Label
              htmlFor="amount-30"
              className={`flex h-12 items-center justify-center rounded-md border border-gray-700 ${
                amount === "30" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-300"
              } cursor-pointer hover:bg-gray-800`}
            >
              <RadioGroupItem value="30" id="amount-30" className="sr-only" />
              $30
            </Label>
            <Label
              htmlFor="amount-custom"
              className={`flex h-12 items-center justify-center rounded-md border border-gray-700 ${
                amount === "custom" ? "bg-gray-700 text-white" : "bg-gray-900 text-gray-300"
              } cursor-pointer hover:bg-gray-800`}
            >
              <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
              Custom
            </Label>
          </RadioGroup>
        </div>

        {amount === "custom" && (
          <div className="space-y-2">
            <Label htmlFor="custom-amount" className="text-white">
              Enter amount
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <Input
                id="custom-amount"
                type="number"
                min="1"
                step="0.01"
                placeholder="0.00"
                className="pl-7 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                required={amount === "custom"}
              />
            </div>
          </div>
        )}

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isProcessing}>
          <CreditCard className="mr-2 h-4 w-4" />
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Donate with Stripe"
          )}
        </Button>
      </form>

      {/* Alternative Payment Methods */}
      <div className="space-y-3">
        <div className="text-center text-sm text-gray-400">Other ways to support:</div>

        {/* Featured Buy Me a Coffee Button */}
        <Button
          className="w-full h-12 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold"
          onClick={() => window.open("https://coff.ee/stuck_mic", "_blank")}
        >
          ☕ Buy Me a Coffee
        </Button>

        <div className="grid grid-cols-1 gap-2">
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
            onClick={() => window.open("https://paypal.me/stuckmic", "_blank")}
          >
            PayPal
          </Button>
        </div>
      </div>
    </div>
  )
}
