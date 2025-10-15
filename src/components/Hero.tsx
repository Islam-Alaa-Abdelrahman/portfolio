'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
)

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 section-padding" id="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm Islam Abdelrahman
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              Software Engineer
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Passionate about creating impactful web applications with modern technologies.
            Specializing in full-stack development with Next.js, React, and TypeScript.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </motion.a>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-6">
            <SocialLink 
              href="https://www.linkedin.com/in/islam-abdelrahman-2b526523a/"
              icon={FiLinkedin}
              label="LinkedIn"
            />
            <SocialLink 
              href="mailto:Islam_Abdelrahman@outlook.com"
              icon={FiMail}
              label="Email"
            />
            <SocialLink 
              href="tel:+971551417445"
              icon={FiPhone}
              label="+971 55 141 7445"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}