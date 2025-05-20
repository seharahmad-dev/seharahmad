export interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  description: string
  image: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Udacity",
    date: "2023",
    description: "Comprehensive program covering modern web development technologies and best practices.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "React Nanodegree",
    issuer: "Udacity",
    date: "2022",
    description: "Advanced React concepts including state management, hooks, and performance optimization.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2022",
    description: "Cloud computing expertise with focus on developing and maintaining applications on AWS.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    issuer: "Interaction Design Foundation",
    date: "2021",
    description: "Principles of user interface and experience design with focus on usability and accessibility.",
    image: "/placeholder.svg?height=100&width=100",
  },
]