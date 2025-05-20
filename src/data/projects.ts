export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Firebase", "Material UI", "Redux"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A creative portfolio website showcasing projects and skills with animations and interactive elements.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data with interactive visualizations.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "OpenWeather API", "Styled Components"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]