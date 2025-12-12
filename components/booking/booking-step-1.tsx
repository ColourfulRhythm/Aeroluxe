"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar, Users } from "lucide-react"
import { TripDetails } from "./booking-flow"

interface BookingStep1Props {
  onNext: () => void
  onDataChange: (data: TripDetails) => void
}

export function BookingStep1({ onNext, onDataChange }: BookingStep1Props) {
  const [formData, setFormData] = useState({
    departure: "Lagos",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: 1,
  })

  useEffect(() => {
    onDataChange(formData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData])

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-display font-bold mb-4">Trip Details</h2>
      <p className="text-muted-foreground mb-8">
        Tell us about your journey
      </p>

      <div className="bg-luxury-grey dark:bg-gray-900 rounded-3xl p-8 shadow-luxury-lg space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Departure City</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={formData.departure}
              onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              placeholder="Enter destination"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Departure Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="date"
                value={formData.departureDate}
                onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Return Date (Optional)</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="date"
                value={formData.returnDate}
                onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Number of Passengers</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="number"
              min="1"
              value={formData.passengers}
              onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="w-full py-4 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity shadow-luxury"
        >
          Continue to Jet Selection
        </motion.button>
      </div>
    </div>
  )
}

