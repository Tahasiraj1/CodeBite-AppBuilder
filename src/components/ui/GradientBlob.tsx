"use client"

import React from "react"

interface GradientBlobProps {
  colors: string[]
  blur?: number
  duration?: number
  size?: number
  className?: string
  opacity?: number
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  colors,
  blur = 60,
  size = 300,
  className,
  opacity = 90,
}) => {
  return (
    <div
      className={`rounded-full filter ${opacity} ${className}`}
      style={{
        background: `radial-gradient(circle, ${colors.join(", ")})`,
        width: size,
        height: size,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}