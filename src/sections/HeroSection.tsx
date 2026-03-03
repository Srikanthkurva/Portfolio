import { motion } from 'framer-motion'
import profileImage from '../assets/profile-photo.svg'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { socialLinks, typingPhrases } from '../utils/data'

export function HeroSection() {
  const typedText = useTypingEffect(typingPhrases)

  return (
    <section id="home" className="relative px-4 pb-20 pt-32 sm:px-6 sm:pt-36">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-heading text-xs uppercase tracking-[0.28em] text-[rgb(var(--accent-rgb))]"
          >
            React Developer Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-4 font-heading text-4xl font-semibold leading-[1.06] text-[rgb(var(--text-rgb))] sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-[rgb(var(--accent-rgb))]">Srikanth Kurva</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-[rgb(var(--muted-rgb))] sm:text-base"
          >
            React Developer | Frontend Specialist | UI Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border-rgb))/0.95] bg-[rgb(var(--card-rgb))/0.62] px-4 py-2 text-sm text-[rgb(var(--muted-rgb))]"
          >
            <span className="font-medium text-[rgb(var(--text-rgb))]">Animated Focus:</span>
            <span className="font-medium text-[rgb(var(--accent-rgb))]">{typedText}</span>
            <span className="typing-caret" aria-hidden />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.27 }}
            className="mt-7 max-w-xl text-sm leading-relaxed text-[rgb(var(--muted-rgb))] sm:text-base"
          >
            I build scalable, responsive web interfaces with React and TypeScript, focusing on polished UX, reusable
            architecture, and production performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-xl border border-[rgb(var(--accent-rgb))/0.4] bg-[rgb(var(--accent-rgb))/0.2] px-5 py-3 text-sm font-semibold text-[rgb(var(--text-rgb))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent-rgb))/0.3]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[rgb(var(--border-rgb))/0.95] bg-transparent px-5 py-3 text-sm font-semibold text-[rgb(var(--text-rgb))] transition hover:-translate-y-0.5 hover:bg-white/5"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-9 flex items-center gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--border-rgb))/0.95] bg-[rgb(var(--card-rgb))/0.7] text-[rgb(var(--text-rgb))] transition hover:border-[rgb(var(--accent-rgb))/0.5] hover:text-[rgb(var(--accent-rgb))]"
                >
                  <Icon />
                </a>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:justify-self-end"
        >
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[rgb(var(--accent-rgb))/0.28] blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-cyan-400/25 blur-3xl" />
          <div className="profile-ring rounded-3xl p-1">
            <div className="overflow-hidden rounded-[1.3rem] border border-[rgb(var(--border-rgb))/0.8] bg-[rgb(var(--card-rgb))/0.82]">
              <img
                src={profileImage}
                alt="Srikanth Kurva portrait"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

