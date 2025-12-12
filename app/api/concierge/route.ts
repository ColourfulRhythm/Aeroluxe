import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json()

    // AI-powered concierge responses
    // This uses a simple rule-based system, but you can replace with OpenAI API
    const lowerMessage = message.toLowerCase()

    let response = ""

    // Booking-related queries
    if (lowerMessage.includes("book") || lowerMessage.includes("booking") || lowerMessage.includes("reserve")) {
      response = "I'd be delighted to help you book a private jet! We have a premium fleet available from Lagos. Would you like to start by selecting your departure and destination cities? You can also visit our booking page to see our full selection of jets."
    }
    // Pricing queries
    else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
      response = "Our private jet pricing varies based on the aircraft type and flight duration. Our fleet ranges from $6,500 to $18,000 per hour. The Cessna Citation XLS+ starts at $8,500/hour, while our Gulfstream G450 is $18,000/hour. Would you like specific pricing for a particular route?"
    }
    // Membership queries
    else if (lowerMessage.includes("membership") || lowerMessage.includes("member") || lowerMessage.includes("plan")) {
      response = "We offer three exclusive membership tiers: Aeroluxe Gold ($25,000/year), Aeroluxe Elite ($75,000/year), and Aeroluxe Royal Black ($200,000/year). Each tier includes priority booking, discounts, and exclusive benefits. Would you like to learn more about a specific membership tier?"
    }
    // Fleet queries
    else if (lowerMessage.includes("jet") || lowerMessage.includes("aircraft") || lowerMessage.includes("fleet") || lowerMessage.includes("plane")) {
      response = "Our Lagos-based fleet includes the Cessna Citation XLS+ (8 passengers), Bombardier Challenger 605 (12 passengers), Gulfstream G450 (14 passengers), Hawker 900XP (8 passengers), and Embraer Phenom 300 (7 passengers). Each aircraft offers luxury amenities and exceptional comfort. Which jet interests you most?"
    }
    // Availability queries
    else if (lowerMessage.includes("available") || lowerMessage.includes("when") || lowerMessage.includes("schedule")) {
      response = "Our jets are available for booking based on your preferred dates. We recommend booking at least 48 hours in advance to ensure availability. For immediate or same-day bookings, please contact us directly, and we'll do our best to accommodate your needs."
    }
    // Lagos queries
    else if (lowerMessage.includes("lagos") || lowerMessage.includes("departure")) {
      response = "Yes! All our jets are based in Lagos and operate from Murtala Muhammed Airport Private Terminal. We can arrange flights to destinations worldwide. Where would you like to travel?"
    }
    // Amenities queries
    else if (lowerMessage.includes("amenities") || lowerMessage.includes("features") || lowerMessage.includes("what's included") || lowerMessage.includes("include")) {
      response = "Our jets feature premium amenities including Wi-Fi, entertainment systems, luxury seating, full galleys, and refreshment centers. Larger aircraft like the Gulfstream G450 include full bars, conference areas, and sleeping quarters. All flights include our white-glove concierge service."
    }
    // Greeting responses
    else if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      response = "Hello! Welcome to Aeroluxe. I'm here to assist you with your private jet booking needs. How can I help you today?"
    }
    // Help queries
    else if (lowerMessage.includes("help") || lowerMessage.includes("assist")) {
      response = "I'm here to help! I can assist you with booking a private jet, answering questions about our fleet, membership options, pricing, and more. What would you like to know?"
    }
    // Default response
    else {
      response = "Thank you for your message. I'm here to help with your private jet booking needs. Could you tell me more about what you're looking for? I can assist with bookings, fleet information, pricing, membership options, or any other questions about our services."
    }

    return NextResponse.json(
      { 
        success: true, 
        response,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing concierge message:", error)
    return NextResponse.json(
      { 
        success: false, 
        response: "I apologize, but I'm experiencing some technical difficulties. Please try again or contact our support team directly.",
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

