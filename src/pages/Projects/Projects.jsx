import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import yesdone from '/src/assets/projects/yesdone.JPG';
import examai from '/src/assets/projects/examai.JPG';
import ssg from '/src/assets/projects/ssg.JPG';
import portfolio from '/src/assets/projects/portfolio.JPG';
import ccbs from '/src/assets/projects/ccbs.JPG';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [filtered, setFiltered] = useState([]);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      year: '2023',
      category: 'Web Development',
      image: portfolio,
      description: 'Fully-responsive portfolio built with HTML, JavaScript, CSS, BootStrap, Firebase.',
      tech: ['HTML', 'JavaScript', 'CSS', 'BootStrap', 'Firebase'],
      live: 'https://my-portfolio-tan-xi-83.vercel.app/'
    },
    {
      id: 2,
      title: 'Intelligent Exam Preparation',
      year: '2024',
      category: 'Other',
      image: examai,
      description: 'Python expert system that schedules study time using a rule-based inference engine.',
      tech: ['Python', 'Inference Engine', 'Working Memory', 'Expert System', 'Streamlit'],
      live: 'https://projectaiexam-nulqpg53edw8ahsypaj3nq.streamlit.app/'
    },
    {
      id: 3,
      title: 'Simon Says Game',
      year: '2023',
      category: 'Web Development',
      image: ssg,
      description: 'Classic memory game with Canvas animations and multiple difficulty levels.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      live: 'https://project-simon-says.vercel.app/'
    },
    {
      id: 4,
      title: 'Clear Care Billing Solution',
      year: '2023',
      category: 'Web Development',
      image: ccbs,
      description: 'Clear Care Billing Solutions is one of the few Billing Companies that provides complete Medical Billing Services.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      live: 'https://project-ccbs.vercel.app/'
    },
    {
      id: 5,
      title: 'YesAndDone',
      year: '2022',
      category: 'Web Development',
      image: yesdone,
      description: 'A website which provides IT Services',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      live: 'https://yesanddone.com/'
    },
  ];

  const filters = ['All Projects', 'Web Development', 'Other'];

  useEffect(() => {
    setFiltered(activeFilter === 'All Projects' ? projects : projects.filter(p => p.category === activeFilter));
  }, [activeFilter]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#121212] pt-24 pb-12 px-4 sm:px-6 lg:px-8" // Added pt-24 for navbar spacing
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E5E7EB] mb-4">
            Creative Portfolio
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            A curated selection of web, mobile & hardware projects.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors
                ${activeFilter === f
                  ? 'bg-[#6EE7B7] text-[#121212]'
                  : 'bg-[#1E1E1E] text-[#E5E7EB] hover:bg-[#2E2E2E]'}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Responsive grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map(p => (
            <FlipCard key={p.id} {...p} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

/* ---------- 3-D flip-card ---------- */
const FlipCard = ({ image, title, description, tech, live }) => (
  <motion.div
    className="group relative w-full h-72 [perspective:1000px]"
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
  >
    <motion.div
      className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
    >
      {/* Front */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
        <div className="relative w-full h-full">
          <img 
            src={image} 
            alt={title} 
            className="absolute w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div>
              <h3 className="text-xl font-bold text-[#E5E7EB]">{title}</h3>
              <p className="text-sm text-[#9CA3AF]">{title.split(' ')[0]} • {tech[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back */}
      <div className="absolute inset-0 bg-[#1E1E1E]/90 backdrop-blur-md border border-[#6EE7B7]/30 rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] p-5 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold text-[#E5E7EB] mb-2">{title}</h4>
          <p className="text-sm text-[#9CA3AF] mb-3">{description}</p>
          <div className="flex flex-wrap gap-1">
            {tech.map(t => (
              <span key={t} className="text-xs px-2 py-0.5 bg-[#2E2E2E] rounded text-[#E5E7EB]">
                {t}
              </span>
            ))}
          </div>
        </div>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6EE7B7] hover:underline"
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      </div>
    </motion.div>
  </motion.div>
);

export default Projects;