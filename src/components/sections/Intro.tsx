'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: 'https://github.com/ChamikaNuwantha', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/chamika-nuwantha', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:chamikanuwantha@gmail.com', label: 'Email' },
];

export default function Intro() {
  return (
    <section id="intro" className="min-h-[90vh] flex flex-col justify-center relative pt-20">

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">

        {/* ── Left: Text content ── */}
        <div className="flex-1 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-primary font-mono font-medium tracking-wider uppercase text-sm mb-4 block">
              Hi, my name is
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 text-foreground"
          >
            Chamika Nuwantha.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-muted-foreground mb-6"
          >
            I build digital experiences &amp; capture moments.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground/90 max-w-xl leading-relaxed mb-10"
          >
            I&apos;m an IT Graduate from the University of Moratuwa, specializing in building exceptional
            web applications and IoT systems. When I&apos;m not coding, you&apos;ll find me behind a camera
            lens capturing the world through photography.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="/assets/resume.pdf"
              download="Chamika_Nuwantha_Resume.pdf"
              className="px-8 py-3.5 bg-primary font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              style={{ color: '#ffffff' }}
            >
              Download Resume
            </a>
            <Link
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 border border-border bg-background hover:bg-muted font-medium rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-5 mt-12"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Profile photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex-shrink-0 flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-64 h-72 sm:w-72 sm:h-80">
            {/* Gradient border accent */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-primary/60 via-transparent to-primary/20" />
            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/40 shadow-2xl shadow-black/50">
              <Image
                src="/assets/profile.jpg"
                alt="Chamika Nuwantha"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle scrim at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.div>
    </section>
  );
}
