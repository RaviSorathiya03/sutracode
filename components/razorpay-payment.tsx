"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { CreditCard, Loader2, Shield, CheckCircle, Star, Zap, ArrowRight, Lock } from "lucide-react"
import { motion } from "framer-motion"

declare global {
  interface Window {
    Razorpay: any
  }
}

interface PaymentProps {
  onSuccess?: (paymentId: string) => void
  onError?: (error: any) => void
}

const servicePackages = [
  {
    id: "landing-page",
    name: "Landing Page",
    price: 15000,
    originalPrice: 20000,
    description: "High-converting landing page with SEO optimization",
    features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Analytics Setup", "2 Revisions"],
    popular: false,
    deliveryTime: "3-5 days",
    badge: "Quick Start",
  },
  {
    id: "mvp-basic",
    name: "MVP Basic",
    price: 50000,
    originalPrice: 70000,
    description: "Complete MVP with essential features",
    features: ["User Authentication", "Core Features", "Database Setup", "Basic Dashboard", "Mobile Responsive"],
    popular: true,
    deliveryTime: "2-3 weeks",
    badge: "Most Popular",
  },
  {
    id: "mvp-pro",
    name: "MVP Pro",
    price: 100000,
    originalPrice: 140000,
    description: "Advanced MVP with premium features",
    features: ["Everything in Basic", "Payment Integration", "Advanced Analytics", "Admin Panel", "API Integration"],
    popular: false,
    deliveryTime: "3-4 weeks",
    badge: "Best Value",
  },
  {
    id: "full-stack",
    name: "Full Stack Application",
    price: 200000,
    originalPrice: 280000,
    description: "Complete web application with all features",
    features: ["Custom Development", "API Integration", "Advanced Features", "Ongoing Support", "Deployment"],
    popular: false,
    deliveryTime: "4-6 weeks",
    badge: "Enterprise",
  },
]

export default function RazorpayPayment({ onSuccess, onError }: PaymentProps) {
  const [selectedPackage, setSelectedPackage] = useState("mvp-basic")
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        setIsScriptLoaded(true)
        resolve(true)
        return
      }

      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => {
        setIsScriptLoaded(true)
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const handlePayment = async () => {
    if (!selectedPackage || !customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a package.",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        throw new Error("Failed to load Razorpay script")
      }

      const selectedPkg = servicePackages.find((pkg) => pkg.id === selectedPackage)
      if (!selectedPkg) {
        throw new Error("Invalid package selected")
      }

      const orderResponse = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: selectedPkg.price,
          currency: "INR",
          receipt: `receipt_${Date.now()}`,
          customer: customerInfo,
          package: selectedPkg,
        }),
      })

      if (!orderResponse.ok) {
        throw new Error("Failed to create order")
      }

      const orderData = await orderResponse.json()

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: selectedPkg.price,
        currency: "INR",
        name: "SutraCode",
        description: selectedPkg.name,
        image: "/logo.png",
        order_id: orderData.id,
        handler: (response: any) => {
          toast({
            title: "Payment Successful!",
            description: `Payment ID: ${response.razorpay_payment_id}`,
          })
          onSuccess?.(response.razorpay_payment_id)
          verifyPayment(response)
        },
        prefill: {
          name: customerInfo.name,
          email: customerInfo.email,
          contact: customerInfo.phone,
        },
        notes: {
          package: selectedPkg.name,
          customer_email: customerInfo.email,
        },
        theme: {
          color: "#f59e0b",
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.on("payment.failed", (response: any) => {
        toast({
          title: "Payment Failed",
          description: response.error.description,
          variant: "destructive",
        })
        onError?.(response.error)
        setIsProcessing(false)
      })

      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Payment Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
      onError?.(error)
    } finally {
      setIsProcessing(false)
    }
  }

  const verifyPayment = async (paymentData: any) => {
    try {
      const verifyResponse = await fetch("/api/verify-razorpay-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      if (verifyResponse.ok) {
        console.log("Payment verified successfully")
      }
    } catch (error) {
      console.error("Payment verification error:", error)
    }
  }

  const selectedPkg = servicePackages.find((pkg) => pkg.id === selectedPackage)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Choose Your{" "}
            <span className="relative">
              Perfect Package
              <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
            Select the package that fits your needs and get started with secure payment processing
          </p>
        </div>

        {/* Package Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicePackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
              className={`relative cursor-pointer ${selectedPackage === pkg.id ? "ring-2 ring-amber-400" : ""}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <Card
                className={`h-full border-2 transition-all duration-300 rounded-3xl overflow-hidden ${
                  selectedPackage === pkg.id
                    ? "border-amber-400 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50"
                    : "border-gray-200 hover:border-amber-300 shadow-lg hover:shadow-xl bg-white"
                } ${pkg.popular ? "ring-2 ring-green-400" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      {pkg.badge}
                    </div>
                  </div>
                )}

                {!pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      {pkg.badge}
                    </div>
                  </div>
                )}

                <CardContent className="p-6 pt-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl font-black text-amber-600">
                          ₹{(pkg.price / 100).toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ₹{(pkg.originalPrice / 100).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-green-600 font-bold text-sm">
                        Save ₹{((pkg.originalPrice - pkg.price) / 100).toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-3 mb-4">
                      <div className="text-blue-700 font-bold text-sm">
                        <Zap className="w-4 h-4 inline mr-1" />
                        Delivery: {pkg.deliveryTime}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {selectedPackage === pkg.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4 p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-200"
                    >
                      <div className="text-amber-700 font-bold text-sm text-center">✓ Selected Package</div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Customer Information & Payment Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customer Information Form */}
          <div className="lg:col-span-2">
            <Card className="border border-amber-200 shadow-lg bg-white rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Your Information</CardTitle>
                <p className="text-gray-600 font-medium">Please provide your details to proceed with the payment</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold text-gray-800 mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="h-14 rounded-2xl border-2 border-gray-200 focus:border-amber-400 text-lg font-medium"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold text-gray-800 mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="h-14 rounded-2xl border-2 border-gray-200 focus:border-amber-400 text-lg font-medium"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-lg font-semibold text-gray-800 mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="h-14 rounded-2xl border-2 border-gray-200 focus:border-amber-400 text-lg font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Security Info */}
                <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                  <div className="flex items-center text-green-700 mb-2">
                    <Shield className="w-6 h-6 mr-3" />
                    <span className="font-bold text-lg">100% Secure Payment</span>
                  </div>
                  <p className="text-green-600 font-medium">
                    Your payment information is encrypted and secure. We accept all major cards, UPI, and net banking
                    through Razorpay.
                  </p>
                  <div className="flex items-center mt-3 text-green-600 text-sm">
                    <Lock className="w-4 h-4 mr-2" />
                    <span>SSL Encrypted • PCI DSS Compliant • Bank-level Security</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Summary & Button */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              {selectedPkg && (
                <Card className="border border-amber-200 shadow-xl bg-gradient-to-br from-white to-amber-50 rounded-3xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100 border-b border-amber-200">
                    <CardTitle className="text-xl text-gray-800 font-bold">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{selectedPkg.name}</h3>
                        <p className="text-gray-600 text-sm">{selectedPkg.description}</p>
                      </div>

                      <div className="bg-white rounded-xl p-4 border border-amber-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Package Price:</span>
                          <span className="text-gray-400 line-through">
                            ₹{(selectedPkg.originalPrice / 100).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Discounted Price:</span>
                          <span className="text-amber-600 font-bold">
                            ₹{(selectedPkg.price / 100).toLocaleString()}
                          </span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-gray-800">Total Amount:</span>
                            <span className="text-2xl font-black text-amber-600">
                              ₹{(selectedPkg.price / 100).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                        <div className="text-green-700 font-bold text-sm mb-1">
                          💰 You Save: ₹{((selectedPkg.originalPrice - selectedPkg.price) / 100).toLocaleString()}
                        </div>
                        <div className="text-green-600 text-sm">🚀 Delivery: {selectedPkg.deliveryTime}</div>
                      </div>

                      {/* Pay Now Button - Prominently positioned */}
                      <div className="pt-4">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={handlePayment}
                            disabled={
                              isProcessing ||
                              !selectedPackage ||
                              !customerInfo.name ||
                              !customerInfo.email ||
                              !customerInfo.phone
                            }
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl py-6 text-xl font-black shadow-2xl hover:shadow-3xl transition-all disabled:opacity-50 border-0"
                            size="lg"
                          >
                            {isProcessing ? (
                              <>
                                <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                                Processing Payment...
                              </>
                            ) : (
                              <>
                                <CreditCard className="mr-3 h-6 w-6" />
                                Pay ₹{(selectedPkg.price / 100).toLocaleString()} Now
                                <ArrowRight className="ml-3 h-6 w-6" />
                              </>
                            )}
                          </Button>
                        </motion.div>

                        <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
                          By proceeding with payment, you agree to our{" "}
                          <a href="/terms" className="text-amber-600 hover:underline">
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a href="/privacy" className="text-amber-600 hover:underline">
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>

                      {/* Trust Badges */}
                      <div className="pt-4 border-t border-amber-200">
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                          <div className="flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                            Money-back guarantee
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                            Instant delivery
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                            24/7 support
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                            Secure payment
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
