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
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team features, and advanced filtering options.',
    tech: ['Vue.js', 'Firebase', 'Vuetify', 'Socket.io'],
    link: 'https://example.com/project3',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/50',
  },
  {
    id: 4,
    title: 'Portfolio Dashboard',
    description: 'A beautiful portfolio dashboard showcasing projects with interactive visualizations and smooth animations.',
    tech: ['React', 'Three.js', 'Recharts', 'Framer Motion'],
    link: 'https://example.com/project4',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/50',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'Comprehensive analytics platform for tracking social media metrics with detailed reports and insights.',
    tech: ['Next.js', 'PostgreSQL', 'Chart.js', 'Prisma'],
    link: 'https://example.com/project5',
    color: 'from-indigo-500/20 to-violet-500/20',
    borderColor: 'border-indigo-500/50',
  },
  {
    id: 6,
    title: 'Mobile Photo App',
    description: 'Cross-platform mobile application for photo editing with advanced filters and cloud synchronization.',
    tech: ['React Native', 'Firebase', 'ImageMagick', 'Redux'],
    link: 'https://example.com/project6',
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-500/50',
  },
]

interface CardPosition {
  rotation: number
  offsetX: number
  offsetY: number
  scale: number
  zIndex: number
}

export function CardDeck() {
  const [selectedCard, setSelectedCard] = useState<Project | null>(null)
  const [cardPositions, setCardPositions] = useState<CardPosition[]>([])
  const [isClient, setIsClient] = useState(false)

  // Generate refined riffle shuffle positions with depth and perspective
  useEffect(() => {
    setIsClient(true)
    const positions: CardPosition[] = projects.map((_, index) => {
      // Create interleaving left-right riffle shuffle pattern
      const pairedIndex = Math.floor(index / 2)
      const isLeft = index % 2 === 0
      
      // Staggered interleaving with perspective depth
      const cascadeOffset = pairedIndex * 20
      const depthScale = 1 - (pairedIndex * 0.03)
      
      return {
        rotation: (Math.random() - 0.5) * 12 + (isLeft ? -3 : 3),
        offsetX: (isLeft ? -35 : 35) + cascadeOffset + (Math.random() - 0.5) * 8,
        offsetY: cascadeOffset * 0.4 + (Math.random() - 0.5) * 5,
        scale: depthScale,
        zIndex: index,
      }
    })
    setCardPositions(positions)
  }, [])

  const positions = cardPositions

  return (
    <>
      <div className="flex flex-wrap justify-center items-start gap-6 px-4 py-8" style={{ perspective: '1200px' }}>
        {isClient && projects.map((project, index) => {
          const position = positions[index] || { rotation: 0, offsetX: 0, offsetY: 0, scale: 1, zIndex: 0 }
          
          return (
            <div
              key={project.id}
              onClick={() => setSelectedCard(project)}
              className="h-80 w-72 cursor-pointer"
              style={{
                animation: `riffleShuffleIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s both`,
                perspective: '1000px',
                zIndex: position.zIndex,
              }}
            >
              <div
                className="relative w-full h-full transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-4 hover:scale-110 hover:z-50"
                style={{
                  transform: `perspective(800px) rotateY(${position.rotation * 0.5}deg) rotateX(${(position.rotation * 0.3)}deg) rotate(${position.rotation}deg) translateX(${position.offsetX}px) translateY(${position.offsetY}px) scale(${position.scale})`,
                  transformStyle: 'preserve-3d',
                  filter: `drop-shadow(${position.offsetX * 0.05}px ${position.offsetY * 0.05}px 20px rgba(0, 217, 255, ${0.1 + index * 0.02}))`,
                }}
              >
                <Card className={`bg-gradient-to-br ${project.color} backdrop-blur-sm border-2 ${project.borderColor} p-6 h-full flex flex-col justify-between hover:border-cyan-400 transition-all duration-500 relative overflow-hidden group`}>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/15 group-hover:to-purple-500/15 transition-all duration-500 pointer-events-none" />

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
          )
        })}
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
        @keyframes riffleShuffleIn {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(45deg) rotateX(20deg) translateZ(-100px) translateY(-60px);
            filter: drop-shadow(0 0 0 rgba(0, 217, 255, 0));
          }
          60% {
            opacity: 1;
            filter: drop-shadow(8px 8px 24px rgba(0, 217, 255, 0.3));
          }
          85% {
            transform: perspective(1000px) rotateY(-5deg) rotateX(-2deg) translateZ(20px) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0) translateY(0);
            filter: drop-shadow(0 0 12px rgba(0, 217, 255, 0.15));
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-zoomIn {
          animation: zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </>
  )
}
