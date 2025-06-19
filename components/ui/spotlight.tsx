"use client"
import type React from "react"
import { cn } from "@/lib/utils"

export const Spotlight = ({
  className,
  fill,
}: {
  className?: string
  fill?: string
}) => {
  return (
    <svg
      className={cn("animate-pulse animate-duration-[3s] ease-in-out", className)}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip)">
        <rect width="100" height="100" rx="0" fill="url(#paint0_radial)" fillOpacity="0.6" />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(50 50) rotate(90) scale(50)"
        >
          <stop stopColor={fill || "#3b82f6"} />
          <stop offset="1" stopColor={fill || "#3b82f6"} stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip">
          <rect width="100" height="100" rx="0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function SpotlightPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">{children}</div>
    </div>
  )
}
