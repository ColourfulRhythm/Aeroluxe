"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookingStep1 } from "./booking-step-1"
import { BookingStep2 } from "./booking-step-2"
import { BookingStep3 } from "./booking-step-3"
import { BookingConfirmation } from "./booking-confirmation"
import { Check } from "lucide-react"
import { Jet } from "@/lib/jets"

const steps = [
  { id: 1, name: "Trip Details" },
  { id: 2, name: "Jet Selection" },
  { id: 3, name: "Passenger Details" },
]

export interface TripDetails {
  departure: string
  destination: string
  departureDate: string
  returnDate: string
  passengers: number
}

export interface PassengerDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  specialRequests: string
}

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedJet, setSelectedJet] = useState<Jet | null>(null)
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null)
  const [passengerDetails, setPassengerDetails] = useState<PassengerDetails | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      {/* Progress Steps */}
      {!isSubmitted && (
      <div className="mb-12">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                    currentStep > step.id
                      ? "bg-luxury-gold text-white"
                      : currentStep === step.id
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    currentStep >= step.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 mx-4 transition-all ${
                    currentStep > step.id ? "bg-luxury-gold" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      )}

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {isSubmitted ? (
            <BookingConfirmation 
              tripDetails={tripDetails}
              selectedJet={selectedJet}
              passengerDetails={passengerDetails}
            />
          ) : (
            <>
              {currentStep === 1 && (
                <BookingStep1 
                  onNext={nextStep}
                  onDataChange={setTripDetails}
                />
              )}
              {currentStep === 2 && (
                <BookingStep2 
                  onNext={nextStep} 
                  onPrev={prevStep}
                  selectedJet={selectedJet}
                  setSelectedJet={setSelectedJet}
                />
              )}
              {currentStep === 3 && (
                <BookingStep3 
                  onPrev={prevStep}
                  selectedJet={selectedJet}
                  onDataChange={setPassengerDetails}
                  onSubmit={async (data) => {
                    setPassengerDetails(data)
                    setIsSubmitted(true)
                    // Send email
                    try {
                      await fetch("/api/booking", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          tripDetails,
                          selectedJet,
                          passengerDetails: data,
                        }),
                      })
                    } catch (error) {
                      console.error("Error submitting booking:", error)
                    }
                  }}
                />
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

