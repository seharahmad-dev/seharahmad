"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FadeIn, SlideIn } from "@/components/animations/scroll-animation"
import { Github, Linkedin, Mail, Send, Code, Award } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ 
    type: "", // "success" or "error"
    message: "" 
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: "", message: "" })
    
    try {
      // Send the email using the API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        // Clear the form and show success message
        setSubmitStatus({
          type: "success",
          message: "Your message has been sent successfully! I'll get back to you soon."
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Show error message from API
        setSubmitStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again later."
        })
      }
    } catch (error) {
      console.error("Error sending message:", error)
      
      // Show alternative contact method on error
      setSubmitStatus({
        type: "error",
        message: "Unable to send your message. Please try again or email me directly at seharahmad.dev@gmail.com"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: "GitHub", icon: <Github />, url: "https://github.com/gitgeek-glitch" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://www.linkedin.com/in/seharahmad" },
    { name: "CodeForces", icon: <Code />, url: "https://leetcode.com/u/nullp0interr/" },
    { name: "CodeChef", icon: <Award />, url: "https://www.codechef.com/users/nullp0inter" },
    { name: "Email", icon: <Mail />, url: "mailto:seharahmad.dev@gmail.com" },
  ]

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <SlideIn>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Feel free to reach out to me for collaboration, job opportunities, or just to say hello. I&apos;m always open
                to discussing new projects and ideas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                    <a href="mailto:seharahmad.dev@gmail.com" className="font-medium hover:text-purple-500 transition-colors">
                      seharahmad.dev@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Based in</h4>
                    <p className="font-medium">Bengaluru, India</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </SlideIn>

          <SlideIn delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                
                {submitStatus.message && (
                  <div className={`p-3 rounded-lg ${
                    submitStatus.type === "success" 
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" 
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                </motion.button>
              </form>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}