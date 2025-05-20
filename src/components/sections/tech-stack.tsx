"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { FadeIn } from "@/components/animations/scroll-animation"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const technologies = [
  { name: "C++", icon: "/img/cpp.png", url: "https://isocpp.org/std/the-standard" },
  { name: "Java", icon: "/img/java.png", url: "https://docs.oracle.com/en/java/" },
  { name: "Python", icon: "/img/python.png", url: "https://docs.python.org/3/" },
  { name: "JavaScript", icon: "/img/js.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: "/img/typescript.png", url: "https://www.typescriptlang.org/docs/" },
  { name: "React", icon: "/img/react.svg", url: "https://react.dev/learn" },
  { name: "HTML5", icon: "/img/html5.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: "/img/css.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Tailwind", icon: "/img/tailwind.png", url: "https://tailwindcss.com/docs" },
  { name: "Bootstrap", icon: "/img/bootstrap.svg", url: "https://getbootstrap.com/docs/" },
  { name: "jQuery", icon: "/img/jquery.svg", url: "https://api.jquery.com/" },
  { name: "MongoDB", icon: "/img/mongodb.png", url: "https://docs.mongodb.com/" },
  { name: "MySQL", icon: "/img/mysql.png", url: "https://dev.mysql.com/doc/" },
  { name: "PostgreSQL", icon: "/img/postgres.png", url: "https://www.postgresql.org/docs/" },
  { name: "Auth0", icon: "/img/auth0.png", url: "https://auth0.com/docs/" },
  { name: "Node.js", icon: "/img/nodejs.svg", url: "https://nodejs.org/en/docs/" },
  { name: "npm", icon: "/img/npm.svg", url: "https://docs.npmjs.com/" },
  { name: "GitHub", icon: "/img/github.png", url: "https://docs.github.com/" },
  { name: "Postman", icon: "/img/postman.png", url: "https://learning.postman.com/docs/" }
]

export default function TechStack() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const controls = useAnimation()

  // Combine refs for the element that needs both refs
  const setRefs = (element: HTMLDivElement) => {
    // Set the tickerRef
    tickerRef.current = element
    // Set the inViewRef
    inViewRef(element)
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden py-8" ref={setRefs}>
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-16">Technologies I Am Familiar With</h3>
          </FadeIn>

          <div className="relative">
            <div className="flex space-x-16 animate-marquee">
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -8 }}
                  className="flex flex-col items-center justify-center w-24"
                >
                  <a 
                    href={tech.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                  >
                    <div className="relative w-14 h-14 mb-3">
                      <Image 
                        src={tech.icon || "/placeholder.svg"} 
                        alt={tech.name} 
                        fill
                        className="object-contain" 
                        sizes="56px"
                      />
                    </div>
                    <span className="mt-4 text-sm font-medium transition-opacity opacity-0 group-hover:opacity-100">{tech.name}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}