"use client"

import { motion } from "framer-motion"
import { FadeIn, SlideIn } from "@/components/animations/scroll-animation"
import { Award } from "lucide-react"

const certifications = [
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
    issuer: "Phase Shift",
    date: "Nov, 2022",
    description: "Hands-on experience with big data ingestion techniques and tools.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-purple-500">Certifications</span>
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

            {/* Certification items */}
            {certifications.map((cert, index) => (
              <SlideIn key={cert.id} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-purple-500 z-10"></div>

                  {/* Content */}
                  <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                            <Award className="h-6 w-6 text-purple-500" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <span>{cert.issuer}</span>
                            <span className="mx-2">•</span>
                            <span>{cert.date}</span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}