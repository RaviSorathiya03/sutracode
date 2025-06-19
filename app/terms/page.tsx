"use client"
import { motion } from "framer-motion"
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, Shield, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function TermsAndConditions() {
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
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Terms &{" "}
              <span className="relative">
                Conditions
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Please read these terms carefully before using our services. By engaging with SutraCode, you agree to
              these terms.
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
                  <Scale className="mr-3 h-6 w-6 text-amber-600" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using SutraCode's website and services, you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Services Description</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">SutraCode provides:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Custom web application development</li>
                  <li>MVP (Minimum Viable Product) development</li>
                  <li>UI/UX design services</li>
                  <li>Landing page creation</li>
                  <li>Technical consulting and strategy</li>
                  <li>Ongoing maintenance and support</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  All services are provided subject to these terms and any additional agreements we may enter into with
                  you.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <CreditCard className="mr-3 h-6 w-6 text-amber-600" />
                  Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Payment Schedule</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>50% deposit required before project commencement</li>
                    <li>Remaining 50% due upon project completion</li>
                    <li>Monthly retainer for ongoing services</li>
                    <li>Additional work billed separately</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Payment Methods</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We accept major credit cards, bank transfers, and other payment methods as agreed upon. All payments
                    are processed securely.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Late Payments</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Late payments may result in project suspension and additional fees. We reserve the right to charge
                    interest on overdue amounts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Project Delivery and Timelines</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Project timelines are estimates based on the scope of work and client responsiveness. Delays may occur
                  due to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Changes in project scope or requirements</li>
                  <li>Delayed feedback or approvals from client</li>
                  <li>Technical complexities or third-party dependencies</li>
                  <li>Force majeure events</li>
                </ul>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4 mt-6">
                  <p className="text-blue-700 font-medium">
                    <strong>Our Commitment:</strong> We strive to deliver all projects on time and will communicate any
                    potential delays immediately.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Client Ownership</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Upon full payment, clients own all custom code, designs, and content created specifically for their
                    project.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">SutraCode Ownership</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We retain ownership of our general methodologies, techniques, know-how, and any pre-existing
                    intellectual property.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Third-Party Components</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Projects may include third-party libraries and frameworks subject to their respective licenses.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-amber-600" />
                  Warranties and Guarantees
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Quality Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We guarantee that our work will be performed in a professional manner and will function as specified
                    in the project requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Bug Fixes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide 30 days of free bug fixes for any issues that arise from our code after project delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Money-Back Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If you're not satisfied with our work, we offer a 100% money-back guarantee within the first 14 days
                    of project commencement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <AlertTriangle className="mr-3 h-6 w-6 text-amber-600" />
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  SutraCode's liability is limited to the amount paid for our services. We are not liable for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Third-party actions or services</li>
                  <li>Issues arising from client's use of delivered products</li>
                </ul>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-4 mt-6">
                  <p className="text-yellow-700 font-medium">
                    <strong>Important:</strong> This limitation applies to the fullest extent permitted by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden mb-8">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold">Termination</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate the agreement with written notice. Upon termination:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Client pays for all work completed to date</li>
                  <li>SutraCode delivers all completed work</li>
                  <li>Both parties return confidential information</li>
                  <li>Ongoing obligations survive termination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-amber-200 shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                <CardTitle className="text-2xl text-gray-800 font-bold flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-amber-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you have any questions about these Terms and Conditions, please contact us:
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
                    <strong>Terms Updates:</strong> We reserve the right to modify these terms at any time. Changes will
                    be effective immediately upon posting. Continued use of our services constitutes acceptance of
                    modified terms.
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
