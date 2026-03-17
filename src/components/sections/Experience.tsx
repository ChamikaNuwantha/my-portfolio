'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { cn } from '../layout/Navbar';

const experiences = [
  {
    company: 'Software Lifecycle Consultants',
    title: 'Intern Software Engineer',
    date: 'March 2024 - August 2024',
    duties: [
      'Developed full stack web applications using Next.js, Node.js, and MongoDB as part of team-based projects.',
      'Integrated Redux for state management in React-based components to enhance performance and maintainability.',
      'Collaborated with cross-functional teams in an Agile environment to deliver project milestones on time.',
      'Gained hands-on experience with .NET technologies through minor contributions and team discussions.',
      'Improved debugging and problem solving skills while working on real world scenarios.'
    ],
  },
  {
    company: 'Gavesha Labs',
    title: 'Trainee Explorer',
    date: 'January 2023 - July 2023',
    duties: [
      'Contributed to hardware and prototype development tasks, gaining hands-on experience relevant to IoT systems.',
      'Involved in educational content creation with a strong focus on integrating software with hardware components.',
      'Designed digital schematics and technical illustrations to support IoT based learning modules.',
      'Provided technical support to Gavesha platform users, helping them resolve learning and platform-related issues.',
      'Collaborated with cross-functional teams to align software features with educational goals.'
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl md:text-2xl">02.</span>
            Where I&apos;ve Worked
            <div className="h-[1px] bg-muted flex-grow ml-4 max-w-xs" />
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* ... existing content ... */}
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible hide-scrollbar relative z-10 w-full md:w-64">
            {experiences.map((exp, idx) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  'px-5 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 text-sm font-mono whitespace-nowrap transition-all duration-300',
                  activeTab === idx
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-border text-muted-foreground hover:text-foreground hover:bg-muted/50'
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {experiences[activeTab].title}{' '}
                  <span className="text-primary">@ {experiences[activeTab].company}</span>
                </h3>
                
                <p className="text-sm font-mono text-muted-foreground mb-6">
                  {experiences[activeTab].date}
                </p>

                <ul className="space-y-4">
                  {experiences[activeTab].duties.map((duty, i) => (
                    <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed shadow-sm">
                      <span className="text-primary mt-1">▹</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
