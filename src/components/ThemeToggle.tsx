import { HiMiniMoon, HiMiniSun } from 'react-icons/hi2'
import type { Theme } from '../types/portfolio'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-[rgb(var(--text-rgb))] transition hover:border-white/30 hover:bg-white/10"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <HiMiniSun /> : <HiMiniMoon />}
    </button>
  )
}
