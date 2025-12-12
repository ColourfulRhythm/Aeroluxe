"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Users, Gauge, Zap, Check, BookOpen } from "lucide-react"
import { Jet } from "@/lib/jets"

interface JetDetailsProps {
  jet: Jet
}

export function JetDetails({ jet }: JetDetailsProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/jets"
        className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Fleet</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] rounded-3xl overflow-hidden shadow-luxury-lg"
        >
          <Image
            src={jet.image}
            alt={jet.name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-2">
              {jet.name}
            </h1>
            <p className="text-xl text-muted-foreground">{jet.manufacturer}</p>
          </div>

          <p className="text-lg text-muted-foreground">{jet.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
            <div>
              <Users className="h-8 w-8 text-luxury-gold mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Capacity</p>
              <p className="text-2xl font-bold">{jet.capacity} passengers</p>
            </div>
            <div>
              <Gauge className="h-8 w-8 text-luxury-gold mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Range</p>
              <p className="text-2xl font-bold">{jet.range.toLocaleString()} km</p>
            </div>
            <div>
              <Zap className="h-8 w-8 text-luxury-gold mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Speed</p>
              <p className="text-2xl font-bold">{jet.speed} knots</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {jet.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-luxury-grey dark:bg-gray-900 rounded-2xl p-6">
            <p className="text-sm text-muted-foreground mb-1">Starting from</p>
            <p className="text-4xl font-bold mb-4">
              ${jet.pricePerHour.toLocaleString()}
              <span className="text-lg font-normal text-muted-foreground">/hour</span>
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center space-x-2 w-full py-4 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity shadow-luxury"
            >
              <BookOpen className="h-5 w-5" />
              <span>Book This Jet</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

