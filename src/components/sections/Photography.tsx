'use client';

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const photos = [
  { id: 1, color: 'from-blue-500/20 to-purple-500/20', delay: 0 },
  { id: 2, color: 'from-emerald-500/20 to-teal-500/20', delay: 0.1 },
  { id: 3, color: 'from-orange-500/20 to-red-500/20', delay: 0.2 },
  { id: 4, color: 'from-pink-500/20 to-rose-500/20', delay: 0.3 },
  { id: 5, color: 'from-indigo-500/20 to-blue-500/20', delay: 0.4 },
  { id: 6, color: 'from-yellow-500/20 to-orange-500/20', delay: 0.5 },
];

export default function Photography() {
  return (
    <section id="photography" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl md:text-2xl">04.</span>
          Through The Lens
          <div className="h-[1px] bg-muted flex-grow ml-4 max-w-xs" />
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
          When I'm not writing code, I love exploring the world through photography. 
          Here's a curated collection of some of my favorite shots.
        </p>
      </motion.div>

      {/* Masonry-style Grid Placeholder for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: photo.delay }}
            className={`relative aspect-[4/5] rounded-xl overflow-hidden group bg-gradient-to-br ${photo.color}`}
          >
            {/* 
              Replace the background gradient with an actual image: 
              <Image src="/photos/camera-shot.jpg" fill alt="Photography" className="object-cover..." />
            */}
            
            <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm bg-background/30 cursor-pointer">
              <Camera className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
         <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-mono text-sm uppercase hover:bg-primary/10 transition-colors rounded">
            View Instagram
         </a>
      </div>
    </section>
  );
}
