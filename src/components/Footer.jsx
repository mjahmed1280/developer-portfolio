import { personal } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f1117]">
      <div className="max-w-[60rem] mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500">
        <span>© {year} {personal.name} · Gurugram, India</span>
        <span>Built with React & Tailwind CSS</span>
      </div>
    </footer>
  );
}
