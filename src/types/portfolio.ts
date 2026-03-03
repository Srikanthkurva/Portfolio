import type { IconType } from 'react-icons'

export type Theme = 'dark' | 'light'

export interface NavLink {
  id: string
  label: string
}

export interface AboutCard {
  title: string
  description: string
}

export interface SkillItem {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  items: SkillItem[]
}

export interface ExperienceEntry {
  role: string
  company: string
  duration: string
  highlights: string[]
}

export interface ProjectEntry {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
}

export interface ServiceEntry {
  title: string
  description: string
  icon: IconType
}

export interface SocialLink {
  label: string
  url: string
  icon: IconType
}

export interface ContactFormState {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}
