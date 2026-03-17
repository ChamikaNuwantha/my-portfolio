'use client';

import { motion } from 'framer-motion';
import { Palette, Code2, Database, Laptop } from 'lucide-react';

const skills = [
  { name: 'Frontend', items: ['ReactJS', 'NextJS', 'JavaScript', 'HTML/CSS'] },
  { name: 'Backend', items: ['Node.js', 'Java', 'Python', 'C'] },
  { name: 'Database', items: ['MySQL', 'MongoDB', 'AWS'] },
  { name: 'Tools', items: ['Git/Github', 'Jira', 'Docker'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl md:text-2xl">01.</span>
            About Me
            <div className="h-[1px] bg-muted flex-grow ml-4 max-w-xs" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ... existing content ... */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Hello! My name is Chamika. I am a highly motivated, enthusiastic, and energetic graduate 
              with a BSc. (Hons) in Information Technology from the University of Moratuwa.
            </p>
            <p>
              I am skilled at balancing independent and collaborative work, with a strong ability
              to take initiative and deliver results effectively. My technical journey has involved 
              developing full-stack web applications, integrating IoT systems with hardware, and 
              creating AI-powered models.
            </p>
            <p>
              Beyond coding, I have a passion for leadership and media, having served as the President of 
              FITMoments (Media Unit, Faculty of IT) and leading photography teams for university events.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="bg-muted/30 border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden group"
          >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-primary" />
                  Technical Arsenal
              </h3>

              <div className="grid grid-cols-2 gap-8 relative z-10">
                 {skills.map((category, idx) => (
                   <div key={idx}>
                     <h4 className="font-mono text-primary text-sm mb-3 uppercase tracking-wider">{category.name}</h4>
                     <ul className="space-y-2">
                       {category.items.map((item, i) => (
                         <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground before:content-['▹'] before:text-primary before:text-xs">
                            {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
