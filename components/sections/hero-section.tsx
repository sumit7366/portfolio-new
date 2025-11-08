'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Database, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const techIcons = [
  { Icon: Code2, color: 'text-blue-500', delay: 0 },
  { Icon: Database, color: 'text-green-500', delay: 0.2 },
  { Icon: Sparkles, color: 'text-purple-500', delay: 0.4 },
];

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const baseText = 'Sumit Kumar | ';
  const suffixText = 'Full-Stack & AI Developer';
  const [stats, setStats] = useState({ projects: 0, certifications: 0, degrees: 0 });

  // Looping typewriter only for the suffix (abilities). Base name stays static.
  useEffect(() => {
    let idx = 0;
    let isDeleting = false;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (isDeleting) {
        idx = Math.max(0, idx - 1);
        setDisplayedText(baseText + suffixText.slice(0, idx));
      } else {
        idx = Math.min(suffixText.length, idx + 1);
        setDisplayedText(baseText + suffixText.slice(0, idx));
      }

      let delay = isDeleting ? 40 : 80;

      // When full suffix typed, pause then start deleting
      if (!isDeleting && idx === suffixText.length) {
        delay = 1400;
        isDeleting = true;
      }

      // When fully deleted, pause then start typing again
      if (isDeleting && idx === 0) {
        delay = 500;
        isDeleting = false;
      }

      timeout = setTimeout(tick, delay);
    };

    timeout = setTimeout(tick, 500);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [baseText, suffixText]);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        if (step <= steps) {
          setStats({
            projects: Math.floor((5 / steps) * step),
            certifications: Math.floor((4 / steps) * step),
            degrees: Math.floor((2 / steps) * step),
          });
          step++;
        } else {
          setStats({ projects: 5, certifications: 4, degrees: 2 });
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            fill="currentColor"
            className="text-blue-500/10"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-2xl opacity-30 float-animation" />

              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src="/sumit profile photo.png"
                  alt="Sumit Kumar"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
                
              </motion.div>

              {techIcons.map(({ Icon, color, delay }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${color}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 1],
                    opacity: [0, 1, 1],
                    rotate: [0, 0, 360],
                  }}
                  transition={{
                    delay: delay + 1,
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: `${120 * Math.cos((index * 2 * Math.PI) / 3)}px ${120 * Math.sin((index * 2 * Math.PI) / 3)}px`,
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 min-h-[4rem] lg:min-h-[5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="gradient-text">{displayedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              A passionate Computer Science student and AI/ML Enthusiast building
              data-driven, scalable applications. Expertise in{' '}
              <span className="font-semibold text-blue-500">Python</span>,{' '}
              <span className="font-semibold text-blue-500">React</span>,{' '}
              <span className="font-semibold text-blue-500">Node.js</span>,{' '}
              <span className="font-semibold text-blue-500">TensorFlow</span>—boosted
              workflow efficiency by 30% and ML model accuracy by 15% through
              automation and intelligent deployments.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05, x: 2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 gap-2"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Projects
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="gap-2">
                  Download Resume
                </Button>
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { label: 'Projects', value: stats.projects, suffix: '+' },
                { label: 'Certifications', value: stats.certifications, suffix: '+' },
                { label: 'Degrees', value: stats.degrees, suffix: '' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { Icon: Github, href: 'https://github.com/sumit7366', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/sumit7366/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:sumitranjanhisu@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-500 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
