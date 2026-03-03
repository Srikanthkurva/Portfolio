import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { services } from '../utils/data'

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Frontend Delivery That Scales"
          description="From feature-rich web apps to polished interfaces, I build production-ready UI systems with predictable engineering quality."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group h-full rounded-2xl border border-[rgb(var(--border-rgb))/0.85] bg-[rgb(var(--card-rgb))/0.76] p-6 backdrop-blur-xl"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgb(var(--accent-rgb))/0.38] bg-[rgb(var(--accent-rgb))/0.14] text-lg text-[rgb(var(--accent-rgb))] transition group-hover:shadow-glow">
                    <Icon />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-semibold text-[rgb(var(--text-rgb))]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-rgb))]">{service.description}</p>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

