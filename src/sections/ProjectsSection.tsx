import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../utils/data'

export function ProjectsSection() {
  const filters = useMemo(() => ['All', ...new Set(projects.flatMap((project) => project.tags))], [])
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'All' || project.tags.includes(activeFilter)),
    [activeFilter],
  )

  return (
    <section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          description="Production-oriented UI builds ranging from dashboard products to conversion-focused landing experiences."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition',
                activeFilter === filter
                  ? 'border-[rgb(var(--accent-rgb))/0.5] bg-[rgb(var(--accent-rgb))/0.22] text-[rgb(var(--text-rgb))]'
                  : 'border-[rgb(var(--border-rgb))/0.95] text-[rgb(var(--muted-rgb))] hover:bg-white/5 hover:text-[rgb(var(--text-rgb))]',
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
