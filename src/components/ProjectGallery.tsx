'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from 'react-icons/fi'
import Image from 'next/image'

interface ProjectMedia {
  src: string
  alt: string
  type: 'image' | 'video'
  mimeType?: string
  thumbnail?: string
}

interface ProjectGalleryProps {
  isOpen: boolean
  onClose: () => void
  images: ProjectMedia[]
}

// Helper function to determine media type and mime type
const getMediaInfo = (src: string): { type: 'image' | 'video', mimeType: string } => {
  const extension = src.split('.').pop()?.toLowerCase() || ''
  
  const imageFormats: Record<string, string> = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'gif': 'image/gif',
    'webp': 'image/webp',
  }

  const videoFormats: Record<string, string> = {
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'mov': 'video/quicktime',
    'avi': 'video/x-msvideo',
  }

  if (imageFormats[extension]) {
    return { type: 'image', mimeType: imageFormats[extension] }
  } else if (videoFormats[extension]) {
    return { type: 'video', mimeType: videoFormats[extension] }
  }

  // Default to image/jpeg if unknown
  return { type: 'image', mimeType: 'image/jpeg' }
}

export default function ProjectGallery({ isOpen, onClose, images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close gallery"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Gallery content */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Navigation buttons */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 z-10 p-2 bg-black/50 hover:bg-black/75 text-white hover:text-gray-300 rounded-full backdrop-blur-sm transition-all"
                aria-label="Previous image"
              >
                <FiChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 z-10 p-2 bg-black/50 hover:bg-black/75 text-white hover:text-gray-300 rounded-full backdrop-blur-sm transition-all"
                aria-label="Next image"
              >
                <FiChevronRight className="w-8 h-8" />
              </button>

              {/* Media content */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <div className="relative w-full h-[calc(100vh-200px)] flex items-center justify-center">
                  {images[currentIndex].type === 'video' ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <video
                        key={currentIndex}
                        controls
                        playsInline
                        autoPlay={false}
                        className="w-full h-auto max-h-[80vh] rounded-lg bg-black"
                        style={{ minWidth: '80%', minHeight: '60vh' }}
                      >
                        <source 
                          src={images[currentIndex].src}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      {!images[currentIndex].thumbnail && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <FiPlay className="w-24 h-24 text-white opacity-50" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image
                        key={currentIndex}
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        fill
                        className="object-contain rounded-lg"
                        sizes="100vw"
                        priority
                        quality={100}
                        loading="eager"
                        onError={(e) => {
                          console.error('Image failed to load:', images[currentIndex].src);
                          console.error('Error:', e);
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Image counter and info */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 px-4">
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  {currentIndex + 1} / {images.length}
                </div>
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                  {images[currentIndex].alt}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}