import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const {
      tripDetails,
      selectedJet,
      passengerDetails,
    } = body

    // Format email content
    const emailContent = `
New Private Jet Booking Request

TRIP DETAILS:
- Departure: ${tripDetails.departure}
- Destination: ${tripDetails.destination}
- Departure Date: ${tripDetails.departureDate || "Not specified"}
- Return Date: ${tripDetails.returnDate || "One-way trip"}
- Passengers: ${tripDetails.passengers}

SELECTED JET:
- Jet: ${selectedJet?.name || "Not selected"}
- Manufacturer: ${selectedJet?.manufacturer || "N/A"}
- Capacity: ${selectedJet?.capacity || "N/A"} passengers
- Range: ${selectedJet?.range || "N/A"} km
- Speed: ${selectedJet?.speed || "N/A"} knots
- Price: $${selectedJet?.pricePerHour?.toLocaleString() || "N/A"} per hour

PASSENGER DETAILS:
- Name: ${passengerDetails.firstName} ${passengerDetails.lastName}
- Email: ${passengerDetails.email}
- Phone: ${passengerDetails.phone}
- Special Requests: ${passengerDetails.specialRequests || "None"}

---
This booking request was submitted from Aeroluxe website.
    `.trim()

    // Here you would integrate with your email service
    // For now, we'll log it and return success
    // You can use services like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // - AWS SES
    
    console.log("Booking Request Received:")
    console.log(emailContent)

    // TODO: Replace with actual email sending service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'bookings@aeroluxe.com',
    //   to: 'your-email@example.com',
    //   subject: 'New Private Jet Booking Request',
    //   text: emailContent,
    // })

    return NextResponse.json(
      { success: true, message: "Booking request submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit booking request" },
      { status: 500 }
    )
  }
}

