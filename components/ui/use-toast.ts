import type React from "react"
// This is a simplified version of the toast hook
import { toast as sonnerToast } from "@/components/ui/toast"

type ToastProps = {
  title?: string
  description?: string
  action?: React.ReactNode
}

export function toast({ title, description, action }: ToastProps) {
  return sonnerToast({
    title,
    description,
    action,
  })
}
