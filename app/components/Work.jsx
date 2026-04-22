import Image from "next/image";
import { portfolioData } from "@/lib/data";

const typeStyles = {
  "Full-Time":
    "bg-sky-500/15 border-sky-400/30 text-sky-200",
  Freelance:
    "bg-emerald-500/15 border-emerald-400/30 text-emerald-200",
  Internship:
    "bg-violet-500/15 border-violet-400/30 text-violet-200",
};

const Work = () => {
  const { experiences } = portfolioData.work;

  return (
    <section id="work" className="section-shell py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <span className="section-kicker">Career Journey</span>
          <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[54px]">
            Professional{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-7 text-slate-300">
          3.5+ years delivering production software across full-time roles,
          internships, and long-running freelance engagements.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="pointer-events-none absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/40 via-white/10 to-emerald-500/20 lg:left-1/2 lg:-translate-x-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={`${exp.title}-${exp.company}-${exp.start}`}
                className="relative lg:grid lg:grid-cols-2 lg:gap-12"
              >
                {/* Dot */}
                <span className="absolute left-5 top-7 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-slate-950 ring-2 ring-sky-400 lg:left-1/2">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                </span>

                {/* Card */}
                <div
                  className={`ml-12 lg:ml-0 ${
                    isLeft ? "lg:col-start-1 lg:pr-10" : "lg:col-start-2 lg:pl-10"
                  }`}
                >
                  <div className="panel-surface group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-0.5 hover:border-sky-400/30">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sky-500/40 via-emerald-500/30 to-transparent" />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] ${
                              typeStyles[exp.type] ||
                              "bg-white/10 border-white/20 text-slate-200"
                            }`}
                          >
                            {exp.type}
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            {exp.start} — {exp.end}
                          </span>
                        </div>
                        <h3 className="mt-3 text-xl font-bold text-white sm:text-[22px]">
                          {exp.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          <span className="font-semibold text-white/90">
                            {exp.company}
                          </span>
                          <span className="text-slate-500"> · {exp.location}</span>
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-[14.5px] leading-7 text-slate-300"
                        >
                          <i className="bx bx-chevrons-right mt-1.5 text-sky-300" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.tools && exp.tools.length > 0 && (
                      <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Tools & Tech
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.tools.map((tool) => (
                            <div
                              key={tool.name}
                              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[12.5px] text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10"
                              title={tool.name}
                            >
                              <Image
                                src={tool.icon}
                                alt={tool.name}
                                className="h-4 w-4 object-contain"
                                width={16}
                                height={16}
                              />
                              <span>{tool.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
