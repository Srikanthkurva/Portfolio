import { motion } from 'framer-motion'

interface ScrollProgressProps {
  progress: number
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-300"
      style={{ scaleX: progress }}
    />
  )
}
