import { useMemo } from 'react'
import { BackToTop } from '../components/BackToTop'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ScrollProgress } from '../components/ScrollProgress'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useTheme } from '../hooks/useTheme'
import { AboutSection } from '../sections/AboutSection'
import { ContactSection } from '../sections/ContactSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'
import { ServicesSection } from '../sections/ServicesSection'
import { SkillsSection } from '../sections/SkillsSection'
import { navLinks } from '../utils/data'

export function HomePage() {
  const { theme, toggleTheme } = useTheme()
  const progress = useScrollProgress()

  const sectionIds = useMemo(() => navLinks.map((item) => item.id), [])
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="relative overflow-x-clip font-body text-[rgb(var(--text-rgb))]">
      <div className="pointer-events-none fixed inset-0 -z-10 texture-overlay" aria-hidden>
        <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-[rgb(var(--accent-rgb))/0.2] blur-[96px]" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      <ScrollProgress progress={progress} />
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
