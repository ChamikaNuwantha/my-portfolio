import Navbar from '@/components/layout/Navbar';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-24 md:gap-32 w-full pt-10">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <footer className="w-full text-center py-8 text-sm text-muted-foreground/80 font-mono">
        <p>Built by Chamika Nuwantha.</p>
        <p className="mt-2 text-xs opacity-75">
          Designed with Node & Next.js. Deployed on Vercel.
        </p>
      </footer>
    </>
  );
}
