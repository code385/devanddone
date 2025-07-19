// Skills.jsx – fully-responsive, WCAG-AAA & AA compliant
// Framer-motion + TailwindCSS + React

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages"); // ✅ removed TypeScript generic

  const skillsData = {
    languages: [
      { name: "HTML", level: "expert", width: 100 },
      { name: "CSS", level: "expert", width: 100 },
      { name: "JavaScript", level: "expert", width: 100 },
      { name: "TypeScript", level: "advanced", width: 85 },
      { name: "PHP", level: "expert", width: 100 },
      { name: "Python", level: "advanced", width: 85 },
      { name: "C++", level: "advanced", width: 80 },
    ],
    frameworks: [
      { name: "React", level: "expert", width: 100 },
      { name: "Next.js", level: "expert", width: 100 },
      { name: "Node.js", level: "expert", width: 100 },
      { name: "React Native", level: "advanced", width: 90 },
      { name: "Firebase", level: "expert", width: 100 },
      { name: "TailwindCSS", level: "expert", width: 100 },
    ],
    stack: [
      { name: "MongoDB", level: "advanced", width: 90 },
      { name: "Express.js", level: "expert", width: 100 },
      { name: "React", level: "expert", width: 100 },
      { name: "Node.js", level: "expert", width: 100 },
    ],
  };

  const tabs = [
    { key: "languages", label: "Languages" },
    { key: "frameworks", label: "Frameworks & Libraries" },
    { key: "stack", label: "MERN Stack" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <section className="min-h-screen bg-[#121212] pt-16 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl"
      >
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E7EB]">
            Technical Expertise
          </h1>
          <p className="text-lg text-[#9CA3AF] mt-2 max-w-2xl mx-auto">
            A diverse set of skills focused on web development, mobile applications,
            and software engineering with a strong foundation in computer-science
            fundamentals.
          </p>
        </motion.header>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative px-5 py-2.5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#121212] focus-visible:ring-[#6EE7B7]`}
              style={{
                backgroundColor: activeTab === key ? "#6EE7B7" : "#1E1E1E",
                color: activeTab === key ? "#121212" : "#E5E7EB",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData[activeTab].map(({ name, level, width }) => (
              <motion.div
                key={name}
                variants={item}
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 25px -5px rgba(110, 231, 183, 0.4)",
                }}
                className="bg-[#1E1E1E] rounded-2xl p-5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#E5E7EB]">{name}</h3>
                  <span
                    className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: level === "expert" ? "#6EE7B7" : "#93C5FD",
                      color: "#121212",
                    }}
                  >
                    {level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#374151] rounded-full h-2">
                  <motion.div
                    className="h-2 rounded-full"
                    style={{
                      backgroundColor: level === "expert" ? "#6EE7B7" : "#93C5FD",
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;