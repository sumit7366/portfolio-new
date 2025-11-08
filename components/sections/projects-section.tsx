'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const projects = [
  {
    title: 'AI Transcript Generator',
    year: '2024',
    category: 'Full-Stack AI',
    description: 'Transform audio into accurate text transcripts using speech-to-text AI',
    achievements: [
      'Real-time audio-to-text conversion with high accuracy',
      'Optimized Prisma ORM for 40% faster database operations',
      'Elegant Tailwind UI with responsive design',
      'Fast exports with 20% reduced latency',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'SQLite', 'Speech-to-Text API'],
    github: 'https://github.com/sumit7366',
    metrics: [
      { step: 'Input', speed: 100 },
      { step: 'Process', speed: 150 },
      { step: 'Convert', speed: 200 },
      { step: 'Export', speed: 180 },
    ],
  },
  {
    title: 'Credit Card Fraud Detection',
    year: '2024',
    category: 'Machine Learning',
    description: 'ML model for detecting fraudulent credit card transactions with high accuracy',
    achievements: [
      'Built with Scikit-learn and TensorFlow',
      '15% improvement in prediction accuracy',
      'Real-time fraud detection capabilities',
      'Comprehensive data preprocessing pipeline',
    ],
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/sumit7366/Credit-Card-Fraud-Detection',
    metrics: [
      { type: 'Precision', rate: 92 },
      { type: 'Recall', rate: 88 },
      { type: 'F1-Score', rate: 90 },
      { type: 'Accuracy', rate: 94 },
    ],
  },
  {
    title: 'House Price Predictor',
    year: '2024',
    category: 'Machine Learning',
    description: 'Housing price prediction model using advanced data analysis and ML techniques',
    achievements: [
      'Comprehensive data analysis and feature engineering',
      'Multiple regression models comparison',
      'Accurate price forecasting',
      'Visualization with Matplotlib and Seaborn',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/sumit7366/House-Prediction',
    metrics: [
      { feature: 'Location', impact: 85 },
      { feature: 'Size', impact: 75 },
      { feature: 'Age', impact: 60 },
      { feature: 'Amenities', impact: 70 },
    ],
  },
  {
    title: 'Movie Genre Predictor',
    year: '2024',
    category: 'NLP & ML',
    description: 'Genre classification system using NLP and machine learning',
    achievements: [
      'NLP with NLTK and spaCy for text analysis',
      'Multi-label classification support',
      'High accuracy genre predictions',
      'Sentiment analysis integration',
    ],
    tech: ['Python', 'TensorFlow', 'NLTK', 'spaCy', 'Scikit-learn'],
    github: 'https://github.com/sumit7366/Movie-Genre-Predictor',
    metrics: [
      { genre: 'Action', accuracy: 88 },
      { genre: 'Drama', accuracy: 85 },
      { genre: 'Comedy', accuracy: 82 },
      { genre: 'Thriller', accuracy: 86 },
    ],
  },
  {
    title: 'Typing Error Prediction',
    year: '2024',
    category: 'ML & CV',
    description: 'Error prediction system with English-to-Hindi translator',
    achievements: [
      'OpenCV integration for visual feedback',
      'English-Hindi translation support',
      'Improved user feedback mechanism',
      'Real-time error detection',
    ],
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Translation API'],
    github: 'https://github.com/sumit7366/Typing-Error-Prediction',
    metrics: [
      { metric: 'Accuracy', value: 87 },
      { metric: 'Speed', value: 92 },
      { metric: 'User Score', value: 85 },
    ],
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Building scalable solutions with measurable impact
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, rotateX: 5 }}
              className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-slate-800 dark:text-white group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{project.year}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 text-slate-500">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-sm font-bold text-blue-500 uppercase">{selectedProject.category}</span>
                    <h3 className="text-3xl font-bold mt-2 gradient-text">{selectedProject.title}</h3>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-slate-800 dark:text-white">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="text-blue-500 mt-0.5">✓</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-slate-800 dark:text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
                  <h4 className="font-bold mb-4 text-slate-800 dark:text-white">Performance Metrics</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    {selectedProject.title.includes('Transcript') ? (
                      <LineChart data={selectedProject.metrics}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey="step" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="speed" stroke="#3B82F6" strokeWidth={3} />
                      </LineChart>
                    ) : (
                      <BarChart data={selectedProject.metrics}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey={Object.keys(selectedProject.metrics[0])[0]} />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey={Object.keys(selectedProject.metrics[0])[1]} fill="#3B82F6" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    )}
                  </ResponsiveContainer>
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1"
                  >
                    <Button className="w-full gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </Button>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
