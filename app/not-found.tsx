import Link from "next/link"
import { Plane, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center px-4">
        <Plane className="h-24 w-24 text-luxury-gold mx-auto mb-6" />
        <h1 className="text-6xl font-display font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page has taken flight to another destination.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  )
}

