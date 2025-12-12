"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Crown, Gem } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    id: "gold",
    name: "Aeroluxe Gold",
    icon: Sparkles,
    price: "25,000",
    period: "per year",
    description: "Essential luxury travel membership",
    features: [
      "Priority booking",
      "10% discount on all flights",
      "Complimentary concierge service",
      "Access to Gold lounges",
      "Flexible cancellation",
    ],
    popular: false,
  },
  {
    id: "elite",
    name: "Aeroluxe Elite",
    icon: Crown,
    price: "75,000",
    period: "per year",
    description: "Premium membership with exclusive benefits",
    features: [
      "Priority booking + upgrades",
      "20% discount on all flights",
      "Dedicated concierge team",
      "Access to Elite lounges worldwide",
      "Free cancellation & changes",
      "Complimentary ground transportation",
      "Exclusive events & experiences",
    ],
    popular: true,
  },
  {
    id: "royal-black",
    name: "Aeroluxe Royal Black",
    icon: Gem,
    price: "200,000",
    period: "per year",
    description: "Ultimate luxury membership tier",
    features: [
      "Highest priority booking",
      "30% discount on all flights",
      "Personal aviation advisor",
      "Access to all lounges & facilities",
      "Unlimited changes & cancellations",
      "Private terminal access",
      "Helicopter transfers included",
      "Exclusive jet ownership opportunities",
      "24/7 white-glove service",
    ],
    popular: false,
  },
]

export function MembershipPlans() {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Ultra-luxury black glass gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A24A' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4 text-white">
            Membership Tiers
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect membership level for your luxury travel needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={cn(
                  "relative rounded-3xl p-8 shadow-luxury-lg transition-all",
                  plan.popular
                    ? "bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 border-2 border-luxury-gold"
                    : "bg-black/40 glass border border-luxury-gold/20"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-luxury-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/20 mb-4">
                    <Icon className="h-8 w-8 text-luxury-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "w-full py-4 rounded-xl font-semibold transition-all",
                    plan.popular
                      ? "bg-luxury-gold text-black hover:bg-luxury-gold/90"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  )}
                >
                  Join {plan.name}
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

