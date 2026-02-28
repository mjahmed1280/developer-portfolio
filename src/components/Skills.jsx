import { skills } from '../data';
import { SectionHeading } from './Experience';

const categoryColors = {
  'Languages':             'border-blue-200 bg-blue-50',
  'Frameworks & Libraries':'border-green-200 bg-green-50',
  'Databases':             'border-amber-200 bg-amber-50',
  'Cloud & DevOps':        'border-orange-200 bg-orange-50',
  'AI & ML':               'border-violet-200 bg-violet-50',
  'Tools & Platforms':     'border-slate-200 bg-slate-50',
};

const labelColors = {
  'Languages':             'text-blue-700',
  'Frameworks & Libraries':'text-green-700',
  'Databases':             'text-amber-700',
  'Cloud & DevOps':        'text-orange-700',
  'AI & ML':               'text-violet-700',
  'Tools & Platforms':     'text-slate-600',
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
          {skills.map((group) => (
            <div
              key={group.category}
              className={`rounded-2xl border p-5 ${categoryColors[group.category] || 'border-slate-200 bg-white'}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${labelColors[group.category] || 'text-slate-500'}`}>
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-2.5 py-1 rounded-lg shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
