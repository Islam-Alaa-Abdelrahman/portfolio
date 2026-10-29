"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiImage } from "react-icons/fi";
import { useState } from "react";
import ProjectGallery from "./ProjectGallery";

import { Project } from "@/types/Project";
import { getProjectMedia } from "@/utils/mediaUtils";

const projects: Omit<Project, "media">[] = [
  {
    id: "parkida",
    title: "Parkida — Parking Management Website & Mobile App",
    description:
      "Designed and built an Android-first parking platform spanning a React Native app, Firebase cloud services, and a bilingual marketing website. It connects daily parking operations with owner oversight. Mobile app preview; public Android download coming soon.",
    techStack: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Cloud Functions",
      "Kotlin",
    ],
    features: [
      "English and Arabic marketing website with RTL support and an interactive product walkthrough",
      "Owner and attendant workspaces for facilities, parking rates, and vehicle sessions",
      "Vehicle check-in, checkout, recorded collections, and completed-visit reporting",
      "Assisted Android plate recognition with human review and manual entry",
      "Receipt workflows with compatible Android Bluetooth ESC/POS printers",
      "Stripe subscription integration in a sandbox environment",
    ],
    demoUrl: "https://parkida.net/",
  },
  {
    id: "civic-pm",
    title: "CIVIC Project Management",
    description:
      "Designed, developed, and deployed a responsive website for a Dubai construction consultancy, with dedicated service pages, clear navigation, and structured inquiry forms. The wider project also includes a management application.",
    techStack: ["React", "TypeScript", "NestJS", "Prisma", "Nx"],
    features: [
      "Dedicated pages for construction project-management services",
      "Project-support guidance and construction expertise",
      "Project inquiry form and direct contact links",
      "Management application covering projects, costs, procurement, quality, and reporting",
    ],
    demoUrl: "https://civic-preview-delta.vercel.app/",
  },
  {
    id: "beauty-shop",
    title: "Fullashes — Beauty E-Commerce Platform",
    description:
      "Built a beauty e-commerce application connecting product discovery, customer accounts, checkout, and store administration.",
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
      "Chart.js",
    ],
    features: [
      "Product catalog with search, filtering, sorting",
      "Secure user authentication & profile management",
      "Shopping cart & order tracking",
      "PayPal payment integration",
      "Admin dashboard with analytics & user management",
    ],
    demoUrl: "https://fullashes.vercel.app/",
  },
];

const projectsWithMedia: Project[] = projects.map((project) => ({
  ...project,
  media: getProjectMedia(project.id),
}));

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden"
      >
        <div className="relative w-full aspect-[16/10] overflow-hidden">
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

        <div className="p-5 sm:p-8">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">
                {project.id === "civic-pm"
                  ? "Application Stack:"
                  : "Tech Stack:"}
              </h4>
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
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
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
                  <span>
                    {project.id === "parkida" ? "Visit Website" : "Live Demo"}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectGallery
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={project.media}
      />
    </>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="content-width"
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
  );
}
