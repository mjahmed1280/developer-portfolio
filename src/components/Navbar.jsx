import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#education',  label: 'Education'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

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
          <a href="/" className="text-xs font-bold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-2.5 py-1 rounded-lg shrink-0 select-none hover:bg-slate-700 dark:hover:bg-white transition-colors">JA</a>

          <ul className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => go(e, l.href)}
                  className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 shrink-0">
            <button onClick={() => setDark(!dark)}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme">
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="mailto:mjahmed1280@gmail.com"
              className="hidden md:inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-white transition-colors">
              Hire me
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-lg rounded-2xl px-3 py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => go(e, l.href)}
                    className="block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 pt-2 border-t border-slate-100 dark:border-slate-700">
                <a href="mailto:mjahmed1280@gmail.com"
                  className="block text-sm font-semibold text-center px-3 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
