import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import { useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks, resumePath } from '../utils/data'
import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '../types/portfolio'

interface NavbarProps {
  activeSection: string
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-[rgb(var(--border-rgb))/0.9] bg-[rgb(var(--card-rgb))/0.72] px-4 py-3 backdrop-blur-xl shadow-[0_10px_50px_rgba(9,18,32,0.22)]">
        <a href="#home" className="font-heading text-sm font-semibold tracking-wide text-[rgb(var(--text-rgb))] sm:text-base">
          Srikanth Kurva
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={clsx(
                'rounded-full px-3 py-2 text-sm transition',
                activeSection === link.id
                  ? 'bg-[rgb(var(--accent-rgb))/0.18] text-[rgb(var(--text-rgb))]'
                  : 'text-[rgb(var(--muted-rgb))] hover:bg-white/5 hover:text-[rgb(var(--text-rgb))]',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={resumePath}
            download
            className="rounded-full border border-[rgb(var(--accent-rgb))/0.4] bg-[rgb(var(--accent-rgb))/0.16] px-4 py-2 text-sm font-semibold text-[rgb(var(--text-rgb))] transition hover:border-[rgb(var(--accent-rgb))/0.65] hover:bg-[rgb(var(--accent-rgb))/0.24]"
          >
            Download Resume
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-[rgb(var(--text-rgb))]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 w-full max-w-6xl rounded-2xl border border-[rgb(var(--border-rgb))/0.8] bg-[rgb(var(--card-rgb))/0.92] p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    'rounded-xl px-3 py-2 text-sm transition',
                    activeSection === link.id
                      ? 'bg-[rgb(var(--accent-rgb))/0.2] text-[rgb(var(--text-rgb))]'
                      : 'text-[rgb(var(--muted-rgb))] hover:bg-white/5 hover:text-[rgb(var(--text-rgb))]',
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={resumePath}
              download
              onClick={() => setIsOpen(false)}
              className="mt-4 block rounded-xl border border-[rgb(var(--accent-rgb))/0.4] bg-[rgb(var(--accent-rgb))/0.16] px-3 py-2 text-center text-sm font-semibold text-[rgb(var(--text-rgb))]"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
