import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileNav from "./MovileNav"

export function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          flowt
        </Link>
        <nav className="hidden md:flex ml-10 space-x-6">
          <Link href="/" className="text-sm text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/solutions" className="text-sm text-white/80 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="/pricing" className="text-sm text-white/80 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/developers" className="text-sm text-white/80 hover:text-white transition-colors">
            Developers
          </Link>
        </nav>
      </div>
      <div className="hidden md:flex items-center space-x-3">
        <Button variant="outline" size="sm" className="bg-transparent rounded-full">
          Log In
        </Button>
        <Button size="sm" className="bg-white hover:bg-white/90 text-black rounded-full px-4">
          Publish App
        </Button>
      </div>
      <MobileNav />
    </header>
  )
}
