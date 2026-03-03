import { useEffect, useState } from 'react'

interface UseTypingEffectOptions {
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function useTypingEffect(words: string[], options?: UseTypingEffectOptions) {
  const { typingSpeed = 95, deletingSpeed = 55, pauseDuration = 1400 } = options ?? {}
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) {
      return
    }

    const currentWord = words[wordIndex % words.length]
    const isWordComplete = displayText === currentWord

    const delay = isDeleting ? deletingSpeed : isWordComplete ? pauseDuration : typingSpeed

    const timer = window.setTimeout(() => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
          return
        }

        setDisplayText(currentWord.slice(0, displayText.length - 1))
        return
      }

      if (isWordComplete) {
        setIsDeleting(true)
        return
      }

      setDisplayText(currentWord.slice(0, displayText.length + 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deletingSpeed, displayText, isDeleting, pauseDuration, typingSpeed, wordIndex, words])

  return displayText
}

