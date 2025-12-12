"use client"

import { motion } from "framer-motion"
import { Check, Plane, Mail, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { Jet } from "@/lib/jets"
import { TripDetails, PassengerDetails } from "./booking-flow"

interface BookingConfirmationProps {
  tripDetails: TripDetails | null
  selectedJet: Jet | null
  passengerDetails: PassengerDetails | null
}

export function BookingConfirmation({
  tripDetails,
  selectedJet,
  passengerDetails,
}: BookingConfirmationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <Check className="h-10 w-10 text-white" />
      </motion.div>

      <h2 className="text-4xl font-display font-bold mb-4">Booking Request Submitted!</h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Your private jet booking request has been sent. Our concierge team will contact you shortly to confirm your reservation.
      </p>

      {/* Booking Summary */}
      <div className="bg-luxury-grey dark:bg-gray-900 rounded-3xl p-8 shadow-luxury-lg text-left space-y-6 mb-8">
        <h3 className="text-2xl font-semibold mb-6">Booking Summary</h3>

        {/* Trip Details */}
        {tripDetails && (
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-luxury-gold mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Route</p>
                <p className="font-semibold">
                  {tripDetails.departure} → {tripDetails.destination}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-luxury-gold mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Departure Date</p>
                <p className="font-semibold">
                  {tripDetails.departureDate || "To be confirmed"}
                </p>
                {tripDetails.returnDate && (
                  <>
                    <p className="text-sm text-muted-foreground mt-1">Return Date</p>
                    <p className="font-semibold">{tripDetails.returnDate}</p>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-luxury-gold mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Passengers</p>
                <p className="font-semibold">{tripDetails.passengers}</p>
              </div>
            </div>
          </div>
        )}

        {/* Selected Jet */}
        {selectedJet && (
          <div className="pt-6 border-t border-border">
            <div className="flex items-start space-x-3">
              <Plane className="h-5 w-5 text-luxury-gold mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Selected Jet</p>
                <p className="font-semibold text-lg">{selectedJet.name}</p>
                <p className="text-sm text-muted-foreground">{selectedJet.manufacturer}</p>
                <p className="text-sm mt-2">
                  ${selectedJet.pricePerHour.toLocaleString()}/hour
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Passenger Details */}
        {passengerDetails && (
          <div className="pt-6 border-t border-border">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-luxury-gold mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Contact</p>
                <p className="font-semibold">
                  {passengerDetails.firstName} {passengerDetails.lastName}
                </p>
                <p className="text-sm text-muted-foreground">{passengerDetails.email}</p>
                <p className="text-sm text-muted-foreground">{passengerDetails.phone}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 border border-border rounded-xl hover:bg-muted transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/jets"
          className="px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Browse More Jets
        </Link>
      </div>
    </motion.div>
  )
}

