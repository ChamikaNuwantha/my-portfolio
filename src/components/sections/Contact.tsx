'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-primary mb-4 block uppercase tracking-widest flex items-center justify-center gap-2">
             <span className="text-primary font-mono text-sm">05.</span>
             What&apos;s Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h3>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 text-left bg-muted/10 p-8 rounded-2xl border border-border bg-black/20 backdrop-blur-xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submission handled here!');
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="Chamika Nuwantha"
                className="w-full bg-background border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="john@example.com"
                className="w-full bg-background border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
            <textarea 
              id="message"
              rows={5}
              placeholder="How can I help you?"
              className="w-full bg-background border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3.5 rounded-lg flex justify-center items-center gap-2 transition-colors shadow-lg shadow-primary/20 group"
          >
             <span>Send Message</span>
             <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
