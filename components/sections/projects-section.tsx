'use client';

import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        // 🔹 Check if repos are cached in localStorage
        const cached = localStorage.getItem('repos');
        if (cached) {
          setRepos(JSON.parse(cached));
          setLoading(false);
        }

        // 🔹 Fetch fresh data from GitHub
        const res = await fetch(
          'https://api.github.com/users/sumit7366/repos?sort=updated&per_page=100'
        );
        const data: Repo[] = await res.json();

        // Sort repos by latest updated first
        const sortedRepos = data.sort(
          (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setRepos(sortedRepos);
        setLoading(false);
        localStorage.setItem('repos', JSON.stringify(sortedRepos));
      } catch (error) {
        console.error('Failed to fetch repos', error);
        setLoading(false);
      }
    }

    fetchRepos();

    // Optional: auto-refresh every 5 minutes
    const interval = setInterval(fetchRepos, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My GitHub Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            All my repositories are automatically fetched from GitHub, including newly pushed projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4" />
        </motion.div>

        {/* 🔹 Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-slate-500 dark:text-slate-300 animate-pulse">
              Loading GitHub projects...
            </p>
          </div>
        ) : repos.length === 0 ? (
          <p className="text-center text-slate-500 dark:text-slate-300 py-20">
            No projects found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedRepo(repo)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-bold text-blue-500 uppercase tracking-wide">
                        {repo.language || 'Other'}
                      </span>
                      <h3 className="text-xl font-bold mt-2 text-slate-800 dark:text-white group-hover:text-blue-500 transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {new Date(repo.updated_at).getFullYear()}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {repo.description || 'No description provided yet.'}
                  </p>

                  <div className="flex gap-3">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <button
                      className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 font-medium"
                      onClick={() => setSelectedRepo(repo)}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            ))}
          </div>
        )}

        {/* 🔹 Modal for Selected Repo */}
        {selectedRepo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setSelectedRepo(null)}
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
                    <span className="text-sm font-bold text-blue-500 uppercase">
                      {selectedRepo.language || 'Other'}
                    </span>
                    <h3 className="text-3xl font-bold mt-2 gradient-text">{selectedRepo.name}</h3>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedRepo(null)}>
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {selectedRepo.description || 'No description provided.'}
                </p>
                <div className="flex gap-4 mt-6">
                  <motion.a
                    href={selectedRepo.html_url}
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
