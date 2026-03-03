import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import type { ContactFormErrors, ContactFormState } from '../types/portfolio'
import { contactEmail, socialLinks } from '../utils/data'
import { validateContactForm } from '../utils/validation'

const initialFormValues: ContactFormState = {
  name: '',
  email: '',
  message: '',
}

export function ContactSection() {
  const [values, setValues] = useState<ContactFormState>(initialFormValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setValues(initialFormValues)
      window.setTimeout(() => setIsSuccess(false), 2600)
    }, 680)
  }

  const handleChange = (field: keyof ContactFormState, nextValue: string) => {
    setValues((prev) => ({ ...prev, [field]: nextValue }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section id="contact" className="px-4 pb-20 pt-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Something Meaningful"
          description="If you have a React product, frontend challenge, or collaboration in mind, send a message and I’ll respond quickly."
        />

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <aside className="h-full rounded-2xl border border-[rgb(var(--border-rgb))/0.85] bg-[rgb(var(--card-rgb))/0.76] p-6 backdrop-blur-xl">
              <h3 className="font-heading text-2xl font-semibold text-[rgb(var(--text-rgb))]">Contact Info</h3>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-rgb))]">
                Open to React developer roles, contract work, and product collaborations.
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-6 inline-flex rounded-xl border border-[rgb(var(--accent-rgb))/0.4] bg-[rgb(var(--accent-rgb))/0.16] px-4 py-2 text-sm font-semibold text-[rgb(var(--text-rgb))] transition hover:bg-[rgb(var(--accent-rgb))/0.26]"
              >
                {contactEmail}
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--border-rgb))/0.85] bg-[rgb(var(--card-rgb))/0.8] text-[rgb(var(--text-rgb))] transition hover:border-[rgb(var(--accent-rgb))/0.45] hover:text-[rgb(var(--accent-rgb))]"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-[rgb(var(--border-rgb))/0.85] bg-[rgb(var(--card-rgb))/0.76] p-6 backdrop-blur-xl">
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[rgb(var(--text-rgb))]">
                    Name
                  </label>
                  <input
                    id="name"
                    value={values.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    className="w-full rounded-xl border border-[rgb(var(--border-rgb))/0.85] bg-[rgb(var(--bg-soft-rgb))/0.58] px-4 py-3 text-sm text-[rgb(var(--text-rgb))] outline-none transition placeholder:text-[rgb(var(--muted-rgb))/0.86] focus:border-[rgb(var(--accent-rgb))/0.55]"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name ? <p className="mt-2 text-xs text-rose-400">{errors.name}</p> : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[rgb(var(--text-rgb))]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    className="w-full rounded-xl border border-[rgb(var(--border-rgb))/0.85] bg-[rgb(var(--bg-soft-rgb))/0.58] px-4 py-3 text-sm text-[rgb(var(--text-rgb))] outline-none transition placeholder:text-[rgb(var(--muted-rgb))/0.86] focus:border-[rgb(var(--accent-rgb))/0.55]"
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                  {errors.email ? <p className="mt-2 text-xs text-rose-400">{errors.email}</p> : null}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[rgb(var(--text-rgb))]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={values.message}
                    onChange={(event) => handleChange('message', event.target.value)}
                    className="w-full resize-none rounded-xl border border-[rgb(var(--border-rgb))/0.85] bg-[rgb(var(--bg-soft-rgb))/0.58] px-4 py-3 text-sm text-[rgb(var(--text-rgb))] outline-none transition placeholder:text-[rgb(var(--muted-rgb))/0.86] focus:border-[rgb(var(--accent-rgb))/0.55]"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message ? <p className="mt-2 text-xs text-rose-400">{errors.message}</p> : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[rgb(var(--accent-rgb))/0.45] bg-[rgb(var(--accent-rgb))/0.2] px-4 py-3 text-sm font-semibold text-[rgb(var(--text-rgb))] transition hover:bg-[rgb(var(--accent-rgb))/0.3] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="pointer-events-none absolute inset-x-6 bottom-6 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-3 text-sm font-medium text-emerald-100"
                  >
                    Message sent successfully. I will get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


