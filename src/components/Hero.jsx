import { Mail, Github, Linkedin, BadgeCheck, MapPin } from 'lucide-react';
import { personal } from '../data';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-14 px-6 bg-gradient-to-b from-indigo-50/60 to-white dark:from-indigo-950/20 dark:to-transparent border-b border-slate-200/70 dark:border-slate-700/50">
      <div className="flex flex-col sm:flex-row items-start gap-8">

        {/* ── LEFT — Main content ────────────────── */}
        <div className="flex-1 min-w-0 pt-1">

          {/* Available pill */}
          {/* <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span> */}

          {/* Name */}
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-[2.2rem] sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
              {personal.name}
            </h1>
            <BadgeCheck size={22} className="text-blue-500 shrink-0" strokeWidth={2.2} />
          </div>

          {/* Role */}
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2.5">Software Developer</p>

          {/* Specialty chips */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            {['Full Stack Development', 'Cloud & DevOps', 'AI Engineering'].map(r => (
              <span
                key={r}
                className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full"
              >
                {r}
              </span>
            ))}
          </div>

          {/* Bio */}
          <div className="text-[0.9rem] leading-relaxed mb-7 space-y-2 max-w-[560px]">
            <p className="font-semibold text-slate-500 dark:text-slate-200">
              Building scalable &amp; cloud-native software solutions with 2 yrs of experience.
            </p>
            <p className="text-slate-500 dark:text-slate-500 font-normal">
              Currently exploring the Modern GenAI stack -{' '}
              <span className="text-slate-600 dark:text-slate-400">Agentic AI</span>,{' '}
              <span className="text-slate-600 dark:text-slate-400">RAG</span> and{' '}
              <span className="text-slate-600 dark:text-slate-400">MCP</span>
            </p>
          </div>

          {/* CTAs — equal size, fluid hover */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="mailto:mjahmed1280@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold
                         transition-all duration-200 ease-out
                         hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)]
                         active:translate-y-0 active:scale-[0.97]"
            >
              <Mail size={14} strokeWidth={2.5} />
              Get in touch
            </a>
            <a
              href={personal.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold bg-white dark:bg-slate-800
                         transition-all duration-200 ease-out
                         hover:-translate-y-0.5 hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-[0_6px_20px_rgba(14,165,233,0.2)] hover:text-sky-700 dark:hover:text-sky-400
                         active:translate-y-0 active:scale-[0.97]"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold bg-white dark:bg-slate-800
                         transition-all duration-200 ease-out
                         hover:-translate-y-0.5 hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)]
                         active:translate-y-0 active:scale-[0.97]"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
        </div>

        {/* ── RIGHT — Minimal avatar card ──────────── */}
        <div className="shrink-0 sm:pt-2">
          <div className="w-36 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">
         
            <div className="w-full overflow-hidden bg-slate-100 dark:bg-slate-700" style={{ aspectRatio: '3/4' }}>
              <img
                src="/avatar-lego.png"
                alt="Jakaria Ahmed"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="px-3 py-2 border-t border-slate-100 dark:border-slate-700 flex items-center gap-1.5">
              <MapPin size={11} className="text-blue-500 shrink-0" />
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">Gurugram, IN</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
