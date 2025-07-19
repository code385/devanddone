/**
 * DevAndDone | Web & App Development Solutions
 * File: [ReplaceWithFileName.js]
 * Description: [Brief description of what this file does]
 *
 * Author: Irfan Khan
 * Created: July 18, 2025
 * © 2025 DevAndDone. All rights reserved.
 */


/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Download, Mail, Github, Linkedin, ArrowRight, Cpu, BookOpen, ExternalLink } from 'lucide-react';

/* ---------- Links ---------- */
export const links = {
  
  email: 'codingwithme178@gmail.com',
  github: 'https://github.com/code385',
  linkedin: 'https://www.linkedin.com/in/irfan-khan1074/',
};

import profileImg from '/src/assets/images/profile.jpg';
import yesdone from '/src/assets/projects/yesdone.JPG';
import examai from '/src/assets/projects/examai.JPG';
import ccbs from '/src/assets/projects/ccbs.JPG';
/* ---------- Data ---------- */
const topSkills = [
  { title: 'JavaScript / TypeScript', icon: <Cpu size={20} /> },
  { title: 'React & Next.js', icon: <Cpu size={20} /> },
  { title: 'Node.js / Express', icon: <Cpu size={20} /> },
];

const projects = [
  {
    title: 'YesAndDone',
    details: 'A website which provides It Services ',
    img: yesdone,
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://yesanddone.com/',
  },
  {
    title: 'Intelligent Exam Preparation',
    details: 'AI based exam preparation assistance by generating fruitful schedule and subjects importance. ',
    img: examai,
    tech: ['Python', 'Inference Engine', 'Working Memory', 'Rued-Based', 'Streamlit'],
    live: 'https://projectaiexam-nulqpg53edw8ahsypaj3nq.streamlit.app/',
  },
  {
    title: 'Clear Care Billing Solution',
    details: 'Clear Care Billing Solutions is one of the few Billing Companies that provides complete Medical Billing Services.',
    img: ccbs,
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    live: 'https://project-ccbs.vercel.app/',
  },
];

const education = [
  { title: 'B.Sc. Computer Science', details: 'Bahaudin Zakariya University of Multan • 2022-2026' },
  { title: 'FSC Pre-Medical', details: 'Kips College of Multan ,2019-2021 ' },
];

/* ---------- Flip Card (pure CSS) ---------- */
const FlipCard = ({ front, back, className = '' }) => (
  <div className={`group relative w-full h-56 [perspective:1000px] ${className}`}>
    <div className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1E1E1E] border border-[#374151] rounded-2xl p-4 [backface-visibility:hidden]">
        {front}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1E1E1E] border border-emerald-500 rounded-2xl p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        {back}
      </div>
    </div>
  </div>
);

/* ---------- Hero grid ---------- */
const TechGrid = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <svg className="w-full h-full blur-[60px] opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
      <rect width="100%" height="100%" fill="url(#grid)" />
      <defs>
        <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#6EE7B7" strokeWidth="0.5" />
        </pattern>
      </defs>
    </svg>
  </div>
);

/* ---------- Main ---------- */
const Home = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    };
    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener('click', smoothScroll)
    );
    return () =>
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener('click', smoothScroll)
      );
  }, []);

  return (
    <main className="bg-[#121212] text-[#E5E7EB] font-sans antialiased">
      {/* Hero */}
      <section id="about" className="relative pt-16 min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20">
        <TechGrid />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center z-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight font-serif tracking-tight">
              Muhammad Irfan
              <span className="block text-xl sm:text-2xl font-light bg-gradient-to-r from-emerald-400 to-sky-400 text-transparent bg-clip-text mt-2">
                Full-Stack Developer & UI/UX Designer
              </span>
            </h1>
            <p className="text-[#9CA3AF] mt-4 text-base sm:text-lg">
              I design and build high-performance, scalable web applications tailored to business needs. With over 2 years of experience delivering production-ready solutions using React, Node.js, and cloud-native technologies, I help companies streamline workflows and power enterprise-grade platforms.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex gap-4 mt-6">
                <a 
                  href={links.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Github />
                </a>
                <a 
                  href={links.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn" 
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="Muhammad Irfan"
              loading="eager"
              fetchpriority="high"
              className="w-60 sm:w-64 md:w-72 rounded-full object-cover border-4 border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 mb-8 text-center font-serif tracking-tight">
            Core Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {topSkills.map((s, index) => (
              <div key={index} className="bg-[#1E1E1E] border border-[#374151] rounded-xl p-5 flex flex-col items-center text-center hover:border-emerald-500 transition">
                <span className="text-emerald-400 mb-2">{s.icon}</span>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/skills" className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-400 px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-500 hover:text-gray-900 transition-all duration-300">
              View All Skills <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 mb-8 text-center font-serif tracking-tight">
            Selected Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, index) => (
              <FlipCard
                key={index}
                front={
                  <>
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-36 object-cover rounded-t-2xl" />
                    <span className="text-emerald-400 mt-2 font-semibold">{p.title}</span>
                  </>
                }
                back={
                  <>
                    <p className="text-sm text-gray-300 mb-2">{p.details}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {p.tech.map((t, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                    <a href={p.live} className="text-xs text-emerald-400 underline">Live demo</a>
                  </>
                }
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-400 px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-500 hover:text-gray-900 transition-all duration-300">
              Explore All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 mb-8 text-center font-serif tracking-tight">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((e, index) => (
              <FlipCard
                key={index}
                front={<span className="font-bold text-gray-100">{e.title}</span>}
                back={<p className="text-sm text-gray-300">{e.details}</p>}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/education" className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-400 px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-500 hover:text-gray-900 transition-all duration-300">
              See More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">Ready to scale your platform?</h2>
          <p className="text-gray-400 mt-2 mb-6">Let's do it. go to confirmation page and fill your details.</p>
          <Link to="/ContactConfirmation" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-gray-900 px-6 py-3 rounded-lg font-semibold">
            Get started
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;