import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import type { ProjectEntry } from '../types/portfolio'

interface ProjectCardProps {
  project: ProjectEntry
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 230, damping: 20 }}
      className="group overflow-hidden rounded-2xl border border-[rgb(var(--border-rgb))/0.9] bg-[rgb(var(--card-rgb))/0.72] backdrop-blur-xl"
    >
      <div className="relative overflow-hidden border-b border-[rgb(var(--border-rgb))/0.7]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-semibold text-[rgb(var(--text-rgb))]">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-rgb))]">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[rgb(var(--accent-rgb))/0.35] bg-[rgb(var(--accent-rgb))/0.16] px-3 py-1 text-xs font-medium tracking-wide text-[rgb(var(--text-rgb))]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgb(var(--accent-rgb))/0.45] bg-[rgb(var(--accent-rgb))/0.22] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--text-rgb))] transition hover:bg-[rgb(var(--accent-rgb))/0.3]"
          >
            Live Demo
            <FaArrowUpRightFromSquare />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[rgb(var(--border-rgb))/0.95] bg-transparent px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--text-rgb))] transition hover:bg-white/5"
          >
            GitHub
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
