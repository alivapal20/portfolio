'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

interface AnimatedBackgroundProps {
  variant?: 'light' | 'dark'
}

export function AnimatedBackground({ variant = 'dark' }: AnimatedBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Generate animated particles
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  const bgClass = variant === 'light' ? 'bg-slate-900/50' : 'bg-slate-900/50'
  
  return (
    <>
      {/* Base gradient background */}
      <div className={`absolute inset-0 ${bgClass}`} />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent animate-pulse" />

      {/* Floating particles */}
      {isClient && particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `floatParticles ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            pointerEvents: 'none',
            '--tx': `${Math.random() * 100 - 50}px`,
          } as React.CSSProperties}
        />
      ))}

      {/* Animated blur orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,217,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <style>{`
        @keyframes floatParticles {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(var(--tx, 0px));
            opacity: 0;
          }
        }

        @keyframes slowFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) translateX(30px) rotate(8deg);
          }
        }

        .animate-slow-float {
          animation: slowFloat 8s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
