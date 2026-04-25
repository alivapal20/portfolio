'use client'

import { Button } from '@/components/ui/button'
import { AnimatedBackground } from './animated-background'

export function Contact() {
  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { label: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { label: 'Email', url: 'mailto:hello@example.com', icon: '✉️' },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white text-center glow-text">
          Let&apos;s <span className="text-purple-400">Connect</span>
        </h2>
        
        <p className="text-gray-300 text-center text-lg mb-12 leading-relaxed max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300" style={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
          I&apos;m always interested in hearing about new projects and opportunities. 
          Feel free to reach out through any of the channels below!
        </p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 rounded-xl p-8 text-center hover:border-cyan-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 relative overflow-hidden" style={{ animation: 'slideInUp 1s ease-out 0.2s both' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-500 pointer-events-none" />
            <div className="text-4xl mb-3 relative z-10 hover:scale-125 transition-transform duration-300">📧</div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10 glow-text">Email</h3>
            <a 
              href="mailto:hello@example.com"
              className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 relative z-10 hover:underline"
            >
              hello@example.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/70 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 relative overflow-hidden" style={{ animation: 'slideInUp 1s ease-out 0.3s both' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
            <div className="text-4xl mb-3 relative z-10 hover:scale-125 transition-transform duration-300">💬</div>
            <h3 className="text-xl font-bold text-white mb-2 relative z-10 glow-text">Quick Chat</h3>
            <p className="text-gray-300 relative z-10 hover:text-gray-200 transition-colors duration-300">Available for discussions about projects and opportunities</p>
          </div>
        </div>

        {/* Social Links */}
        <div style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}>
          <h3 className="text-2xl font-bold text-white text-center mb-8 glow-text">Follow Me On</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animation: `slideUp 0.6s ease-out ${0.1 * index}s` }}
              >
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-700/50 border-2 border-slate-600 rounded-lg hover:border-cyan-500 hover:bg-slate-700 transition-all duration-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-110 relative overflow-hidden">
                  <span className="text-xl group-hover:scale-150 transition-transform duration-300">{social.icon}</span>
                  {social.label}
                </button>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>
          <p className="text-gray-400 mb-6 hover:text-gray-300 transition-colors duration-300">
            Or if you prefer, you can message me directly:
          </p>
          <Button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/50 text-lg hover:scale-110 hover:-translate-y-1"
            onClick={() => window.open('mailto:hello@example.com')}
          >
            Send Me a Message
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
