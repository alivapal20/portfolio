'use client'

import { AnimatedBackground } from './animated-background'

const experiences = [
  {
    id: 1,
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Led development of core platform features, mentored junior developers, and improved application performance by 40%.',
    highlights: ['Led team of 5 developers', 'Architected microservices', 'Improved performance by 40%']
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'Creative Agency Co.',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple client projects, implemented responsive designs, and optimized database queries.',
    highlights: ['Built 15+ projects', 'Optimized queries (2x faster)', 'Led frontend modernization']
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartUp Solutions LLC',
    period: '2019 - 2020',
    description: 'Contributed to product development, fixed bugs, and collaborated with cross-functional teams.',
    highlights: ['Built REST APIs', 'Frontend feature development', 'QA and testing']
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white text-center">
          Work <span className="text-cyan-400 glow-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative" style={{ animation: `slideInLeft 1s ease-out ${0.15 * index}s both` }}>
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-1 h-20 bg-gradient-to-b from-cyan-500/50 to-purple-500/50 animate-pulse" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-125">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-slate-800/50 border-2 border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 relative z-10">
                      <h3 className="text-2xl font-bold text-white glow-text">{exp.role}</h3>
                      <span className="text-cyan-400 font-semibold text-sm mt-2 sm:mt-0">{exp.period}</span>
                    </div>
                    
                    <p className="text-purple-400 font-semibold mb-2 glow-text">{exp.company}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed hover:text-gray-200 transition-colors duration-300">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span key={highlight} className="text-xs bg-slate-700/50 text-gray-200 px-3 py-1 rounded-full border border-slate-600">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(216, 0, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.8), 0 0 30px rgba(216, 0, 255, 0.6);
          }
        }

        .glow-text {
          animation: glow 3s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(0, 217, 255, 0.4));
        }
      `}</style>
    </section>
  )
}
