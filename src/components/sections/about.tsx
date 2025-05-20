"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FadeIn, SlideIn } from "@/components/animations/scroll-animation"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-purple-500">Me</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <SlideIn>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-30 blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A full-stack web developer with a love for crafting clean, accessible, and meaningful digital experiences. With a background in Information Science and a strong foundation in C++, Java, and modern web technologies, I enjoy building applications that are not only functional but also beautiful and user-centric.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I care deeply about bridging the gap between good design and solid engineering. Whether it's developing scalable platforms, experimenting with new frameworks, or optimizing user flows, I'm always looking to create something that makes an impact.
                </p>
              </div>
            </div>
          </SlideIn>

          <motion.div style={{ y, opacity }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Sehar Ahmad" },
                { 
                  label: "Email", 
                  value: "seharahmad.dev@gmail.com",
                  link: "mailto:seharahmad.dev@gmail.com"
                },
                { 
                  label: "Location", 
                  value: "Bengaluru, India",
                  link: "https://www.google.com/maps/place/Bengaluru,+Karnataka,+India"
                },
                { 
                  label: "College", 
                  value: "BMS College of Engineering",
                  link: "https://www.bmsce.ac.in/"
                },
                { label: "Degree", value: "B.E. Information Science and Engineering" },
                { label: "CGPA", value: "9.57" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg"
                >
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</h4>
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-purple-500 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold mb-4">My Goals</h3>
              <ul className="space-y-2">
                {[
                  "Designing accessible and user-first interfaces that combine creativity with clarity",
                  "Building scalable full-stack applications that prioritize performance and impact",
                  "Blending technical depth with thoughtful UI/UX to create seamless digital journeys",
                  "Embracing challenges as opportunities to grow, experiment, and improve",
                  "Supporting the developer community by contributing, collaborating, and sharing knowledge",
                ].map((goal, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-purple-500 mr-2">•</span>
                    <span>{goal}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}