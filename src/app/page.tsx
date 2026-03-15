import Navbar from '@/components/layout/Navbar';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-24 md:gap-32 w-full">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

    </>
  );
}
