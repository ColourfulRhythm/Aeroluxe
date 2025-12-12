"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, MessageCircle, Sparkles, Clock } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "concierge"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! Welcome to Aeroluxe Concierge. How can I assist you with your private jet booking today?",
    sender: "concierge",
    timestamp: new Date(),
  },
]

export function ConciergeChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput("")
    setIsTyping(true)

    try {
      // Get AI response from API
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          conversationHistory: updatedMessages.slice(-5).map(m => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text
          }))
        }),
      })

      const data = await response.json()

      const conciergeMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I'm here to help! How can I assist you with your private jet booking?",
        sender: "concierge",
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, conciergeMessage])
      setIsTyping(false)
    } catch (error) {
      console.error("Error getting concierge response:", error)
      const conciergeMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing some technical difficulties. Please try again or contact our support team directly.",
        sender: "concierge",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, conciergeMessage])
      setIsTyping(false)
    }
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-luxury-gold/20 mb-6">
          <MessageCircle className="h-10 w-10 text-luxury-gold" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-display font-bold mb-4">
          Live Concierge
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get personalized assistance from our luxury travel experts
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-luxury-lg overflow-hidden flex flex-col h-[600px]"
      >
        {/* Chat Header */}
        <div className="bg-luxury-grey dark:bg-gray-900 px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-luxury-gold" />
            </div>
            <div>
              <h3 className="font-semibold">Aeroluxe Concierge</h3>
              <p className="text-sm text-muted-foreground flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Online</span>
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-foreground text-background"
                      : "bg-luxury-grey dark:bg-gray-700 text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1 flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-luxury-grey dark:bg-gray-700 rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 bg-luxury-gold rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 bg-luxury-gold rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 bg-luxury-gold rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-luxury-gold/20"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

