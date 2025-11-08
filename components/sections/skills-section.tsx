'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell } from 'recharts';

const programmingSkills = [
  { name: 'Python', level: 75, description: 'Core for AI/ML and backend automation' },
  { name: 'JavaScript', level: 70, description: 'Full-stack web development' },
  { name: 'C', level: 70, description: 'Systems programming' },
  { name: 'C++', level: 65, description: 'Object-oriented programming' },
  { name: 'Java', level: 60, description: 'Enterprise applications' },
  { name: 'SQL', level: 70, description: 'Database management' },
];

const frontendSkills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Bootstrap', level: 75 },
  { name: 'Tailwind', level: 85 },
];

const backendSkills = [
  { name: 'Node.js', level: 75 },
  { name: 'Express', level: 70 },
  { name: 'Flask', level: 70 },
  { name: 'MongoDB', level: 65 },
  { name: 'REST APIs', level: 80 },
];

const aimlSkills = [
  { name: 'TensorFlow', level: 70 },
  { name: 'Scikit-learn', level: 75 },
  { name: 'Pandas', level: 80 },
  { name: 'NumPy', level: 80 },
  { name: 'Keras', level: 65 },
];

const softSkillsRadar = [
  { skill: 'Problem Solving', value: 85 },
  { skill: 'Communication', level: 80 },
  { skill: 'Teamwork', value: 88 },
  { skill: 'Analytical', value: 82 },
  { skill: 'Adaptability', value: 85 },
  { skill: 'Leadership', value: 75 },
];

const COLORS = ['#3B82F6', '#1E40AF', '#60A5FA', '#2563EB', '#1D4ED8'];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Programming Languages</h3>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={programmingSkills} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700">
                            <p className="font-bold text-slate-900 dark:text-white">{payload[0].payload.name}</p>
                            <p className="text-blue-500">{payload[0].value}% Proficiency</p>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                              {payload[0].payload.description}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="level" radius={[0, 8, 8, 0]}>
                    {programmingSkills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Soft Skills</h3>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={softSkillsRadar}>
                  <PolarGrid stroke="#3B82F6" opacity={0.3} />
                  <PolarAngleAxis dataKey="skill" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#64748b' }} />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                    animationDuration={1000}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Frontend Development', skills: frontendSkills },
            { title: 'Backend Development', skills: backendSkills },
            { title: 'AI/ML & Data Science', skills: aimlSkills },
          ].map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + catIndex * 0.1 }}
              className="bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + catIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-blue-500 font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + catIndex * 0.1 + index * 0.05, duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
