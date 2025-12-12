"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { JetCard } from "@/components/jet-card"
import { jets } from "@/lib/jets"
import { Jet } from "@/lib/jets"

interface BookingStep2Props {
  onNext: () => void
  onPrev: () => void
  selectedJet: Jet | null
  setSelectedJet: (jet: Jet | null) => void
}

export function BookingStep2({ onNext, onPrev, selectedJet, setSelectedJet }: BookingStep2Props) {

  return (
    <div>
      <h2 className="text-4xl font-display font-bold mb-4">Select Your Jet</h2>
      <p className="text-muted-foreground mb-8">
        Choose from our premium Lagos fleet
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {jets.map((jet) => (
          <div
            key={jet.id}
            className={`transition-all ${
              selectedJet?.id === jet.id ? "ring-2 ring-luxury-gold rounded-3xl" : ""
            }`}
          >
            <JetCard 
              jet={jet} 
              onClick={() => setSelectedJet(jet)}
              disableLink={true}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onPrev}
          className="flex items-center space-x-2 px-6 py-3 border border-border rounded-xl hover:bg-muted transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          disabled={!selectedJet}
          className="flex items-center space-x-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Continue</span>
          <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  )
}

