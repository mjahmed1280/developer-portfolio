import { useState } from 'react';
import { MapPin, Calendar, Briefcase, ChevronDown } from 'lucide-react';
import { experiences } from '../data';

function ExperienceCard({ exp, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-5 group">
      {/* Timeline */}
      <div className="flex flex-col items-center pt-1.5 shrink-0 w-5">
        <div className={`w-3 h-3 rounded-full border-2 shrink-0 transition-colors ${
          exp.current ? 'bg-blue-600 border-blue-600' : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 group-hover:border-blue-400'
        }`} />
        {!isLast && <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2" />}
      </div>

      {/* Card */}
      <div className="flex-1 mb-8">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all">

          {/* Always-visible header — clickable */}
          <button
            onClick={() => setOpen(o => !o)}
            className="w-full text-left px-5 py-4"
            aria-expanded={open}
          >
            <div className="flex items-start gap-3">
              {/* Org logo */}
              <div className="shrink-0 w-30 h-20 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 overflow-hidden flex items-center justify-center mt-0.5">
                {exp.logo
                  ? <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  : <span className="text-[11px] font-bold text-slate-400">{exp.company.slice(0, 2).toUpperCase()}</span>
                }
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug">{exp.title}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {exp.current && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                    <ChevronDown
                      size={15}
                      className={`text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Briefcase size={11} className="text-blue-500 shrink-0" />
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-xs">{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                  <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                </div>
              </div>
            </div>
          </button>

          {/* Collapsible bullets */}
          {open && (
            <div className="px-5 pb-4 border-t border-slate-100 dark:border-slate-700 pt-3">
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="text-blue-400 font-bold mt-0.5 shrink-0">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-10 bg-slate-50 dark:bg-slate-800/40 border-y border-slate-100 dark:border-slate-700/50">
      <div className="max-w-[60rem] mx-auto px-5">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
        />
        <div className="mt-10">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ label, title, sub }) {
  return (
    <div>
      <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">{label}</p>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
      {sub && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-lg">{sub}</p>}
    </div>
  );
}
