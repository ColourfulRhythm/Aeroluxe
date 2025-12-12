"use client"

import { motion } from "framer-motion"
import { JetCard } from "@/components/jet-card"
import { jets } from "@/lib/jets"

export function JetsGrid() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4">
          Lagos Fleet
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our premium collection of private jets available from Lagos
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jets.map((jet, index) => (
          <motion.div
            key={jet.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <JetCard jet={jet} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

