"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const NAV_LINKS = [
  { label: "New Arrivals", href: "/store?sort=created_at" },
  { label: "Women", href: "/store?category=women" },
  { label: "Men", href: "/store?category=men" },
  { label: "Collections", href: "/collections" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Contact us", href: "/contact" },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:opacity-70 transition-opacity"
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 lg:w-6 lg:h-6" />
        ) : (
          <Menu className="w-5 h-5 lg:w-6 lg:h-6" />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 lg:top-20 z-40 bg-white">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <LocalizedClientLink
                key={link.href}
                href={link.href}
                className="block text-base hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </LocalizedClientLink>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
