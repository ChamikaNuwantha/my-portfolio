'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendEmail } from '@/app/actions/sendEmail';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setStatus('sending');
    setErrorMessage('');

    try {
      const result = await sendEmail(null, formData);

      if (result.success) {
        setStatus('success');
        formRef.current?.reset();
        // Reset to idle after 5 seconds to allow sending another message
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('A network error occurred');
    }
  }

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form
            ref={formRef}
            action={handleSubmit}
            className="space-y-6 text-left bg-muted/10 p-8 rounded-2xl border border-border bg-black/20 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input 
                  type="text" 
                  name="name"
                  id="name"
                  placeholder="Chamika Nuwantha"
                  className="w-full bg-background border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  required
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  required
                  disabled={status === 'sending' || status === 'success'}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea 
                name="message"
                id="message"
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-background border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                required
                disabled={status === 'sending' || status === 'success'}
              />
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-center gap-2 p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Message sent successfully!</span>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-center gap-2 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">{errorMessage}</span>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3.5 rounded-lg flex justify-center items-center gap-2 transition-all shadow-lg shadow-primary/20 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
               {status === 'sending' ? (
                 <>
                   <Loader2 className="w-5 h-5 animate-spin" />
                   <span>Sending...</span>
                 </>
               ) : (
                 <>
                   <span>Send Message</span>
                   <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </>
               )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
