import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 font-sans antialiased">
      <Navbar />

      <div>
        {/* Center lane — soft shadow blends into gradient gutter, no hard border */}
        <div className="max-w-[60rem] mx-auto bg-white dark:bg-[#0f1117] shadow-[0_0_0_1px_rgba(99,102,241,0.10),0_0_80px_rgba(99,102,241,0.05)] dark:shadow-[0_0_0_1px_rgba(99,102,241,0.15),0_0_80px_rgba(99,102,241,0.08)] min-h-screen">
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
