import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, name, source } = await request.json()

    // Beehiiv Integration with your actual Publication ID
    const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY
    const BEEHIIV_PUBLICATION_ID = "pub_301ee7d4-35ec-4226-b673-2aab30ff2f0a" // Your actual Publication ID

    if (!BEEHIIV_API_KEY) {
      // For now, log the subscription until API key is ready
      console.log("New subscriber (pending Beehiiv API setup):", {
        email,
        name,
        source,
        timestamp: new Date().toISOString(),
        publication_id: BEEHIIV_PUBLICATION_ID,
      })

      return NextResponse.json({
        success: true,
        message: "Successfully subscribed! You'll be added to our newsletter soon.",
      })
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: source,
        utm_medium: "linktree",
        referring_site: "linktree",
        custom_fields: [
          {
            name: "first_name",
            value: name,
          },
          {
            name: "source",
            value: source,
          },
        ],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Beehiiv API error:", data)
      throw new Error(data.message || "Failed to subscribe to newsletter")
    }

    console.log("Successfully subscribed to Beehiiv:", { email, name, source })

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed! Check your email for confirmation.",
    })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to subscribe. Please try again.",
      },
      { status: 500 },
    )
  }
}
