"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
}

export function TypingAnimation({ text, speed = 100, className = "" }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    } else if (isTyping && currentIndex === text.length) {
      timeout = setTimeout(() => {
        setIsTyping(false)
      }, 2000)
    } else if (!isTyping && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
      }, speed / 2)
    } else if (!isTyping && displayText.length === 0) {
      timeout = setTimeout(() => {
        setCurrentIndex(0)
        setIsTyping(true)
      }, 1000)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, text, speed, isTyping, displayText.length])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-emerald-500">|</span>
    </span>
  )
}

export default TypingAnimation
