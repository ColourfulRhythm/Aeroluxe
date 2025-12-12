"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plane } from "lucide-react"

export function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
    >
      <div className="bg-white dark:bg-black border-t border-border shadow-luxury-lg">
        <Link
          href="/booking"
          className="flex items-center justify-center space-x-2 w-full py-4 px-6 bg-foreground text-background font-medium"
        >
          <Plane className="h-5 w-5" />
          <span>Book a Private Jet</span>
        </Link>
      </div>
    </motion.div>
  )
}

