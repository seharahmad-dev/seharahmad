"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/animations/scroll-animation"
import Image from "next/image"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Car Price Prediction",
    description:
      "Developed a web-based platform for real-time used car price prediction using advanced machine learning models, enabling users to make data-driven decisions in the second-hand car market.",
    image: "/project/carprice.jpg",
    technologies: ["Next.js", "Flask", "Tailwind CSS", "Machine Learning"],
    github: "https://github.com/gitgeek-glitch/carpp.git",
    demo: "https://carpriceprediction-sandy.vercel.app/",
  },
  {
    id: 2,
    title: "AskItOut",
    description: "A student-driven Q&A platform for sharing knowledge, solving doubts, and connecting minds across campus. Empowering students to learn from each other, one question at a time. Ask anything, answer everything.",
    image: "/project/askitout.jpg",
    technologies: ["React", "Node", "MongoDB", "Gemini Integration"],
    github: "https://github.com/gitgeek-glitch/doubtplatform.git",
    demo: "/building",
  },
  {
    id: 3,
    title: "Tiny Encryption Algorithm",
    description:
      "The Tiny Encryption Algorithm (TEA) is a lightweight yet powerful block cipher known for its simplicity and speed. Integrated into the site for hands-on exploration of modern cryptographic principles.",
    image: "/project/tea.jpg",
    technologies: ["Next", "Encryption", "Block Cipher", "Cryptography"],
    github: "https://github.com/gitgeek-glitch/tea-algorithm.git",
    demo: "https://tea-algorithm.vercel.app/",
  },
  {
    id: 4,
    title: "BatteryTech Explorer",
    description:
      "A full-stack educational platform designed to teach users about various battery technologies through interactive visualizations, comparisons, timelines, and quizzes.",
    image: "/project/battery.jpg",
    technologies: ["Next", "Tailwind CSS", "Gemini Integration"],
    github: "https://github.com/gitgeek-glitch/batterytech.git",
    demo: "https://batterytech.vercel.app/",
  },
  {
    id: 5,
    title: "Team Collab",
    description:
      "A collaborative platform where leaders can create teams and invite members to join. Team members can work together on shared projects with real-time updates and seamless coordination.",
    image: "/project/team.jpg",
    technologies: ["React", "Tailwind CSS", "Node", "MongoDB", "Socket.io"],
    github: "https://github.com/gitgeek-glitch/teamcollab.git",
    demo: "/building",
  },
  {
    id: 6,
    title: "Gene2Tree",
    description:
      "A bioinformatics web application that allows users to explore evolutionary relationships by selecting gene IDs and generating phylogenetic trees. It fetches real-time DNA sequences from NCBI.",
    image: "/project/phlo.jpg",
    technologies: ["Next", "Python", "Biopython", "NCBI Entrez API"],
    github: "https://github.com/gitgeek-glitch/phylogenetic.git",
    demo: "https://phylogenetic.vercel.app/",
  },
  {
    id: 7,
    title: "Unix Shell Replica",
    description:
      "Built a custom UNIX Shell in C, extending core functionalities to deepen UNIX environment system programming expertise.",
    image: "/project/project-img2.jpg",
    technologies: ["C", "Unix", "Shell Scripting", "System Programming"],
    github: "https://github.com/gitgeek-glitch/phylogenetic.git",
    demo: "https://phylogenetic.vercel.app/",
  },
  {
    id: 8,
    title: "Email Writer",
    description:
      "An AI-powered email writer that generates professional and personalized emails using GPT-2 integration.",
    image: "/project/project-img3.png",
    technologies: ["Python", "GPT-2 model (via Hugging Face Transformers)"],
    github: "https://github.com/gitgeek-glitch/phylogenetic.git",
    demo: "https://phylogenetic.vercel.app/",
  },
]

// Filter projects for the carousel (only IDs 1, 3, 4, 6)
const carouselProjects = projects.filter(project => [1, 3, 4, 6].includes(project.id))

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselProjects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselProjects.length - 1 : prevIndex - 1))
  }

  const renderProjectButtons = (project: Project) => {
    if (project.id === 7) {
      // For project 7: GitHub button and Image link button
      return (
        <div className="flex justify-end space-x-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
            aria-label="View GitHub repository"
          >
            <Github className="h-5 w-5 text-white" />
          </a>
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
            aria-label="View full image"
          >
            <ImageIcon className="h-5 w-5 text-white" />
          </a>
        </div>
      )
    } else if (project.id === 8) {
      // For project 8: Only Image link button
      return (
        <div className="flex justify-end space-x-2">
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
            aria-label="View full image"
          >
            <ImageIcon className="h-5 w-5 text-white" />
          </a>
        </div>
      )
    } else {
      // For all other projects: GitHub and Demo buttons
      return (
        <div className="flex justify-end space-x-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
            aria-label="View GitHub repository"
          >
            <Github className="h-5 w-5 text-white" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
            aria-label="View live demo"
          >
            <ExternalLink className="h-5 w-5 text-white" />
          </a>
        </div>
      )
    }
  }

  const renderCarouselButtons = (project: Project) => {
    if (project.id === 7) {
      // For project 7: GitHub and Image link buttons
      return (
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-white"
          >
            <Github className="h-5 w-5 mr-2" />
            View Code
          </a>
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-white"
          >
            <ImageIcon className="h-5 w-5 mr-2" />
            View Image
          </a>
        </div>
      )
    } else if (project.id === 8) {
      // For project 8: Only Image link button
      return (
        <div className="flex space-x-4">
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-white"
          >
            <ImageIcon className="h-5 w-5 mr-2" />
            View Image
          </a>
        </div>
      )
    } else {
      // For all other projects: GitHub and Demo buttons
      return (
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors text-white"
          >
            <Github className="h-5 w-5 mr-2" />
            View Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors text-white"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            Live Demo
          </a>
        </div>
      )
    }
  }

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-purple-500">Projects</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.slice(0, 8).map((project, index) => (
            <ScaleIn key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} project thumbnail`}
                    className="transition-transform duration-500 group-hover:scale-110 object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      {renderProjectButtons(project)}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        <FadeIn>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
              <button
                onClick={prevProject}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[300px] md:h-[400px]"
                >
                  <Image
                    src={carouselProjects[currentIndex].image || "/placeholder.svg"}
                    alt={`${carouselProjects[currentIndex].title} project showcase`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{carouselProjects[currentIndex].title}</h3>
                    <p className="text-white/80 mb-4 max-w-2xl">{carouselProjects[currentIndex].description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {carouselProjects[currentIndex].technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {renderCarouselButtons(carouselProjects[currentIndex])}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
              <button
                onClick={nextProject}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {carouselProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}