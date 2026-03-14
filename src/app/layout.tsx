import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: 'Chamika Nuwantha | Developer & Photographer',
  description: 'Personal portfolio showcasing my software engineering projects and photography.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {children}
        </main>
        <footer className="w-full text-center py-8 text-sm text-muted-foreground/80 font-mono">
          <p>Built by Chamika Nuwantha.</p>
          <p className="mt-2 text-xs opacity-75">
            Designed with Node & Next.js. Deployed on Vercel.
          </p>
        </footer>
      </body>
    </html>
  );
}
