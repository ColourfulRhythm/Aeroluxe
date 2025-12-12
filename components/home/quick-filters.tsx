"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar, Plane, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function QuickFilters() {
  const [departure, setDeparture] = useState("Lagos")
  const [destination, setDestination] = useState("")
  const [aircraftType, setAircraftType] = useState("")
  const [date, setDate] = useState("")

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12">
            Plan Your Journey
          </h2>

          <div className="bg-luxury-grey dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-luxury-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Departure */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Departure
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="From"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all"
                  />
                </div>
              </div>

              {/* Destination */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="To"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all"
                  />
                </div>
              </div>

              {/* Aircraft Type */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Aircraft Type
                </label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <select
                    value={aircraftType}
                    onChange={(e) => setAircraftType(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 appearance-none transition-all"
                  >
                    <option value="">Any Type</option>
                    <option value="light">Light Jet</option>
                    <option value="midsize">Midsize Jet</option>
                    <option value="super-midsize">Super Midsize</option>
                    <option value="large">Large Jet</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all"
                  />
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto md:px-12 py-4 bg-foreground text-background rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity shadow-luxury"
            >
              <Search className="h-5 w-5" />
              <span>Search Available Jets</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

