import { portfolioData } from "@/lib/data";

const Education = () => {
  const { education, certifications } = portfolioData.work;

  return (
    <section id="education" className="section-shell py-24">
      <div className="mb-10 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="section-kicker">Academic & Credentials</span>
          <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[54px]">
            Education &amp;{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-7 text-slate-300">
          Formal education in Information Management with specialized
          certifications in full-stack and MERN development.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Education Card */}
        <div className="panel-surface relative overflow-hidden rounded-[28px] p-7">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-pink-500/5" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-400/30 bg-rose-500/10">
                <i className="bx bxs-graduation text-2xl text-rose-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Education
              </h3>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/[0.04]">
                    <th className="w-1/3 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Degree
                    </th>
                    <td className="px-4 py-3 text-white">{education.degree}</td>
                  </tr>
                  <tr>
                    <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      University
                    </th>
                    <td className="px-4 py-3 text-slate-200">
                      {education.university}
                    </td>
                  </tr>
                  <tr className="bg-white/[0.04]">
                    <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      College
                    </th>
                    <td className="px-4 py-3 text-slate-200">
                      {education.school}
                    </td>
                  </tr>
                  <tr>
                    <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Location
                    </th>
                    <td className="px-4 py-3 text-slate-200">
                      {education.location}
                    </td>
                  </tr>
                  <tr className="bg-white/[0.04]">
                    <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Duration
                    </th>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-0.5 text-xs font-semibold text-rose-200">
                        {education.start} — {education.end}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="panel-surface relative overflow-hidden rounded-[28px] p-7">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/5" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-500/10">
                <i className="bx bxs-certification text-2xl text-amber-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Certifications
              </h3>
            </div>

            <div className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-amber-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-500/10">
                      <i className="bx bxs-badge-check text-xl text-amber-300" />
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-white">
                        {cert.name}
                      </p>
                      <p className="text-[12px] text-slate-400">
                        Completed · Full-Stack Development
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-200">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <p className="font-display text-2xl font-bold text-white">2</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
                  Certifications
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <p className="font-display text-2xl font-bold text-white">1</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
                  Degree
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <p className="font-display text-2xl font-bold text-white">IT</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-400">
                  Major
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
