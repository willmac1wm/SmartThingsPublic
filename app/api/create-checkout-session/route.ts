import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(
  "sk_test_51RXsnkQdnlRNXtIC8Gh2CfNPjuUNJXuM167F4DHoStCFRFq8E0oZmeROmSTQ5QUDJFhzpNmgzfw3S9Xv9CKYGdVm002XFUBaSE",
  {
    apiVersion: "2024-06-20",
  },
)

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "usd" } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: "Donation to Stuck Mic",
              description: "Support real-world air traffic control content",
              images: ["https://your-domain.com/stuck-mic-logo.png"], // Optional: Add your logo
            },
            unit_amount: amount, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/`,
      metadata: {
        type: "donation",
        creator: "Stuck_Mic",
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
  }
}
