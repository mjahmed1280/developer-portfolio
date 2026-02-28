import { skills } from '../data';
import { SectionHeading } from './Experience';
import { Code2, Layers, Database, Cloud, Cpu, Wrench } from 'lucide-react';

const categories = {
  'Languages': {
    icon: Code2,
    accent:  'border-l-blue-400 dark:border-l-blue-500',
    label:   'text-blue-600 dark:text-blue-400',
    chip:    'bg-blue-50 dark:bg-blue-900/25 border-blue-100 dark:border-blue-800/40 text-blue-800 dark:text-blue-300',
  },
  'Frameworks & Libraries': {
    icon: Layers,
    accent:  'border-l-emerald-400 dark:border-l-emerald-500',
    label:   'text-emerald-600 dark:text-emerald-400',
    chip:    'bg-emerald-50 dark:bg-emerald-900/25 border-emerald-100 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300',
  },
  'Databases': {
    icon: Database,
    accent:  'border-l-amber-400 dark:border-l-amber-500',
    label:   'text-amber-600 dark:text-amber-400',
    chip:    'bg-amber-50 dark:bg-amber-900/25 border-amber-100 dark:border-amber-800/40 text-amber-800 dark:text-amber-300',
  },
  'Cloud & DevOps': {
    icon: Cloud,
    accent:  'border-l-orange-400 dark:border-l-orange-500',
    label:   'text-orange-600 dark:text-orange-400',
    chip:    'bg-orange-50 dark:bg-orange-900/25 border-orange-100 dark:border-orange-800/40 text-orange-800 dark:text-orange-300',
  },
  'AI & ML': {
    icon: Cpu,
    accent:  'border-l-violet-400 dark:border-l-violet-500',
    label:   'text-violet-600 dark:text-violet-400',
    chip:    'bg-violet-50 dark:bg-violet-900/25 border-violet-100 dark:border-violet-800/40 text-violet-800 dark:text-violet-300',
  },
  'Tools & Platforms': {
    icon: Wrench,
    accent:  'border-l-slate-400 dark:border-l-slate-500',
    label:   'text-slate-500 dark:text-slate-400',
    chip:    'bg-slate-100 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600/50 text-slate-700 dark:text-slate-300',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800/40 border-y border-slate-100 dark:border-slate-700/50">
      <div className="max-w-[60rem] mx-auto px-5">
        <SectionHeading
          label="Skills"
          title="Technologies & tools"
          sub="Languages, frameworks, cloud platforms, and AI tools I use daily"
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => {
            const cat = categories[group.category] || categories['Tools & Platforms'];
            const Icon = cat.icon;
            return (
              <div
                key={group.category}
                className={`rounded-2xl border border-slate-200 dark:border-slate-700/60
                            bg-white dark:bg-slate-800/80
                            border-l-[3px] ${cat.accent}
                            p-5 hover:shadow-md dark:hover:shadow-black/20
                            transition-shadow duration-200`}
              >
                {/* Category header */}
                <div className="flex items-center gap-1.5 mb-4">
                  <Icon size={13} className={cat.label} strokeWidth={2.2} />
                  <p className={`text-[11px] font-bold uppercase tracking-widest ${cat.label}`}>
                    {group.category}
                  </p>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-[11px] font-medium px-2.5 py-[3px] rounded-lg border ${cat.chip}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
