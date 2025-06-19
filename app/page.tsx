"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code,
  Palette,
  Rocket,
  Globe,
  ExternalLink,
  Star,
  CheckCircle,
  Zap,
  TrendingUp,
  Menu,
  X,
  Calendar,
  Shield,
  Users,
  Award,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleOnHover = {
  whileHover: { scale: 1.02, y: -5 },
  transition: { duration: 0.2 },
}

export default function SutraCodePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  // Close mobile menu when clicking on links
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Lightning-fast web applications built with React, Next.js, and modern frameworks. Optimized for performance and conversions.",
      features: ["React/Next.js", "TypeScript", "API Integration", "Performance Optimization"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Stunning, conversion-focused designs that turn visitors into customers. Every pixel crafted for maximum impact.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "MVP Development",
      description:
        "Get to market in 4-6 weeks with a fully functional MVP. Validate your idea fast and start generating revenue.",
      features: ["Rapid Prototyping", "User Authentication", "Payment Integration", "Analytics Setup"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Landing Pages",
      description:
        "High-converting landing pages that drive results. Optimized for SEO, speed, and mobile-first experience.",
      features: ["SEO Optimized", "Mobile Responsive", "A/B Testing", "Analytics Tracking"],
    },
  ]

  const projects = [
    {
      title: "SaaS Dashboard",
      description: "Complete SaaS platform with user management, billing, and analytics dashboard",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://saas-dashboard-demo.vercel.app",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      metrics: "300% increase in user engagement",
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with inventory management and payment processing",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://ecommerce-platform-demo.vercel.app",
      tags: ["React", "Node.js", "MongoDB", "PayPal"],
      metrics: "250% boost in conversion rate",
    },
    {
      title: "AI-Powered App",
      description: "Intelligent application leveraging machine learning for personalized user experiences",
      image: "/placeholder.svg?height=300&width=500",
      link: "https://ai-app-demo.vercel.app",
      tags: ["Python", "TensorFlow", "React", "AWS"],
      metrics: "400% improvement in user retention",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      content:
        "SutraCode transformed our idea into a profitable SaaS in just 5 weeks. Revenue hit $10K MRR within 3 months of launch!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      company: "TechFlow",
      revenue: "$10K MRR",
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, DataSync",
      content:
        "Our conversion rate jumped from 2% to 8.7% after the redesign. The ROI was incredible - paid for itself in 2 weeks.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      company: "DataSync",
      revenue: "340% conversion increase",
    },
    {
      name: "Emily Watson",
      role: "Product Manager, StartupX",
      content:
        "Professional, fast, and results-driven. They delivered exactly what we needed and helped us raise $2M in Series A.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      company: "StartupX",
      revenue: "$2M Series A",
    },
  ]

  const stats = [
    { number: "150+", label: "Projects Delivered", icon: <CheckCircle className="h-5 w-5" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Star className="h-5 w-5" /> },
    { number: "5x", label: "Average ROI", icon: <TrendingUp className="h-5 w-5" /> },
    { number: "2h", label: "Response Time", icon: <Zap className="h-5 w-5" /> },
  ]

  const trustIndicators = [
    { icon: <Shield className="h-6 w-6" />, text: "100% Money-Back Guarantee" },
    { icon: <Users className="h-6 w-6" />, text: "500+ Happy Clients" },
    { icon: <Award className="h-6 w-6" />, text: "Award-Winning Team" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name to continue.",
        variant: "destructive",
      })
      return false
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Valid email is required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return false
    }
    if (!formData.message.trim()) {
      toast({
        title: "Message is required",
        description: "Please tell us about your project.",
        variant: "destructive",
      })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2 hours.",
      })

      // Reset form
      setFormData({ name: "", email: "", project: "", message: "" })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Add scroll effect for navbar
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-800"
            >
              SutraCode
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Services
              </a>
              <a href="#work" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Work
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Contact
              </a>

              <Link href="/payment">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mr-2">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay Now
                </Button>
              </Link>

              <Button
                className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                onClick={() => window.open("https://cal.com/ravi-sorathiya-y3scoi/sutracode", "_blank")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Call
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-amber-100 pt-4"
            >
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  onClick={handleLinkClick}
                  className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#work"
                  onClick={handleLinkClick}
                  className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  Work
                </a>
                <a
                  href="#about"
                  onClick={handleLinkClick}
                  className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                >
                  Contact
                </a>

                <Link href="/payment">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-full mb-2">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay Now
                  </Button>
                </Link>

                <Button
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-full"
                  onClick={() => window.open("https://cal.com/ravi-sorathiya-y3scoi/sutracode", "_blank")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Call
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto text-center max-w-6xl relative z-10">
        {/* @ts-expect-error - this is of the dynamic type */}
          <motion.div {...fadeInUp}>
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-600 text-sm bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200/50"
                >
                  <div className="text-amber-600 mr-2">{indicator.icon}</div>
                  {indicator.text}
                </div>
              ))}
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-gray-800 mb-8 leading-tight tracking-tight">
              Transform Your Vision Into
              <br />
              <span className="relative">
                Digital Excellence
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
              </span>
              <br />
              <span className="text-gray-600">in 30 Days</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              We craft lightning-fast MVPs, stunning web applications, and scalable digital solutions that turn your
              startup dreams into profitable reality.
              <span className="text-gray-800 font-semibold"> Code with purpose, build with precision.</span>
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-3 border-white flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-gray-600 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-200/50">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 font-semibold text-gray-800">4.9/5 from 500+ founders</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                  onClick={() => window.open("https://cal.com/ravi-sorathiya-y3scoi/sutracode", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/payment">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Pay & Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      20% OFF
                    </div>
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Urgency Element */}
            <div className="mt-10 inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-8 py-4 text-gray-800 border border-amber-200 shadow-lg">
              <Zap className="w-5 h-5 mr-3 text-amber-600" />
              <span className="font-bold">Limited Time:</span>
              <span className="ml-2 font-medium">Free strategy session + 20% off first project</span>
            </div>
          </motion.div>
        </div>

        {/* Soft Background Elements */}
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
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-30 blur-xl"
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
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-25 blur-lg"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-20 blur-lg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="flex justify-center mb-4 text-amber-600">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Services That{" "}
              <span className="relative">
                Drive Results
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              We don't just write code - we craft digital experiences that convert visitors into customers and transform
              ideas into thriving businesses
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="h-full border border-amber-200 hover:border-amber-300 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden group">
                  <CardHeader className="pb-4 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center text-white mb-6 group-hover:from-amber-400 group-hover:to-orange-500 transition-all duration-300 shadow-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-800 font-bold mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-base font-medium">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Success Stories That{" "}
              <span className="relative">
                Speak Volumes
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Real projects, real results. See how we've helped startups achieve explosive growth and profitability
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="overflow-hidden border border-amber-200 hover:border-amber-300 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-3xl group">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="secondary"
                        size="icon"
                        asChild
                        className="rounded-full bg-white/90 hover:bg-amber-400 hover:text-white transition-all shadow-lg"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-gray-800 font-bold">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed font-medium">
                      {project.description}
                    </CardDescription>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-4">
                      <div className="text-green-700 font-bold text-sm">📈 {project.metrics}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-amber-100 text-gray-700 rounded-full px-3 py-1 border-0 font-medium hover:bg-amber-200 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-12">
              Why Founders Choose{" "}
              <span className="relative">
                SutraCode
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  <Zap className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  From concept to deployment in 30 days or less. No endless meetings, just exceptional results.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Results</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Our clients see 5x average ROI and 300%+ growth in user engagement.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Risk-Free</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  100% money-back guarantee. If you're not satisfied, you don't pay.
                </p>
              </div>
            </div>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
              At SutraCode, we're more than developers - we're digital architects who understand the startup ecosystem.
              We've walked the entrepreneurial path and know the challenges of tight budgets and tighter deadlines.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              <span className="text-gray-800 font-bold">Our philosophy is simple:</span> Every line of code should serve
              a purpose, every design decision should drive results, and every project should exceed expectations. We
              don't just build software - we craft digital experiences that transform businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-800 mb-6">
              Founders Love{" "}
              <span className="relative">
                Working With Us
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full -z-10 opacity-80"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Don't just take our word for it - hear from the founders who've built successful businesses with our
              expertise
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} {...scaleOnHover}>
                <Card className="h-full border border-amber-200 hover:border-amber-300 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-3xl relative overflow-hidden">
                  <CardContent className="pt-8 relative z-10">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-8 leading-relaxed font-medium text-lg">"{testimonial.content}"</p>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-8">
                      <div className="text-green-700 font-bold text-sm">🚀 {testimonial.revenue}</div>
                    </div>
                    <div className="flex items-center">
                      <Avatar className="mr-4 w-14 h-14">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                        <p className="text-gray-600 font-medium">{testimonial.role}</p>
                        <p className="text-gray-800 font-bold text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Build Your{" "}
              <span className="relative">
                Success Story?
                <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full -z-10"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto font-medium">
              Join 500+ founders who've transformed their ideas into profitable businesses. Your digital transformation
              starts with a single conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold px-10 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                  onClick={() => window.open("https://cal.com/ravi-sorathiya-y3scoi/sutracode", "_blank")}
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Your Free Strategy Call Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/payment">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-10 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                  >
                    <CreditCard className="mr-3 h-6 w-6" />
                    Pay & Start Project
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-gray-600 shadow-2xl bg-white rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                  <CardTitle className="text-2xl text-gray-800 font-bold">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
                    Prefer to send a message? Fill out the form and we'll get back to you within 2 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:ring-amber-400 h-12 font-medium"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:ring-amber-400 h-12 font-medium"
                        required
                      />
                    </div>
                    <Input
                      name="project"
                      placeholder="Project Type (MVP, Landing Page, etc.)"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:ring-amber-400 h-12 font-medium"
                    />
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project and goals... *"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-2xl border-2 border-gray-200 focus:border-amber-400 focus:ring-amber-400 h-24 font-medium resize-none"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-300"
            >
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              <p className="mb-4">
                We're here to answer your questions and help you bring your vision to life. Reach out to us today and
                let's discuss your project.
              </p>
              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Code className="mr-3 h-5 w-5 text-amber-400" />
                  <a
                    href="mailto:rsorathiya16@gmail.com"
                    className="hover:text-amber-400 transition-colors font-medium"
                  >
                    rsorathiya16@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-3 h-5 w-5 text-amber-400" />
                  <a href="tel:+916354405182" className="hover:text-amber-400 transition-colors font-medium">
                    +91 6354405182
                  </a>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-amber-400" />
                  <a
                    href="https://cal.com/ravi-sorathiya-y3scoi/sutracode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors font-medium"
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">SutraCode</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Transform your vision into digital excellence. We craft lightning-fast MVPs, stunning web applications,
                and scalable digital solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Globe className="mr-3 h-4 w-4 text-amber-400" />
                  <a href="mailto:rsorathiya16@gmail.com" className="hover:text-amber-400 transition-colors">
                    rsorathiya16@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Code className="mr-3 h-4 w-4 text-amber-400" />
                  <a href="tel:+916354405182" className="hover:text-amber-400 transition-colors">
                    +91 6354405182
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    MVP Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    Landing Pages
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-amber-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link href="/payment" className="hover:text-amber-400 transition-colors">
                    Payment
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm font-medium">&copy; {new Date().getFullYear()} SutraCode. All rights reserved.</p>
            <p className="mt-2 text-xs">Built with Next.js, Tailwind CSS, and a lot of ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
