"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"

interface MacbookScrollProps {
  src?: string
  showGradient?: boolean
  title?: string
  badge?: string
}

export const MacbookScroll = ({ src, showGradient, title, badge }: MacbookScrollProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5])
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5])
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500])
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0])
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div
      ref={ref}
      className="min-h-[200vh] flex flex-col items-center py-0 md:py-80 justify-start shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50"
    >
      <motion.div
        style={{
          rotateX: rotate,
          translateY: translate,
          scaleX: scaleX,
          scaleY: scaleY,
        }}
        className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-2 border-[#6C6C6C] p-2 bg-[#222222] rounded-[30px] shadow-2xl"
      >
        <div className="h-full w-full bg-gray-100 dark:bg-zinc-900 rounded-[20px] overflow-hidden">
          <Image src={src || "/placeholder.svg"} alt="macbook" fill className="object-cover object-left-top" />
        </div>
      </motion.div>
      <motion.div
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="flex flex-col items-center justify-center mt-20"
      >
        {badge && (
          <Badge className="mb-4 text-xs font-light bg-green-100 text-green-600 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>{badge}</span>
            </div>
          </Badge>
        )}
        <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
          {title || "Built for Developers"}
        </h1>
      </motion.div>
    </div>
  )
}

// Extracted Badge component for better organization
const Badge = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={className}>{children}</div>
}
