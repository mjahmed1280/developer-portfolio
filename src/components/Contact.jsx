import { Mail, Github, Linkedin } from 'lucide-react';
import { personal } from '../data';
import { SectionHeading } from './Experience';

const links = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    desc: 'Best for project inquiries',
    color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    label: 'GitHub',
    value: 'mjahmed1280',
    href: personal.github,
    icon: Github,
    desc: 'Source code & open source',
    color: 'bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white',
  },
  {
    label: 'LinkedIn',
    value: 'jakaria-ahmed08',
    href: personal.linkedin,
    icon: Linkedin,
    desc: 'Professional network',
    color: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-700/50">
      <div className="max-w-[60rem] mx-auto px-5">
        <div className="max-w-xl">
          <SectionHeading
            label="Contact"
            title="Let's work together"
            sub="I'm open to new opportunities, interesting projects, or just a chat about technology."
          />

          <div className="mt-8 space-y-3">
            {links.map(({ label, value, href, icon: Icon, desc, color }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${color}`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{value}</p>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-500 hidden sm:block shrink-0">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
