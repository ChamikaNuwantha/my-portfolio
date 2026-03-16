'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Parking Layout Design',
    description: 'A hybrid parking layout generation module combining Conditional GAN–based parameter generation with a rule-based engine to create adaptive, regulation-compliant designs.',
    tech: ['Python', 'AI/ML', 'cGAN', 'Rule-based Engine'],
    github: 'https://github.com/ChamikaNuwantha',
  },
  {
    title: 'Smart Study Table',
    description: 'A microcontroller-based system with real-time monitoring and feedback. Programmed RTC and load cell modules in C with full hardware and firmware integration.',
    tech: ['C', 'Atmega32', 'Proteus', 'IoT'],
    github: 'https://github.com/ChamikaNuwantha',
  },
  {
    title: 'DOA Cost of Cultivation System',
    description: 'Agricultural Data Management Platform. Developed key modules for cost calculation, crop management, and role-based profiles using a full-stack architecture.',
    tech: ['Next.js', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com/ChamikaNuwantha',
  },
  {
    title: 'Project Management System',
    description: 'Role-Based Web Application featuring an examiner dashboard. Built and integrated RESTful APIs with Ballerina for smooth communication.',
    tech: ['React.js', 'Ballerina', 'MySQL', 'AWS'],
    github: 'https://github.com/ChamikaNuwantha',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl md:text-2xl">03.</span>
            Some Things I&apos;ve Built
            <div className="h-[1px] bg-muted flex-grow ml-4 max-w-xs" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-muted/20 border border-border hover:border-primary/50 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {/* External links removed for now */}
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                {project.tech.map(tech => (
                  <li key={tech} className="text-xs font-mono text-muted-foreground/80">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
