import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 md:p-8">
      <Card className="w-full max-w-md mx-auto bg-black border-gray-800 text-center">
        <CardHeader className="items-center">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="text-2xl text-white">Thank You!</CardTitle>
          <CardDescription className="text-gray-300">Your donation has been successfully processed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">
            Thank you for supporting Stuck Mic and real-world air traffic control content. Your contribution helps
            create more educational aviation content.
          </p>
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link href="/">Return to Links</Link>
            </Button>
            <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800" asChild>
              <a href="https://youtube.com/@stuckmic" target="_blank" rel="noopener noreferrer">
                Visit YouTube Channel
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
