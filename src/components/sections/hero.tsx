"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { FileDown } from "lucide-react"
import { AnimatedText, RotatingText } from "@/components/animations/animated-text"
import ParticlesBackground from "@/components/animations/particles"
import Scene from "@/components/3d/scene"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }

    const handleMouseLeave = () => {
      if (!containerRef.current) return
      containerRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)"
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div ref={containerRef} className="max-w-2xl transition-transform duration-200 ease-out">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-7xl font-bold mb-4">
                <AnimatedText
                  text="Hello, I'm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                />
                <AnimatedText
                  text="Sehar Ahmad"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
                />
              </h1>

              <div className="text-xl md:text-3xl font-medium mb-8 flex items-center">
                <span className="mr-2">I'm a</span>
                <RotatingText
                  texts={["Full-Stack Developer", "UI/UX Designer", "Programmer", "Tech Enthusiast"]}
                  className="text-purple-500 dark:text-purple-400 font-bold"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10"
              >
                Crafting seamless digital experiences where creativity meets engineering. I build elegant, functional, and accessible web applications. Driven by purpose, I turn complex problems into intuitive solutions that leave a lasting impression.
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <a
                  href="/Resume.pdf"
                  className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden shadow-lg"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    View Resume <FileDown className="ml-2 h-5 w-5" />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <Scene />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <a href="#about" className="flex flex-col items-center text-sm">
            <span className="mb-2">Scroll Down</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-600 dark:text-gray-300"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}