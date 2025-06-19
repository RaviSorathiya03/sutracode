"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })
  const ref = useRef<any>(null)

  const handleMouseMove = (event: any) => {
    const rect = ref.current.getBoundingClientRect()
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  useEffect(() => {
    ref.current.addEventListener("mousemove", handleMouseMove)

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "h-full w-full rounded-xl border border-[#2A0E61] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] p-6",
        className,
      )}
    >
      <div className="relative h-full">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,#00D2FF_50%,transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {children}
      </div>
      <GlowingStars />
      <div
        className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
    </div>
  )
}

const GlowingStars = () => {
  const [glowingStars, setGlowingStars] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingStars((prevGlowingStars) => {
        const newGlowingStars = [...prevGlowingStars]
        const randomIndex = Math.floor(Math.random() * 50)
        if (newGlowingStars.includes(randomIndex)) {
          newGlowingStars.splice(newGlowingStars.indexOf(randomIndex), 1)
        } else {
          newGlowingStars.push(randomIndex)
        }
        return newGlowingStars
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={`star-${i}`}
          className={`absolute h-[1px] w-[1px] rounded-full ${
            glowingStars.includes(i) ? "bg-white shadow-[0_0_6px_white]" : "bg-gray-600"
          } transition-all duration-300`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  )
}
