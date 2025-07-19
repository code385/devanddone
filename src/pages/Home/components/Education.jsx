/* Education.jsx */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Award, Briefcase } from 'lucide-react';

/* ---------- Colour tokens (AAA / AA) ---------- */
const colors = {
  bg: '#121212',
  card: '#1E1E1E',
  primary: '#6EE7B7',   // emerald-400
  secondary: '#93C5FD', // sky-300
  textMain: '#E5E7EB',
  textMuted: '#9CA3AF',
};

/* ---------- Real, corrected data ---------- */
const educationData = {
  academic: [
    {
      period: '2022 – 2026',
      degree: 'B.S. Computer Science',
      institution: 'Bahauddin Zakariya University, Multan',
      gpa: '3.70 / 4.00',
      highlights: ['Computer Science', 'Software Engineering', 'Database Systems'],
    },
    {
      period: '2019 – 2021',
      degree: 'F.Sc (Pre-Medical)',
      institution: 'KIPS College, Multan',
      gpa: '93 %',
      highlights: ['Biology', 'Chemistry', 'Physics'],
    },
  ],
  professional: [
    {
      year: '2022',
      title: 'Data Structure & Algorithm',
      body: 'Advanced data structures (AVL, B-Trees, Graphs) & algorithmic paradigms (Divide & Conquer, Dynamic Programming).',
    },
    {
      year: '2022',
      title: 'Design & Analysis of Algorithm',
      body: 'Complexity theory, amortised analysis, approximation & randomised algorithms.',
    },
    {
      year: '2022',
      title: '.NET Desktop App Development',
      body: 'Windows Forms & WPF with C#, EF Core, MVVM pattern and SQL Server integration.',
    },
    {
      year: '2022',
      title: 'Operating System',
      body: 'Process scheduling, memory management, file-systems & virtualisation.',
    },
    {
      year: '2023',
      title: 'Web & App Development',
      body: 'Responsive sites (Next.js, Tailwind) & cross-platform mobile apps (React Native).',
    },
  ],
};

/* ---------- Re-usable 3-D flip card ---------- */
const FlipCard = ({ front, back }) => (
  <motion.div
    className="group relative w-full h-56 [perspective:1000px]"
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
  >
    <motion.div
      className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
    >
      {/* Front */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-[#1E1E1E]/70 backdrop-blur-lg border border-[#6EE7B7]/30 rounded-2xl shadow-[0_0_20px_rgba(110,231,183,0.12)] [backface-visibility:hidden]"
      >
        {front}
      </div>

      {/* Back */}
      <div
        className="absolute inset-0 flex flex-col justify-center bg-[#1E1E1E]/90 backdrop-blur-xl border border-[#93C5FD]/40 rounded-2xl shadow-[0_0_30px_rgba(147,197,253,0.15)] [transform:rotateY(180deg)] [backface-visibility:hidden] p-4"
      >
        {back}
      </div>
    </motion.div>
  </motion.div>
);

/* ---------- Main component ---------- */
export default function Education() {
  const [activeTab, setActiveTab] = useState('academic');

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: colors.bg }}
      className="min-h-screen pt-16 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: colors.textMain }}>
            Education
          </h1>
          <p className="mt-2 text-lg" style={{ color: colors.textMuted }}>
            My academic & professional learning journey
          </p>
        </motion.header>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          {['academic', 'professional'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-6 py-2 mx-2 text-sm sm:text-base font-semibold uppercase tracking-wider rounded-full transition-all"
              style={{
                color: activeTab === tab ? colors.bg : colors.textMain,
                backgroundColor: activeTab === tab ? colors.primary : 'transparent',
              }}
            >
              {tab === 'academic' ? 'Academic Qualifications' : 'Professional Courses'}
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute inset-0 bg-[#6EE7B7] rounded-full -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeTab === 'academic' &&
            educationData.academic.map((item, i) => (
              <FlipCard
                key={i}
                front={
                  <>
                    <Award size={32} style={{ color: colors.primary }} />
                    <h3 className="mt-3 text-lg font-bold" style={{ color: colors.textMain }}>
                      {item.degree}
                    </h3>
                    <p className="text-sm" style={{ color: colors.textMuted }}>
                      {item.period}
                    </p>
                  </>
                }
                back={
                  <>
                    <h4 className="font-bold text-lg mb-1" style={{ color: colors.primary }}>
                      {item.degree}
                    </h4>
                    <p className="text-sm mb-2" style={{ color: colors.textMuted }}>
                      {item.institution} • {item.gpa}
                    </p>
                    <ul className="text-sm list-disc list-inside" style={{ color: colors.textMain }}>
                      {item.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </>
                }
              />
            ))}

          {activeTab === 'professional' &&
            educationData.professional.map((item, i) => (
              <FlipCard
                key={i}
                front={
                  <>
                    <Briefcase size={32} style={{ color: colors.secondary }} />
                    <h3 className="mt-3 text-lg font-bold" style={{ color: colors.textMain }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: colors.textMuted }}>
                      {item.year}
                    </p>
                  </>
                }
                back={
                  <>
                    <h4 className="font-bold text-lg mb-2" style={{ color: colors.secondary }}>
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: colors.textMain }}>
                      {item.body}
                    </p>
                  </>
                }
              />
            ))}
        </motion.div>
      </div>
    </motion.main>
  );
}

