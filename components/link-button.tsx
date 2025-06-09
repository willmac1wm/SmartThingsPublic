"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import * as LucideIcons from "lucide-react"

interface LinkButtonProps {
  href: string
  children: React.ReactNode
  icon?: keyof typeof LucideIcons
  variant?: "default" | "contact" | "youtube"
  hasImage?: boolean
}

export function LinkButton({ href, children, icon, variant = "default", hasImage = false }: LinkButtonProps) {
  const Icon = icon ? LucideIcons[icon] : null

  const getButtonStyles = () => {
    switch (variant) {
      case "contact":
        return "w-full justify-start h-12 text-base bg-gray-900 border-gray-700 text-white hover:bg-gray-800"
      case "youtube":
        return "w-full justify-start h-20 text-base bg-gray-900 border-gray-700 text-white hover:bg-gray-800 relative overflow-hidden"
      default:
        return "w-full justify-start h-12 text-base bg-gray-900 border-gray-700 text-white hover:bg-gray-800"
    }
  }

  return (
    <Button variant="outline" className={getButtonStyles()} asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {hasImage && variant === "youtube" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/pilot-cockpit.jpg"
              alt="Aviation content thumbnail"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        )}
        <div className="relative z-10 flex items-center">
          {Icon && <Icon className="mr-2 h-5 w-5" />}
          {children}
        </div>
      </a>
    </Button>
  )
}
