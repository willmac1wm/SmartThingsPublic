import { Youtube, Music, Twitter, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800" asChild>
        <a href="https://youtube.com/@stuckmic" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <Youtube className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800" asChild>
        <a href="https://tiktok.com/@stuck_mic" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <Music className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800" asChild>
        <a href="https://x.com/stuck_mic" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          <Twitter className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800" asChild>
        <a href="https://www.facebook.com/ATCStuckMic/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <Facebook className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800" asChild>
        <a
          href="https://www.instagram.com/atc_stuck_mic/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )
}
