'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';

const experiences = [
  {
    role: 'ML Intern',
    company: 'CodeAlpha',
    period: 'Mar 2024 - Jun 2024',
    description: 'Built and tuned machine learning models with focus on accuracy and performance optimization',
    achievements: [
      'Developed ML models with 15% accuracy improvement',
      'Created Flask APIs with 20% reduced latency',
      'Implemented comprehensive data preprocessing pipelines',
      'Collaborated with cross-functional teams',
    ],
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'Pandas'],
    metrics: { efficiency: '+15%' },
  },
  {
    role: 'Python Development Intern',
    company: 'OctaNet Services',
    period: 'Jan 2024 - Mar 2024',
    description: 'Developed Python automation tools and scripts to enhance workflow efficiency',
    achievements: [
      'Boosted workflow efficiency by 30%',
      'Saved 5+ hours per week through automation',
      'Created modular and reusable Python scripts',
      'Improved data processing pipelines',
    ],
    tech: ['Python', 'Automation', 'Data Processing'],
    metrics: { efficiency: '+30%' },
  },
  {
    role: 'Xavier Coding Club Member',
    company: "St. Xavier's College",
    period: '2022 - Present',
    description: 'Active participant in coding projects and technical initiatives',
    achievements: [
      'Contributed to Python automation projects',
      'Participated in data analysis initiatives',
      'Mentored junior members',
      'Organized coding workshops',
    ],
    tech: ['Python', 'Web Development', 'Data Analysis'],
    metrics: { projects: '10+' },
  },
  {
    role: 'Full-Stack Developer',
    company: 'Freelance',
    period: '2023 - Present',
    description: 'Developed dynamic web applications with modern tech stack',
    achievements: [
      'Built responsive web applications',
      'Implemented REST APIs with JWT authentication',
      'Deployed applications on cloud platforms',
      'Maintained 99% uptime',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    metrics: { uptime: '99%' },
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Building expertise through hands-on projects and internships
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2" />

                <motion.div
                  className="absolute left-8 md:left-1/2 w-16 h-16 -ml-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="md:w-1/2 ml-24 md:ml-0 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h3>
                      <p className="text-blue-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {Object.values(exp.metrics)[0]}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{exp.period}</p>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span className="text-blue-500 mt-0.5">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
