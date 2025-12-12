"use client"

import { motion } from "framer-motion"

export function ComingSoonOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Transparent white overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      
      {/* Coming Soon Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-4 tracking-tight"
          >
            Coming Soon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-md mx-auto"
          >
            We're preparing something extraordinary for you
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

