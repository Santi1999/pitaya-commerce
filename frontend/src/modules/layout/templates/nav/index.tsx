import { Suspense } from "react"
import { Search } from "lucide-react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import MobileMenu from "./mobile-menu"
import AccountButton from "./account-button"

export default async function Nav() {
  return (
    <div className="w-full absolute top-0 left-0 right-0 z-50">
      <header className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20 relative">
          {/* Left: Menu + Search */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <MobileMenu />
            <button
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <LocalizedClientLink href="/">
              {/* Add your logo to /public/pitaya-logo-white.png */}
              <img
                src="/pitaya-logo-white.png"
                alt="Pitaya"
                className="h-10 sm:h-12 lg:h-16 w-auto"
              />
            </LocalizedClientLink>
          </div>

          {/* Right: Cart + Account */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  className="text-white hover:opacity-70 transition-opacity"
                  aria-label="Cart"
                >
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <AccountButton />
          </div>
        </nav>
      </header>
    </div>
  )
}
