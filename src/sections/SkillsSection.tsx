import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skills } from '../utils/data'

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Modern Frontend Toolkit"
          description="Hands-on with practical technologies for scalable UI engineering, clean architecture, and consistent product delivery."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.08}>
              <article className="rounded-2xl border border-[rgb(var(--border-rgb))/0.9] bg-[rgb(var(--card-rgb))/0.72] p-5 backdrop-blur-xl">
                <h3 className="font-heading text-xl font-semibold text-[rgb(var(--text-rgb))]">{category.title}</h3>
                <div className="mt-6 space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between text-xs text-[rgb(var(--muted-rgb))]">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
