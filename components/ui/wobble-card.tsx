"use client"
import type React from "react"
import { WobbleCard as WobbleCardPrimitive } from "./wobble-card-primitive"

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode
  containerClassName?: string
  className?: string
}) => {
  return (
    <WobbleCardPrimitive containerClassName={containerClassName} className={className}>
      {children}
    </WobbleCardPrimitive>
  )
}
