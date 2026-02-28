import { Mail, Github, Linkedin, BadgeCheck } from 'lucide-react';
import { personal } from '../data';

/* ── Tech stack table ────────────────────────────────────────────── */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// items = devicon logos; chips = text-only styled pills (no official devicon)
const techTable = [
  {
    category: 'Backend',
    items: [
      { name: 'Python',  src: `${DEVICON}/python/python-original.svg`   },
      { name: 'FastAPI', src: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: 'Flask',   src: `${DEVICON}/flask/flask-original.svg`, darkInvert: true },
      { name: 'MongoDB', src: `${DEVICON}/mongodb/mongodb-original.svg` },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React',      src: `${DEVICON}/react/react-original.svg`             },
      { name: 'TypeScript', src: `${DEVICON}/typescript/typescript-original.svg`   },
      { name: 'JavaScript', src: `${DEVICON}/javascript/javascript-original.svg`   },
      { name: 'Streamlit',  src: `${DEVICON}/streamlit/streamlit-original.svg`     },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'GCP',        src: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: 'Docker',     src: `${DEVICON}/docker/docker-original.svg`           },
      { name: 'Kubernetes', src: `${DEVICON}/kubernetes/kubernetes-plain.svg`      },
      { name: 'GitHub',     src: `${DEVICON}/github/github-original.svg`, darkInvert: true },
    ],
  },
  {
    category: 'GenAI',
    chips: [
      { name: 'Vertex AI', color: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-400 dark:border-violet-800/50' },
      { name: 'FastMCP',   color: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-400 dark:border-rose-800/50' },
      { name: 'LangChain', color: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800/50' },
      { name: 'LangGraph', color: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/20 dark:text-teal-400 dark:border-teal-800/50' },
    ],
  },
];

export default function Hero() {
  return (
    /*
      pt-20 = clears the floating nav (top-4 + h-12 + a little gap)
      No min-h-screen centering — content starts near top, feels grounded not floating
    */
    <section className="pt-20 pb-14 px-6">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-10 lg:gap-12">

        {/* ── LEFT ──────────────────────────────────── */}
        <div className="flex-1 min-w-0 pt-2">

          {/* Available pill */}
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span>

          {/* Name */}
          <div className="flex items-start gap-2 mb-1.5">
            <h1 className="text-[2.6rem] sm:text-5xl font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
              {personal.name}
            </h1>
            <BadgeCheck size={24} className="text-blue-500 shrink-0 mt-2.5" strokeWidth={2.2} />
          </div>

          {/* Role */}
          <p className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2.5">Software Developer</p>

          {/* Specialty chips */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
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
          <div className="text-[0.9rem] leading-relaxed mb-8 space-y-2 max-w-[620px]">
            <p className="font-semibold text-slate-700 dark:text-slate-200">
            Building scalable & cloud-native Software solutions with 2 yrs of experience.
            </p>
            <p className="text-slate-400 dark:text-slate-500 font-normal">
              Exploring modern GenAI stack - {' '}
              <span className="text-slate-600 dark:text-slate-400">Agentic AI</span>,{' '}
              <span className="text-slate-600 dark:text-slate-400">RAG</span> and{' '}
              <span className="text-slate-600 dark:text-slate-400">MCP</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="mailto:mjahmed1280@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
            >
              <Mail size={14} strokeWidth={2.5} />
              Get in touch
            </a>
            <a
              href={personal.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          </div>

          {/* ── Primary Stack table ── */}
          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.12em] mb-3">
              Primary Stack
            </p>
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  {techTable.map((row, i) => (
                    <tr
                      key={row.category}
                      className={`border-b border-slate-100 dark:border-slate-700/60 last:border-0 ${
                        i % 2 === 0
                          ? 'bg-white dark:bg-transparent'
                          : 'bg-slate-50/60 dark:bg-slate-800/20'
                      }`}
                    >
                      <td className="px-3 py-2.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 align-top whitespace-nowrap">
                        {row.category}
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex flex-wrap gap-1.5">
                          {row.items?.map(t => (
                            <div
                              key={t.name}
                              className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-default"
                            >
                              <img
                                src={t.src}
                                alt={t.name}
                                width={12}
                                height={12}
                                className={`w-3 h-3 object-contain${t.darkInvert ? ' dark:invert' : ''}`}
                                loading="lazy"
                              />
                              <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                                {t.name}
                              </span>
                            </div>
                          ))}
                          {row.chips?.map(t => (
                            <span
                              key={t.name}
                              className={`inline-flex items-center text-[11px] font-medium px-2 py-1 rounded-md border cursor-default ${t.color}`}
                            >
                              {t.name}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Avatar card ─────────────────── */}
        <div className="shrink-0 w-full max-w-[220px] lg:w-52 lg:pt-0">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800">

            {/* Portrait — 4:5 crop, face-focused */}
            <div className="w-full overflow-hidden bg-slate-100 dark:bg-slate-700" style={{ aspectRatio: '4/5' }}>
              <img
                src="/avatar.jpg"
                alt="Jakaria Ahmed"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Info strip — minimal, 3 lines */}
            <div className="px-4 py-3.5 border-t border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[13px] font-bold text-slate-900 dark:text-slate-100">{personal.name}</span>
                <BadgeCheck size={14} className="text-blue-500 shrink-0" />
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-2.5">Software Engineer</p>

              <div className="flex flex-col gap-1">
                <p className="text-[11px] text-slate-500 dark:text-slate-400">📍 Gurugram, India</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">🏢 WPP Media · 2 yrs</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
