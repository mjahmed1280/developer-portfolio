import { useState } from 'react';
import { Github, ExternalLink, Calendar, ChevronDown, ImageIcon } from 'lucide-react';
import { projects } from '../data';
import { SectionHeading } from './Experience';

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const accentColor =
    project.highlight === 'Live'       ? '#2563eb' :
    project.highlight === 'Open Source' ? '#7c3aed' :
    project.highlight === 'Hackathon'  ? '#d97706' : '#64748b';

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 flex flex-col">

      {/* Screenshot / image area */}
      <div className="relative w-full bg-slate-100 dark:bg-slate-700 overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full gap-1.5 text-slate-300 dark:text-slate-600">
            <ImageIcon size={22} strokeWidth={1.5} />
            <span className="text-[10px] font-medium tracking-wide">Screenshot coming soon</span>
          </div>
        )}
        {/* accent strip at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: accentColor }} />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title + badge */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm leading-snug">
            {project.title}
          </h3>
          {project.highlight && (
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 border ${
              project.highlight === 'Live'
                ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                : project.highlight === 'Hackathon'
                ? 'text-amber-700 bg-amber-50 border-amber-200'
                : 'text-violet-700 bg-violet-50 border-violet-200'
            }`}>
              {project.highlight}
            </span>
          )}
        </div>

        {/* Date */}
        <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium mb-3">
          <Calendar size={11} />
          {project.date}
        </div>

        {/* Links — always visible */}
        <div className="flex items-center gap-3 mb-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <Github size={13} />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ExternalLink size={13} />
              Live demo
            </a>
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors mt-auto"
          aria-expanded={open}
        >
          <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          {open ? 'Hide details' : 'Show details'}
        </button>

        {/* Collapsible details */}
        {open && (
          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
            <ul className="space-y-1.5 mb-3">
              {project.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-[60rem] mx-auto px-5">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          sub="From AI chatbots to MCP servers — shipped products and open source"
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
