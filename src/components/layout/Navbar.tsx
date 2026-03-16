'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Home', href: '/#intro' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Project', href: '/#projects' },
  // { name: 'Photography', href: '/#photography' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the upper part of the screen
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Get all sections that have IDs mentioned in navLinks
    const sectionIds = navLinks.map(link => link.href.replace('/#', ''));
    const uniqueSectionIds = Array.from(new Set(sectionIds));
    
    uniqueSectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 py-4">
      <nav
        className={cn(
          "flex items-center justify-between px-6 py-3 transition-all duration-300 w-full max-w-7xl"
        )}
      >
        {/* Logo (Left) */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/#intro" className="flex items-center group">
            <Image 
              src="/assets/logo.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="transition-transform group-hover:scale-110 object-contain drop-shadow-lg"
            />
          </Link>
        </div>

        {/* Navigation Links (Right) */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('/#', '');
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl",
                  isActive 
                    ? "bg-[#fd853a] text-white shadow-lg shadow-[#fd853a]/20" 
                    : "text-black/60 hover:text-black hover:bg-black/5"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-black/70 hover:text-black transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('/#', '');
                const isActive = activeSection === sectionId;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300",
                      isActive 
                        ? "bg-[#fd853a] text-white" 
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
