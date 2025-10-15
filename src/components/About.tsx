'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              Passionate software engineer with a strong foundation in software engineering
              and web application development. I specialize in creating modern, efficient,
              and user-friendly applications using cutting-edge technologies.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Education</h3>
              <p>
                Bachelor's in Software Engineering from Eastern Mediterranean University (EMU), Cyprus
                <br />
                <span className="text-blue-600 dark:text-blue-400">ABET Accredited Program</span>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Professional Strengths</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Strong analytical and problem-solving abilities</li>
                <li>Excellent teamwork and collaboration skills</li>
                <li>High adaptability and flexibility</li>
                <li>Fast learner with a passion for new technologies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Certifications</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Microsoft Power Platform Fundamentals</li>
                <li>ABET Accreditation in Engineering & Technology</li>
                <li>Member of the Society of Engineers – UAE</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Passions</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Mentoring & helping others learn</li>
                <li>Taking on coding challenges</li>
                <li>Continuous skill development</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}