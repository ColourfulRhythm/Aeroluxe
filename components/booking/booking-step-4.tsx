"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react"

interface BookingStep4Props {
  onPrev: () => void
}

export function BookingStep4({ onPrev }: BookingStep4Props) {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  if (isComplete) {
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
        <h2 className="text-4xl font-display font-bold mb-4">Booking Confirmed!</h2>
        <p className="text-muted-foreground mb-8">
          Your private jet booking has been confirmed. You will receive a confirmation email shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-display font-bold mb-4">Payment</h2>
      <p className="text-muted-foreground mb-8">
        Secure payment powered by Stripe
      </p>

      <form onSubmit={handleSubmit} className="bg-luxury-grey dark:bg-gray-900 rounded-3xl p-8 shadow-luxury-lg space-y-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <Lock className="h-4 w-4" />
          <span>Your payment is secure and encrypted</span>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Card Number</label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Expiry Date</label>
            <input
              type="text"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">CVV</label>
            <input
              type="text"
              value={formData.cvv}
              onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
              placeholder="123"
              maxLength={4}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cardholder Name</label>
          <input
            type="text"
            value={formData.cardholderName}
            onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrev}
            className="flex items-center space-x-2 px-6 py-3 border border-border rounded-xl hover:bg-muted transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </motion.button>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isProcessing}
            className="flex items-center space-x-2 px-8 py-3 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Complete Booking</span>
                <Lock className="h-5 w-5" />
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  )
}

