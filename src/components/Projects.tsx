'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi'
import { useState } from 'react'
import ProjectGallery from './ProjectGallery'

// Example project images (replace with your actual project images/videos)
// Import Project type
import { Project } from '@/types/Project'
import { getProjectMedia } from '@/utils/mediaUtils'

const projects: Omit<Project, 'media'>[] = [
  {
    id: 'beauty-shop',
    title: 'Beauty Shop E-Commerce Platform',
    description: 'A full-stack e-commerce platform specializing in cosmetics and beauty products. Built with modern technologies and best practices.',
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth.js",
      "Cloudinary",
      "PayPal SDK",
      "Framer Motion",
      "Chart.js"
    ],
    features: [
      "Product catalog with search, filtering, sorting",
      "Secure user authentication & profile management",
      "Shopping cart & order tracking",
      "PayPal payment integration",
      "Admin dashboard with analytics & user management"
    ],
    demoUrl: '#',
    sourceUrl: '#'
  }
  // You can add more projects here following the same structure
]

// Get media for each project
const projectsWithMedia: Project[] = projects.map(project => ({
  ...project,
  media: getProjectMedia(project.id)
}))

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden"
      >
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src={project.media[0].src}
            alt={project.media[0].alt}
            fill
            className="object-contain"
            quality={100}
            sizes="100vw"
            priority
            loading="eager"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2"
            >
              <FiImage className="w-5 h-5" />
              View Gallery ({project.media.length})
            </button>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <FiImage className="w-5 h-5" />
                <span>View Gallery</span>
              </button>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <FiExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Add console.log to debug media */}
      {console.log('Project media:', project.media)}
      <ProjectGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={project.media}
      />
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          
          <div className="space-y-12">
            {projectsWithMedia.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}