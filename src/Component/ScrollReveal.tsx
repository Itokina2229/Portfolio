
import React from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8
}: ScrollRevealProps) => {

  const directions = {
    up: { x: 0, y: 80 },
    down: { x: 0, y: -80 },
    left: { x: 80, y: 0 },
    right: { x: -80, y: 0 }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{
        once: false,
        amount: 0.3
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
