'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { X } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  link: string
  color: string
  borderColor: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com/project1',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/50',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'An intelligent chatbot powered by advanced NLP models with conversation history and multilingual support.',
    tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Tailwind CSS'],
    link: 'https://example.com/project2',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/50',
  },
  // ...other projects...
];

export function CardDeck() {
  const [selectedCard, setSelectedCard] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 py-8 w-full max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedCard(project)}
            className="h-80 w-full cursor-pointer flex"
          >
            <div className="relative w-full h-full transition-all duration-500 group">
              <Card className={`bg-gradient-to-br ${project.color} backdrop-blur-sm border-2 ${project.borderColor} p-6 h-full flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 relative overflow-hidden group
                hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30
                focus-within:scale-105 focus-within:-translate-y-2 focus-within:shadow-2xl focus-within:shadow-cyan-500/30
              `}
                tabIndex={0}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-700/50 text-cyan-300 border border-cyan-500/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="bg-slate-700/50 text-gray-400 border border-slate-500/30 text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                  </div>
                  <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors duration-300 text-sm">
                    Click to explore →
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    {/* Expanded Card Modal */}
    {selectedCard && (
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
        onClick={() => setSelectedCard(null)}
      >
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-zoomIn"
          onClick={(e) => e.stopPropagation()}
        >
          <Card className={`bg-gradient-to-br ${selectedCard.color} backdrop-blur-sm border-2 ${selectedCard.borderColor} p-8 md:p-12 relative`}>
            {/* Close button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-all duration-300 hover:scale-110 z-50"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{selectedCard.title}</h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">{selectedCard.description}</p>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-cyan-300 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCard.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-700/50 text-cyan-300 border border-cyan-500/30 px-4 py-2"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <a
                href={selectedCard.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                Visit Project
              </a>
            </div>
          </Card>
        </div>
      </div>
    )}
    <style>{`
      .group:hover .group-hover\:from-cyan-500\/10 {
        --tw-gradient-from: rgba(6, 182, 212, 0.10);
      }
      .group:hover .group-hover\:to-purple-500\/10 {
        --tw-gradient-to: rgba(168, 85, 247, 0.10);
      }
    `}</style>
  </>
  )
}
