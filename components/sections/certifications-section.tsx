'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Briefcase, Code, Star } from 'lucide-react';

const certifications = [
  {
    title: 'Machine Learning Internship',
    issuer: 'CodeAlpha',
    date: '2024',
    category: 'Internship',
    description: '15% improvement in ML model accuracy through optimization',
    icon: Star,
    color: 'purple',
  },
  {
    title: 'Python Project Internship',
    issuer: 'OctaNet Services',
    date: '2024',
    category: 'Internship',
    description: '30% boost in workflow efficiency through automation',
    icon: Code,
    color: 'blue',
  },
  {
    title: 'Internship Certificate',
    issuer: 'Younity',
    date: '2024',
    category: 'Internship',
    description: 'Completed comprehensive software development internship',
    icon: Briefcase,
    color: 'green',
  },
  {
    title: 'AI + Web Integration Excellence',
    issuer: 'Industry Recognition',
    date: '2024',
    category: 'Achievement',
    description: 'Recognized for innovative AI and web technology integration',
    icon: Award,
    color: 'orange',
  },
];

const categories = ['All', 'Internship', 'Achievement', 'Certification'];

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCerts = selectedCategory === 'All'
    ? certifications
    : certifications.filter((cert) => cert.category === selectedCategory);

  const colorClasses = {
    blue: 'from-blue-500 to-blue-700',
    purple: 'from-purple-500 to-purple-700',
    green: 'from-green-500 to-green-700',
    orange: 'from-orange-500 to-orange-700',
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Recognition of expertise and professional development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl h-full flex flex-col">
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[cert.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>

                <span className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-2">
                  {cert.category}
                </span>

                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                  {cert.title}
                </h3>

                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{cert.date}</span>
                  <motion.div
                    className="text-blue-500"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Award className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Active Contributor
            </h3>
          </div>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Active member of <strong>Xavier Coding Club (XCC)</strong> with contributions to open-source projects,
            technical workshops, and peer mentoring. Passionate about sharing knowledge and collaborating
            on innovative solutions.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <motion.a
              href="https://github.com/sumit7366"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
