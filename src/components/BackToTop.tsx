import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi2'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--accent-rgb))/0.4] bg-[rgb(var(--card-rgb))/0.92] text-lg text-[rgb(var(--text-rgb))] shadow-glow backdrop-blur-xl"
        >
          <HiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
