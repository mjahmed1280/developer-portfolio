/* ── Flat logo-only tech strip ───────────────────────────────────
   Only shows items that have a verified devicon SVG.
   Items with no official icon (Vertex AI, FastMCP, LangChain…)
   are skipped here — they appear in the Skills section.
──────────────────────────────────────────────────────────────── */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const stack = [
  { name: 'Python',     src: `${DEVICON}/python/python-original.svg`             },
  { name: 'FastAPI',    src: `${DEVICON}/fastapi/fastapi-original.svg`           },
  { name: 'Flask',      src: `${DEVICON}/flask/flask-original.svg`,      di: true },
  { name: 'MongoDB',    src: `${DEVICON}/mongodb/mongodb-original.svg`           },
  { name: 'React',      src: `${DEVICON}/react/react-original.svg`               },
  // { name: 'TS', src: `${DEVICON}/typescript/typescript-original.svg`     },
  { name: 'JS', src: `${DEVICON}/javascript/javascript-original.svg`     },
  { name: 'Streamlit',  src: `${DEVICON}/streamlit/streamlit-original.svg`       },
  { name: 'GCP',        src: `${DEVICON}/googlecloud/googlecloud-original.svg`   },
  { name: 'Docker',     src: `${DEVICON}/docker/docker-original.svg`             },
  { name: 'K8s', src: `${DEVICON}/kubernetes/kubernetes-plain.svg`        },
  { name: 'GitHub',     src: `${DEVICON}/github/github-original.svg`,    di: true },
];

export default function TechStrip() {
  return (
    <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700/50 bg-white dark:bg-[#0f1117]">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.12em] shrink-0">
          Stack
        </span>
        <div className="flex flex-wrap gap-2">
          {stack.map(t => (
            <div
              key={t.name}
              title={t.name}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all cursor-default"
            >
              <img
                src={t.src}
                alt={t.name}
                width={13}
                height={13}
                className={`w-[13px] h-[13px] object-contain${t.di ? ' dark:invert' : ''}`}
                loading="lazy"
              />
              <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
