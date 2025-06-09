import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationForm } from "@/components/donation-form"
import { LinkButton } from "@/components/link-button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 md:p-8">
      <Card className="w-full max-w-md mx-auto bg-black border-gray-800">
        <CardHeader className="items-center text-center">
          <Avatar className="h-24 w-24 mb-4 ring-2 ring-blue-500/20">
            <AvatarImage src="/images/pilot-cockpit.jpg" alt="Stuck Mic - Pilot Cockpit View" />
            <AvatarFallback className="bg-gray-800 text-white">SM</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl text-white">Stuck_Mic</CardTitle>
          <CardDescription className="max-w-sm text-gray-300">
            Stuck Mic delivers real-world air traffic control insight
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="links" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 border-gray-800">
              <TabsTrigger value="links" className="data-[state=active]:bg-gray-700 text-gray-300">
                Links
              </TabsTrigger>
              <TabsTrigger value="donate" className="data-[state=active]:bg-gray-700 text-gray-300">
                Support
              </TabsTrigger>
              <TabsTrigger value="subscribe" className="data-[state=active]:bg-gray-700 text-gray-300">
                Subscribe
              </TabsTrigger>
            </TabsList>
            <TabsContent value="links" className="space-y-3 pt-4">
              <LinkButton href="mailto:contact@stuckmic.com" icon="Mail" variant="contact">
                Contact Stuck Mic
              </LinkButton>
              <LinkButton href="https://youtube.com/@stuckmic" icon="Youtube" variant="youtube" hasImage>
                YouTube
              </LinkButton>
              <LinkButton href="https://tiktok.com/@stuck_mic" icon="Music" variant="default">
                TikTok
              </LinkButton>
              <LinkButton href="https://x.com/stuck_mic" icon="Twitter" variant="default">
                X
              </LinkButton>
              <LinkButton href="https://www.facebook.com/ATCStuckMic/" icon="Facebook" variant="default">
                Facebook
              </LinkButton>
              <LinkButton href="https://www.instagram.com/atc_stuck_mic/" icon="Instagram" variant="default">
                Instagram
              </LinkButton>
            </TabsContent>
            <TabsContent value="donate" className="pt-4">
              <DonationForm />
            </TabsContent>
            <TabsContent value="subscribe" className="pt-4">
              <NewsletterSignup />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4 pt-2">
          <Separator className="bg-gray-800" />
          <SocialLinks />
          <p className="text-xs text-gray-500">© 2025 Stuck Mic. All rights reserved.</p>
        </CardFooter>
      </Card>
    </main>
  )
}
