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
    title: "Advanced Selenium Training",
    issuer: "Infosys Springboard",
    date: "Dec, 2024",
    description: "Comprehensive training on Selenium WebDriver, including advanced features and best practices.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "Sept, 2024",
    description: "Full-stack web development course covering HTML, CSS, JavaScript, Node.js, React and more.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Data Structures in C++",
    issuer: "Coding Ninjas",
    date: "Jan, 2024",
    description: "In-depth understanding of data structures and algorithms using C++.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Big Data Ingestion",
    issuer: "BMSCE Phase Shift",
    date: "Nov, 2022",
    description: "Hands-on experience with big data ingestion techniques and tools.",
    image: "/placeholder.svg?height=100&width=100",
  },
]