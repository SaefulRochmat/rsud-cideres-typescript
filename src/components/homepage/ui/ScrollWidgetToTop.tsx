'use client'

import { useEffect, useState } from 'react'
import { IoIosArrowRoundUp } from "react-icons/io";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // fungsi untuk deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // misalnya navbar tingginya 80px (bisa disesuaikan)
      const showAfter = 80
      if (window.scrollY > showAfter) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // fungsi scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 flex items-center justify-center
        w-12 h-12 rounded-full shadow-lg bg-[#C62D30] text-white
        hover:bg-red-700 transition-all duration-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <IoIosArrowRoundUp  className="w-6 h-6" />
    </button>
  )
}
