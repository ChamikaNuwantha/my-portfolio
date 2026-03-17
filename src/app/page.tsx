import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Photography from '@/components/sections/Photography';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 w-full pb-20">
      <Intro />
      <About />
      <Experience />
      <Projects />
      {/* <Photography /> */}
      <Contact />
    </div>
  );
}
