"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Users, Gauge, Zap, ArrowRight } from "lucide-react"
import { Jet } from "@/lib/jets"
import { cn } from "@/lib/utils"

interface JetCardProps {
  jet: Jet
  className?: string
  onClick?: () => void
  disableLink?: boolean
}

export function JetCard({ jet, className, onClick, disableLink = false }: JetCardProps) {
  const CardContent = (
    <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300 h-full flex flex-col">
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={jet.image}
              alt={jet.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-2xl font-display font-bold text-white mb-1">
                {jet.name}
              </h3>
              <p className="text-white/80 text-sm">{jet.manufacturer}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-muted-foreground mb-6 flex-1">{jet.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
              <div className="flex flex-col items-center">
                <Users className="h-5 w-5 text-luxury-gold mb-1" />
                <span className="text-sm text-muted-foreground">Capacity</span>
                <span className="text-lg font-semibold">{jet.capacity}</span>
              </div>
              <div className="flex flex-col items-center">
                <Gauge className="h-5 w-5 text-luxury-gold mb-1" />
                <span className="text-sm text-muted-foreground">Range</span>
                <span className="text-lg font-semibold">{jet.range} km</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-5 w-5 text-luxury-gold mb-1" />
                <span className="text-sm text-muted-foreground">Speed</span>
                <span className="text-lg font-semibold">{jet.speed} kts</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="text-2xl font-bold">
                  ${jet.pricePerHour.toLocaleString()}
                  <span className="text-sm font-normal text-muted-foreground">/hour</span>
                </p>
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                className="p-2 rounded-full bg-luxury-gold/10 dark:bg-luxury-gold/20"
              >
                <ArrowRight className="h-5 w-5 text-luxury-gold" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  )

  return (
    <motion.div
      whileHover={!onClick ? { y: -8, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn("group", className)}
      onClick={onClick}
    >
      {disableLink || onClick ? (
        CardContent
      ) : (
        <Link href={`/jets/${jet.id}`}>
          {CardContent}
        </Link>
      )}
    </motion.div>
  )
}

