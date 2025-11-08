'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';


const calculateProgress = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();

  if (today < start) return 0; // not started yet
  if (today > end) return 100; // already completed

  const total = end.getTime() - start.getTime();
  const elapsed = today.getTime() - start.getTime();
  if (total <= 0) return 0;
  return Math.min(100, Math.max(0, (elapsed / total) * 100));
};

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'KIIT University',
    location: 'Bhubaneswar, Odisha',
    period: '2025 - 2027',
    expected: 'Apr 2027',
    status: 'ongoing',
    // Automatically calculate based on start (Apr 2025) to expected (Apr 2027)
    progress: calculateProgress('2025-08-01', '2027-05-01'),
    description: 'Specializing in advanced software development and AI/ML',
    highlights: [
      'Focus on AI/ML and Data Science',
      'Advanced Software Engineering',
      'Cloud Computing and DevOps',
      'Research in Emerging Technologies',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: "St. Xavier's College",
    location: 'Patna, Bihar',
    period: '2022 - 2025',
    expected: 'May 2025',
    status: 'completed',
    progress: 100,
    description: 'Foundation in computer science and software development',
    highlights: [
      'Core Computer Science Fundamentals',
      'Web Development and Databases',
      'Data Structures and Algorithms',
      'Active Member of Xavier Coding Club',
    ],
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Academic journey in computer science and software engineering
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />

              <div className="relative">
                <motion.div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${edu.status === 'ongoing'
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase">
                    {edu.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{edu.degree}</h3>
                <p className="text-lg font-medium text-blue-500 mb-4">{edu.institution}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Expected: {edu.expected}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6">{edu.description}</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</span>
                    <span className="text-sm font-bold text-blue-500">{edu.progress}%</span>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${edu.progress}%` } : {}}
                      transition={{ delay: index * 0.2 + 0.5, duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3 text-slate-800 dark:text-white">Key Highlights</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="text-blue-500 mt-0.5">✓</span>
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Roadmap removed as requested */}
      </div>
    </section>
  );
}
