"use client"

import { useState } from "react"
import { BellIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(0)
  }

  return (
    <div
      onClick={handleClick}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted cursor-pointer"
      aria-label="Notifications"
    >
      <BellIcon size={18} aria-hidden="true" />
      {count > 0 && (
        <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1">
          {count > 99 ? "99+" : count}
        </Badge>
      )}
    </div>
  )
}
