'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const ContactMethod = ({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
  >
    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{value}</p>
    </div>
  </a>
)

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formState)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through any of the following methods:
              </p>

              <div className="space-y-4">
                <ContactMethod
                  icon={FiMail}
                  title="Email"
                  value="Islam_Abdelrahman@outlook.com"
                  href="mailto:Islam_Abdelrahman@outlook.com"
                />
                <ContactMethod
                  icon={FiPhone}
                  title="Phone"
                  value="+971 55 141 7445"
                  href="tel:+971551417445"
                />
                <ContactMethod
                  icon={FiLinkedin}
                  title="LinkedIn"
                  value="Connect with me"
                  href="https://www.linkedin.com/in/islam-abdelrahman-2b526523a/"
                />
                <ContactMethod
                  icon={FaWhatsapp}
                  title="WhatsApp"
                  value="+971 55 141 7445"
                  href="https://wa.me/971551417445"
                />
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent dark:bg-gray-800"
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}