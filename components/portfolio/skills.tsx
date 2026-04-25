import { Badge } from '@/components/ui/badge'
import { AnimatedBackground } from './animated-background'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js'],
    color: 'from-cyan-500/30 to-blue-500/30'
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    color: 'from-purple-500/30 to-pink-500/30'
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'Firebase'],
    color: 'from-orange-500/30 to-red-500/30'
  },
  {
    category: 'Soft Skills',
    skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Mentoring', 'Agile', 'Code Review'],
    color: 'from-green-500/30 to-emerald-500/30'
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-white text-center">
          Skills & <span className="text-orange-400 glow-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-xl p-8 border-2 border-slate-700 hover:border-slate-500 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 relative overflow-hidden`}
              style={{ animation: `slideInUp 1s ease-out ${0.1 * index}s both` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-cyan-500/0 hover:from-orange-500/5 hover:to-cyan-500/5 transition-all duration-500 pointer-events-none" />
              
              <h3 className="text-2xl font-bold text-white mb-6 glow-text relative z-10">{category.category}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-slate-700/50 text-gray-100 border border-slate-600 hover:border-slate-400 hover:bg-slate-600/50 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all px-4 py-2 text-sm cursor-pointer transform hover:scale-110"
                    style={{ animation: `fadeIn 0.6s ease-out ${0.05 * skillIndex}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
