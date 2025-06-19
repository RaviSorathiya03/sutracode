import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "SutraCode - Transform Your Vision Into Digital Excellence in 30 Days",
  description:
    "We craft lightning-fast MVPs, stunning web applications, and scalable digital solutions that turn your startup dreams into profitable reality. Code with purpose, build with precision.",
  keywords:
    "startup development, MVP development, web applications, SaaS development, React development, Next.js development, digital transformation, custom software",
  authors: [{ name: "SutraCode" }],
  creator: "SutraCode",
  publisher: "SutraCode",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sutracode.dev",
    title: "SutraCode - Transform Your Vision Into Digital Excellence in 30 Days",
    description:
      "We craft lightning-fast MVPs, stunning web applications, and scalable digital solutions that turn your startup dreams into profitable reality. Code with purpose, build with precision.",
    siteName: "SutraCode",
  },
  twitter: {
    card: "summary_large_image",
    title: "SutraCode - Transform Your Vision Into Digital Excellence in 30 Days",
    description:
      "We craft lightning-fast MVPs, stunning web applications, and scalable digital solutions that turn your startup dreams into profitable reality. Code with purpose, build with precision.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-satoshi">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
