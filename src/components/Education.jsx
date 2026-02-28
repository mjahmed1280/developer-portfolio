import { GraduationCap, Award, ExternalLink, Trophy } from 'lucide-react';
import { education, certifications, achievements } from '../data';
import { SectionHeading } from './Experience';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-[60rem] mx-auto px-5">
        <SectionHeading
          label="Education & Credentials"
          title="Background & certifications"
          sub="Academic foundation, Coursera certifications, and notable achievements"
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {/* Education */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <GraduationCap size={14} /> Education
              </p>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.degree} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-sm transition-all">
                    <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{edu.degree}</p>
                    <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-0.5">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>{edu.location}</span>
                      <span>{edu.period}</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                <Trophy size={14} /> Achievements
              </p>
              <div className="space-y-3">
                {achievements.map((a) => (
                  <div key={a.title} className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-4">
                    <Award size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{a.title}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{a.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Certs */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4">
              <Award size={14} /> Certifications
            </p>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">{cert.name}</p>
                      <div className="flex flex-wrap gap-2 mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <span>{cert.provider}</span>
                        <span className="text-slate-300 dark:text-slate-600">·</span>
                        <span className="font-medium text-slate-600 dark:text-slate-400">{cert.date}</span>
                      </div>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-700 shrink-0 transition-colors bg-blue-50 border border-blue-200 px-2 py-1 rounded-lg"
                      >
                        <ExternalLink size={11} />
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
