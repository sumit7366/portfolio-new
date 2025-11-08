'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code, Brain, Mic, GraduationCap, CheckCircle2 } from 'lucide-react';

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Analytical Thinking',
  'Team Collaboration',
  'Adaptability',
];

const timeline = [
  {
    year: '2022',
    title: 'Started BCA Journey',
    description: "Began Bachelor's in Computer Applications at St. Xavier's College",
    Icon: BookOpen,
    color: 'blue',
  },
  {
    year: '2024',
    title: 'Python Intern',
    description: 'OctaNet Services - Developed automation tools',
    Icon: Code,
    color: 'green',
  },
  {
    year: '2024',
    title: 'ML Intern',
    description: 'CodeAlpha - Built ML models with 15% accuracy boost',
    Icon: Brain,
    color: 'purple',
  },
  {
    year: '2024',
    title: 'AI Transcript Project',
    description: 'Full-stack audio-to-text AI application',
    Icon: Mic,
    color: 'orange',
  },
  {
    year: '2025',
    title: 'Pursuing MCA',
    description: 'KIIT - Master of Computer Applications (Ongoing)',
    Icon: GraduationCap,
    color: 'blue',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.p
                className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Hi there! I'm <span className="font-bold text-blue-500">Sumit Kumar</span> 👋
              </motion.p>

              <motion.p
                className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                A passionate Computer Science student from the BCA Department at St. Xavier's College,
                currently pursuing my MCA from KIIT. I'm an AI/ML enthusiast who loves building
                data-driven, scalable applications that make a real impact.
              </motion.p>

              <motion.p
                className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Dreaming of building impactful software that shapes the future 🚀
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Soft Skills</h3>
              <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-4 shadow-lg">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: [0, -1000],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 20,
                      ease: 'linear',
                    },
                  }}
                >
                  {[...softSkills, ...softSkills].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full whitespace-nowrap"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const colorClasses = {
                  blue: 'bg-blue-500 text-blue-500',
                  green: 'bg-green-500 text-green-500',
                  purple: 'bg-purple-500 text-purple-500',
                  orange: 'bg-orange-500 text-orange-500',
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative flex gap-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative">
                      <motion.div
                        className={`w-12 h-12 rounded-full ${colorClasses[item.color as keyof typeof colorClasses].split(' ')[0]} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <item.Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      {index < timeline.length - 1 && (
                        <motion.div
                          className="absolute top-12 left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"
                          initial={{ scaleY: 0 }}
                          animate={isInView ? { scaleY: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          style={{ originY: 0 }}
                        />
                      )}
                    </div>

                    <div className="flex-1 bg-white dark:bg-slate-900 rounded-lg p-4 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-blue-500">{item.year}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <h4 className="font-bold text-slate-800 dark:text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Professional Highlights</h3>
          <blockquote className="italic text-lg leading-relaxed border-l-4 border-white/50 pl-6">
            <p className="mb-4">
              <strong>Full-Cycle Developer:</strong> From idea → design → deploy → maintain.
              I handle every aspect of software development with attention to detail and scalability.
            </p>
            <p>
              <strong>Adaptive Learner:</strong> Constantly exploring and adopting emerging technologies.
              Fast learner who thrives on challenges and innovation.
            </p>
          </blockquote>
        </motion.div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2 }}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-blue-500"
          d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,58.7C960,43,1056,21,1152,21.3C1248,21,1344,43,1392,53.3L1440,64"
        />
      </svg>
    </section>
  );
}
