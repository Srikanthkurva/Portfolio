import { FaCode, FaEnvelope, FaGithub, FaLaptopCode, FaLinkedinIn, FaMobileAlt, FaPalette } from 'react-icons/fa'
import type {
  AboutCard,
  ExperienceEntry,
  NavLink,
  ProjectEntry,
  ServiceEntry,
  SkillCategory,
  SocialLink,
} from '../types/portfolio'

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const typingPhrases = ['React Developer', 'Frontend Specialist', 'UI Enthusiast']

export const aboutCards: AboutCard[] = [
  {
    title: 'Scalable UI Systems',
    description:
      'Design reusable component structures and predictable state patterns for products that evolve rapidly.',
  },
  {
    title: 'Problem-Solving Mindset',
    description:
      'Translate ambiguous requirements into practical frontend solutions with clear architecture and clean implementation.',
  },
  {
    title: 'Performance + UX Balance',
    description:
      'Prioritize smooth interactions, responsive layouts, and maintainable code that supports long-term product delivery.',
  },
]

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'Tailwind CSS', level: 91 },
      { name: 'Chakra UI', level: 80 },
      { name: 'HTML5', level: 94 },
      { name: 'CSS3', level: 89 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', level: 89 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Vite', level: 86 },
      { name: 'Figma', level: 78 },
    ],
  },
  {
    title: 'Other',
    items: [
      { name: 'API Integration', level: 90 },
      { name: 'Responsive UI', level: 93 },
      { name: 'State Management', level: 85 },
    ],
  },
]

export const experienceTimeline: ExperienceEntry[] = [
  {
    role: 'React Developer - 2 Years Experience',
    company: 'Product & Dashboard Engineering',
    duration: '2024 - Present',
    highlights: [
      'Developed reusable frontend components for feature-rich dashboard systems.',
      'Implemented authentication flows and protected-route experiences.',
      'Integrated REST APIs with robust loading, error, and retry handling.',
      'Built secure file upload workflows and template-driven modules.',
      'Delivered responsive sidebar navigation for desktop and mobile interfaces.',
      'Optimized render paths and bundle usage to improve runtime performance.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Web Application Delivery',
    duration: '2023 - 2024',
    highlights: [
      'Collaborated across product and backend teams to ship reusable UI architecture.',
      'Created mobile-first pages and conversion-focused product interfaces.',
      'Improved consistency through shared components and design handoff standards.',
    ],
  },
]

export const projects: ProjectEntry[] = [
  {
    id: 'dashboard',
    title: 'Dashboard Management System',
    description: 'Role-based analytics dashboard with reusable widgets, reporting tables, and secure navigation.',
    image: '/projects/sample-dashboard.svg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    liveUrl: 'https://example.com/dashboard',
    githubUrl: 'https://github.com',
  },
  {
    id: 'upload-template',
    title: 'File Upload & Template System',
    description: 'Template-driven upload portal with validation workflows, status tracking, and retry-safe operations.',
    image: '/projects/sample-file-upload.svg',
    tags: ['React', 'TypeScript', 'Chakra UI', 'API Integration'],
    liveUrl: 'https://example.com/uploads',
    githubUrl: 'https://github.com',
  },
  {
    id: 'job-portal',
    title: 'Job Portal System',
    description: 'Hiring platform with role-based portals, search filters, and streamlined candidate application journeys.',
    image: '/projects/sample-job-portal.svg',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'State Management'],
    liveUrl: 'https://example.com/jobs',
    githubUrl: 'https://github.com',
  },
  {
    id: 'hospital-booking',
    title: 'Hospital Appointment Booking System',
    description: 'Healthcare booking app with doctor slots, patient workflows, and responsive appointment management.',
    image: '/projects/sample-hospital.svg',
    tags: ['React', 'TypeScript', 'API Integration', 'Responsive UI'],
    liveUrl: 'https://example.com/hospital',
    githubUrl: 'https://github.com',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Landing Page',
    description: 'Lead-driven property page optimized for performance, storytelling, and responsive conversion flow.',
    image: '/projects/sample-real-estate.svg',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
    liveUrl: 'https://example.com/real-estate',
    githubUrl: 'https://github.com',
  },
]

export const services: ServiceEntry[] = [
  {
    title: 'Frontend Development',
    description: 'Build scalable frontend architecture for modern product interfaces with clean engineering practices.',
    icon: FaLaptopCode,
  },
  {
    title: 'UI Development',
    description: 'Convert design systems and concepts into polished, pixel-accurate, interactive user interfaces.',
    icon: FaPalette,
  },
  {
    title: 'React Application Development',
    description: 'Create robust React applications using reusable components and maintainable state patterns.',
    icon: FaCode,
  },
  {
    title: 'Responsive Website Design',
    description: 'Deliver mobile-first experiences that stay consistent and reliable across all screen sizes.',
    icon: FaMobileAlt,
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com',
    icon: FaLinkedinIn,
  },
  {
    label: 'Email',
    url: 'mailto:Kurvasrikanth765@gmail.com',
    icon: FaEnvelope,
  },
]

export const contactEmail = 'Kurvasrikanth765@gmail.com'
export const resumePath = '/Srikanth-Kurva-Resume.pdf'

