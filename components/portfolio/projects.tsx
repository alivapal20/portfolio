'use client'

import { AnimatedBackground } from './animated-background'
import { CardDeck } from './card-deck'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white text-center">
          Featured <span className="text-purple-400 glow-text">Projects</span>
        </h2>
        <p className="text-gray-400 mb-16 text-lg text-center">Click on any project to view the live version</p>

        <CardDeck />
      </div>
    </section>
  )
}
