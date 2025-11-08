'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { Icon: Github, href: 'https://github.com/sumit7366', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/sumit7366/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:sumitranjanhisu@gmail.com', label: 'Email' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">Sumit Kumar</h3>
            <p className="text-slate-300 mb-4">
              Full-Stack Developer & AI/ML Enthusiast building scalable, data-driven applications.
            </p>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm">
                Rajeev Nagar, Road No. 24<br />
                Patna, Bihar, India
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              Open to opportunities and collaborations
            </p>
          </motion.div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="w-full flex justify-center md:justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-slate-400"
            >
              © 2025 Sumit Kumar. All rights reserved.
            </motion.p>
          </div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="icon"
              className="rounded-full bg-slate-800 hover:bg-blue-500 transition-colors"
              aria-label="Back to top"
            >
              <motion.div whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300 }}>
                <ArrowUp className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
