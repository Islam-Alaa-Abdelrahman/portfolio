'use client'

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
)

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Islam Abdelrahman. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <SocialLink 
              href="https://linkedin.com"
              icon={FiLinkedin}
            />
            <SocialLink 
              href="mailto:Islam_Abdelrahman@outlook.com"
              icon={FiMail}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}