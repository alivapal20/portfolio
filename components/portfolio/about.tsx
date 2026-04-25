'use client'

import { AnimatedBackground } from './animated-background'

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white text-center">
          About <span className="text-cyan-400 glow-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" style={{ animation: 'fadeInLeft 1s ease-out' }}>
            <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              I&apos;m a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I specialize in building scalable applications that users love.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              I have a strong foundation in React, TypeScript, and Node.js, with a focus on clean code, performance optimization, 
              and user experience. I&apos;m always eager to learn new technologies and stay updated with industry trends.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
              Beyond coding, I enjoy contributing to open-source projects, writing technical blogs, and mentoring junior developers. 
              When I&apos;m not coding, you can find me exploring new coffee shops or hiking in nature.
            </p>
          </div>

          <div className="flex items-center justify-center" style={{ animation: 'fadeInRight 1s ease-out 0.2s both' }}>
            <div className="relative w-64 h-64">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
              {/* Secondary glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-lg blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
              
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-8 border-2 border-cyan-500/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mb-4 flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
                    👨‍💻
                  </div>
                  <p className="text-white font-semibold glow-text">Full-Stack Developer</p>
                  <p className="text-cyan-400 text-sm mt-2">Crafting Digital Experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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
