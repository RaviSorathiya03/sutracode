"use client"
import RazorpayPayment from "@/components/razorpay-payment"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Zap, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PaymentPage() {
  const handlePaymentSuccess = (paymentId: string) => {
    console.log("Payment successful:", paymentId)
    // Redirect to success page or show success message
  }

  const handlePaymentError = (error: any) => {
    console.error("Payment error:", error)
    // Handle payment error
  }

  const trustFeatures = [
    { icon: <Shield className="h-6 w-6" />, text: "Bank-level Security", desc: "SSL encrypted payments" },
    { icon: <Zap className="h-6 w-6" />, text: "Instant Delivery", desc: "Project starts immediately" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Money-back Guarantee", desc: "100% satisfaction guaranteed" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              SutraCode
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-amber-400 hover:bg-amber-50 rounded-full font-semibold"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Secure{" "}
              <span className="relative">
                Payment
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full -z-10"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto mb-8">
              Choose your service package and complete your payment securely. Start your project today with our trusted
              payment system.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{feature.text}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full opacity-15 blur-lg"
          />
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <RazorpayPayment onSuccess={handlePaymentSuccess} onError={handlePaymentError} />
        </div>
      </section>

      {/* Additional Trust Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Payment System?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure & Trusted</h3>
              <p className="text-gray-600">Bank-level encryption and PCI DSS compliance ensure your data is safe</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Processing</h3>
              <p className="text-gray-600">Your project starts immediately after successful payment verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">100% money-back guarantee if you're not completely satisfied</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
