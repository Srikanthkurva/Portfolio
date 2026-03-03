import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { aboutCards } from '../utils/data'

const coreKnowledge = ['React', 'TypeScript', 'Tailwind CSS', 'Chakra UI', 'REST APIs', 'Responsive Design']

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="2 Years Building React Products"
          description="Frontend developer focused on maintainable architecture, reliable delivery, and user-first interface design."
        />

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <article className="rounded-2xl border border-[rgb(var(--border-rgb))/0.9] bg-[rgb(var(--card-rgb))/0.72] p-6 backdrop-blur-xl">
              <h3 className="font-heading text-2xl font-semibold text-[rgb(var(--text-rgb))]">Who I Am</h3>
              <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted-rgb))]">
                I have 2 years of hands-on React development experience building reusable component systems,
                authentication-aware flows, and API-powered dashboards. I enjoy solving product problems with clean,
                scalable UI architecture.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-rgb))]">
                My approach combines engineering rigor with thoughtful UX, so interfaces are easy to maintain and easy
                to use.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {coreKnowledge.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[rgb(var(--accent-rgb))/0.35] bg-[rgb(var(--accent-rgb))/0.15] px-3 py-1 text-xs font-semibold tracking-wide text-[rgb(var(--text-rgb))]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {aboutCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-[rgb(var(--border-rgb))/0.9] bg-[rgb(var(--card-rgb))/0.72] p-6 backdrop-blur-xl">
                  <h3 className="font-heading text-lg font-semibold text-[rgb(var(--text-rgb))]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-rgb))]">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

