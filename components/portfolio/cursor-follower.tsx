'use client'

import { useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export function CursorFollower() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Outer glow ring */}
      <div
        className={`fixed w-10 h-10 border border-cyan-400/40 rounded-full pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      />

      {/* Main cursor circle with gradient border */}
      <div
        className={`fixed w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          boxShadow: '0 0 12px rgba(0, 217, 255, 0.6), inset 0 0 8px rgba(0, 217, 255, 0.3)',
        }}
      />

      {/* Inner dot */}
      <div
        className={`fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />

      {/* Soft trailing glow */}
      <div
        className={`fixed w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none blur-lg transition-opacity duration-300 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          zIndex: 9998,
        }}
      />

      <style>{`
        * {
          cursor: none;
        }
      `}</style>
    </>
  )
}
