"use client"

import { User } from "lucide-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function AccountButton() {
  return (
    <LocalizedClientLink
      href="/account"
      className="text-white hover:opacity-70 transition-opacity"
      aria-label="Account"
      data-testid="nav-account-link"
    >
      <User className="w-5 h-5 lg:w-6 lg:h-6" />
    </LocalizedClientLink>
  )
}
