"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, User, Mail, Phone, Plane, Send } from "lucide-react"
import { Jet } from "@/lib/jets"
import { PassengerDetails } from "./booking-flow"

interface BookingStep3Props {
  onPrev: () => void
  selectedJet: Jet | null
  onDataChange: (data: PassengerDetails) => void
  onSubmit: (data: PassengerDetails) => Promise<void>
}

export function BookingStep3({ onPrev, selectedJet, onDataChange, onSubmit }: BookingStep3Props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-display font-bold mb-4">Passenger Details</h2>
      <p className="text-muted-foreground mb-8">
        Please provide your contact information
      </p>

      {/* Selected Jet Summary */}
      {selectedJet && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-luxury-grey dark:bg-gray-900 rounded-2xl p-6 mb-6 border border-luxury-gold/20"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Plane className="h-6 w-6 text-luxury-gold" />
            <h3 className="text-lg font-semibold">Selected Jet</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-lg">{selectedJet.name}</p>
              <p className="text-sm text-muted-foreground">{selectedJet.manufacturer}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="font-bold text-xl">
                ${selectedJet.pricePerHour.toLocaleString()}
                <span className="text-sm font-normal text-muted-foreground">/hour</span>
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="bg-luxury-grey dark:bg-gray-900 rounded-3xl p-8 shadow-luxury-lg space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Special Requests (Optional)</label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 resize-none"
            placeholder="Any special requirements or preferences..."
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrev}
            disabled={isSubmitting}
            className="flex items-center space-x-2 px-6 py-3 border border-border rounded-xl hover:bg-muted transition-colors disabled:opacity-50"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={async () => {
              if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
                alert("Please fill in all required fields")
                return
              }
              setIsSubmitting(true)
              onDataChange(formData)
              await onSubmit(formData)
              setIsSubmitting(false)
            }}
            disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
            className="flex items-center space-x-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Submit Booking Request</span>
                <Send className="h-5 w-5" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  )
}

