"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              SutraCode
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-amber-400 hover:bg-amber-50 rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
           {/* @ts-expect-error - this is of the dynamic type */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Privacy{" "}
              <span className="relative">
                Policy
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: December 18, 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <Eye className="mr-3 h-6 w-6 text-amber-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    When you contact us or use our services, we may collect personal information such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Project requirements and business information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <Database className="mr-3 h-6 w-6 text-amber-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide and improve our development services</li>
                  <li>Communicate with you about projects and inquiries</li>
                  <li>Send you relevant updates and marketing communications (with your consent)</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Process payments and manage client relationships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <Lock className="mr-3 h-6 w-6 text-amber-600" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>With your explicit consent</li>
                  <li>
                    To trusted service providers who assist in our operations (under strict confidentiality agreements)
                  </li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mt-6">
                  <p className="text-green-700 font-medium">
                    <strong>We never sell your data.</strong> Your information is used solely to provide you with the
                    best possible service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Employee training on data protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand site usage</li>
                  <li>Marketing cookies for personalized content (with consent)</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-amber-600" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-3 text-amber-600" />
                    <span>rsorathiya16@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-3 text-amber-600" />
                    <span>+91 6354405182</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 mt-6">
                  <p className="text-gray-800 font-medium">
                    <strong>Policy Updates:</strong> We may update this Privacy Policy from time to time. We will notify
                    you of any significant changes by posting the new policy on this page.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
