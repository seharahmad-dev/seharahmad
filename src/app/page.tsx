import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import TechStack from "@/components/sections/tech-stack"
import Projects from "@/components/sections/projects"
import Certifications from "@/components/sections/certifications"
import Contact from "@/components/sections/contact"
import Navbar from "@/components/ui/navbar"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
