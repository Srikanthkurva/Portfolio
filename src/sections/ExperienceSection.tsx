import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experienceTimeline } from '../utils/data'

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="2 Years of React-Driven Product Development"
          description="A practical timeline of projects where I built reusable systems, integrated APIs, and shipped responsive user experiences."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-cyan-400/50 via-cyan-300/40 to-transparent sm:left-1/2" />
          <div className="space-y-8">
            {experienceTimeline.map((item, index) => (
              <Reveal key={`${item.role}-${item.duration}`} delay={index * 0.08}>
                <article className="relative grid gap-4 sm:grid-cols-2">
                  <div className={index % 2 === 0 ? 'sm:pr-8' : 'sm:order-2 sm:pl-8'}>
                    <div className="ml-10 rounded-2xl border border-[rgb(var(--border-rgb))/0.9] bg-[rgb(var(--card-rgb))/0.72] p-5 backdrop-blur-xl sm:ml-0">
                      <p className="text-xs uppercase tracking-[0.18em] text-[rgb(var(--accent-rgb))]">{item.duration}</p>
                      <h3 className="mt-2 font-heading text-lg font-semibold text-[rgb(var(--text-rgb))]">{item.role}</h3>
                      <p className="mt-1 text-sm text-[rgb(var(--muted-rgb))]">{item.company}</p>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[rgb(var(--muted-rgb))]">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-rgb))]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'hidden sm:block' : 'hidden sm:order-1 sm:block'} />
                  <span className="absolute left-3 top-7 h-4 w-4 rounded-full border border-[rgb(var(--accent-rgb))/0.6] bg-[rgb(var(--bg-rgb))] shadow-[0_0_0_6px_rgba(21,157,230,0.18)] sm:left-1/2 sm:-translate-x-1/2" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
