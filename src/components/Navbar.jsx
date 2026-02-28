import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#education',  label: 'Education'  },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return true;
  });

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* dark mode */
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navBg = scrolled
    ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-slate-200 dark:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
    : 'bg-white/75 dark:bg-slate-900/75 backdrop-blur-lg border-slate-200/70 dark:border-slate-700/70 shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.2)]';

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[52rem]">
        <nav className={`flex items-center justify-between gap-2 px-3 h-12 rounded-2xl border transition-all duration-200 ${navBg}`}>

          {/* Logo */}
          <a href="/" className="shrink-0 select-none" aria-label="Home">
            <span className="text-[1.05rem] font-bold tracking-tighter font-mono leading-none">
              <span className="text-blue-400">{'<'}</span>
              <span className="text-slate-800 dark:text-slate-100">/</span>
              <span className="text-blue-400">{'>'}</span>
            </span>
          </a>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map(l => {
              const isActive = activeSection === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={e => go(e, l.href)}
                    className={`relative text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-150 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Smooth pill toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="relative flex items-center w-[52px] h-[26px] rounded-full border transition-colors duration-300 ease-in-out focus:outline-none
                         bg-slate-200 border-slate-300 dark:bg-slate-700 dark:border-slate-600"
            >
              {/* sliding knob */}
              <span
                className={`absolute top-[3px] w-[20px] h-[20px] rounded-full flex items-center justify-center
                            bg-white dark:bg-slate-900 shadow-sm
                            transition-all duration-300 ease-in-out
                            ${dark ? 'left-[28px]' : 'left-[3px]'}`}
              >
                {dark
                  ? <Moon size={11} className="text-blue-400" />
                  : <Sun  size={11} className="text-amber-500" />}
              </span>
              {/* background icons */}
              <Sun  size={10} className="absolute left-[5px]  text-amber-400 transition-opacity duration-300 opacity-0 dark:opacity-100" />
              <Moon size={10} className="absolute right-[5px] text-blue-400  transition-opacity duration-300 opacity-100 dark:opacity-0" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl px-3 py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map(l => {
                const isActive = activeSection === l.href.slice(1);
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={e => go(e, l.href)}
                      className={`block text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
