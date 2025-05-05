"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return { ref, isInView }
}
