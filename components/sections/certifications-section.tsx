'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Briefcase, Code, Star } from 'lucide-react';

const certifications = [
  {
    title: 'UiPath Agentic AI Training',
    issuer: 'UiPath',
    date: '2025',
    category: 'Certification',
    description: 'Completed UiPath Agentic AI program, gaining hands-on experience in automation workflows and AI integration.',
    icon: Award,
    color: 'blue',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_uipath-agenticai-artificialintelligence-activity-7388815314798497792-7fYm'
  },
  {
    title: 'Vision Bharat Trust – Teamwork & Leadership Program',
    issuer: 'Vision Bharat Trust',
    date: '2025',
    category: 'Certification',
    description: 'Recognized for active participation in KITPD2S initiative, showcasing leadership and teamwork skills.',
    icon: Star,
    color: 'purple',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_visionbharattrust-kitpd2s-teamwork-activity-7384248966793728001-s0Zd'
  },
  {
    title: 'Oracle Cloud Infrastructure (OCI) Certified',
    issuer: 'Oracle',
    date: '2025',
    category: 'Certification',
    description: 'Achieved Oracle Cloud Infrastructure certification demonstrating expertise in cloud computing and architecture.',
    icon: Code,
    color: 'orange',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_oci-oraclecertified-cloudcomputing-activity-7383417864445222912-r4og'
  },
  {
    title: 'DOC – Internship Completion',
    issuer: 'Department of Computer Science',
    date: '2024',
    category: 'Internship',
    description: 'Completed a hands-on project internship under DOC focusing on real-world data analysis and model deployment.',
    icon: Briefcase,
    color: 'green',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_doc-activity-7255397194034290690-eNGq'
  },
  {
    title: 'Cybersecurity Awareness Program',
    issuer: 'Cybersecurity Council',
    date: '2024',
    category: 'Certification',
    description: 'Successfully completed cybersecurity awareness program covering ethical hacking and data protection fundamentals.',
    icon: Award,
    color: 'orange',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_cybersecurity-activity-7254853860345663489-VWGv'
  },
  {
    title: 'Helping Hands – Social Impact Initiative',
    issuer: 'Helping Hands Organization',
    date: '2024',
    category: 'Achievement',
    description: 'Certificate of appreciation for contributing to community upliftment projects through Helping Hands.',
    icon: Star,
    color: 'purple',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_this-certificate-issued-by-the-helping-hands-activity-7245627118636724224-7T4b'
  },
  {
    title: 'Demo Session Presentation',
    issuer: 'St. Xavier’s College',
    date: '2024',
    category: 'Achievement',
    description: 'Presented a demo session on AI and web integration concepts, demonstrating clear communication and teaching skills.',
    icon: Award,
    color: 'purple',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_demo-session-activity-7194295238893441025-OY0j'
  },
  {
    title: 'AI/ML Overview Presentation',
    issuer: 'Personal Initiative',
    date: '2024',
    category: 'Achievement',
    description: 'Delivered an informative session providing an overview of AI and Machine Learning technologies.',
    icon: Code,
    color: 'purple',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_hiii-connections-this-is-the-overview-of-activity-7175532276510846978-F31V'
  },
  {
    title: 'Python Project Certificate',
    issuer: 'OctaNet Services Pvt Ltd',
    date: '2024',
    category: 'Internship',
    description: 'Completed a Python project internship focused on workflow automation and performance optimization.',
    icon: Code,
    color: 'blue',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_python-project-certificate-activity-7169352618845061120-1AqQ'
  },
  {
    title: 'Career Ninja LearnTube Certification',
    issuer: 'Career Ninja',
    date: '2024',
    category: 'Certification',
    description: 'Gained practical insights into career growth, productivity, and digital learning through LearnTube platform.',
    icon: Award,
    color: 'purple',
    link: 'https://www.linkedin.com/posts/sumitkumarrr_careerninja-learntube-careerninja-activity-7120443109318021121-zqNw'
  },
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
              className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
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

                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm font-medium hover:underline mt-auto"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Certificate ↗
                  </motion.a>
                )}


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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {/* Box 1 - Xavier Coding Club */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Code className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Active Member – XCC
                </h3>
              </div>
              <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-4">
                Active member of <strong>Xavier Coding Club (XCC)</strong> contributing to open-source projects,
                technical workshops, and peer mentoring.
                Recently conducted a <strong>Session on Machine Learning Roadmap</strong> to guide peers in their AI/ML journey.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="https://www.linkedin.com/posts/sumitkumarrr_session-on-machine-learning-roadmap-by-activity-7237123264953675776-dcMs"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  View LinkedIn Post ↗
                </motion.a>
              </div>
            </div>

            {/* Box 2 - UiPath Community */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Award className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  UiPath Community Contributor
                </h3>
              </div>
              <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-4">
                Engaged member of the <strong>UiPath Community</strong>, contributing to automation initiatives
                and AI-driven workflows.
                Successfully completed the <strong>UiPath Agentic AI Training</strong>, enhancing expertise
                in AI-based automation systems.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="https://www.linkedin.com/posts/sumitkumarrr_uipath-agenticai-artificialintelligence-activity-7388815314798497792-7fYm"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  View Certificate ↗
                </motion.a>
              </div>
            </div>

            {/* Box 3 - Helping Hands Foundation */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Star className="w-8 h-8 text-pink-500" />
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Helping Hands Foundation
                </h3>
              </div>
              <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-4">
                Contributed to the <strong>Helping Hands Foundation</strong> as part of a social impact initiative,
                focusing on education and community welfare.
                Received a <strong>Certificate of Appreciation</strong> for active participation in volunteer efforts.
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="https://www.linkedin.com/posts/sumitkumarrr_this-certificate-issued-by-the-helping-hands-activity-7245627118636724224-7T4b"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
                >
                  View Certificate ↗
                </motion.a>
              </div>
            </div>
          </motion.div>

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
