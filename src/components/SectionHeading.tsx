interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-heading text-xs uppercase tracking-[0.24em] text-[rgb(var(--accent-rgb))]">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-[rgb(var(--text-rgb))] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted-rgb))] sm:text-base">{description}</p>
    </div>
  )
}
