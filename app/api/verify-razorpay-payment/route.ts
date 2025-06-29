import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

    // Create signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest("hex")

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      // Here you can save the payment details to your database
      console.log("Payment verified successfully")

      // You can add your business logic here:
      // - Save payment to database
      // - Send confirmation email
      // - Update user subscription
      // - etc.

      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
      })
    } else {
      return NextResponse.json({ success: false, message: "Invalid signature" }, { status: 400 })
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json({ error: "Failed to verify payment" }, { status: 500 })
  }
}
