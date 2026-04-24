import Image from "next/image";
import { portfolioData } from "@/lib/data";

const About = () => {
  const { paragraph, personalInfo, highlights, services } = portfolioData.about;

  return (
    <section id="about" className="section-shell py-24">
      <div className="mb-12 text-center lg:text-left">
        <span className="section-kicker">About Me</span>
        <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[54px]">
          Professional Summary —{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Product-minded Full Stack Developer
          </span>
        </h2>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT — Photo + highlights + personal info table */}
        <div className="panel-surface rounded-[32px] p-6 lg:sticky lg:top-24">
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-emerald-500 opacity-70 blur-md" />
            <Image
              src="/assets/img/biraj-regmi-full-stack-developer.jpg"
              alt={`${portfolioData.hero.name} — Full Stack MERN Developer from Kathmandu, Nepal`}
              className="relative mx-auto h-48 w-48 rounded-full border-4 border-slate-950 bg-tertiary object-cover md:h-56 md:w-56"
              width={224}
              height={224}
              priority
            />
          </div>
          <div className="mt-6 text-center">
            <h3 className="font-display text-2xl font-bold text-white">
              {portfolioData.hero.name}
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {portfolioData.hero.role} · {portfolioData.hero.location}
            </p>
          </div>

          <div className="mt-6 space-y-2.5">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
              >
                <i className="bx bx-check-circle mt-0.5 text-emerald-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Personal Info Table */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-white/10">
                <tr className="bg-white/[0.03]">
                  <th className="w-1/3 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </th>
                  <td className="px-4 py-3 text-white break-all">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-sky-300"
                    >
                      {personalInfo.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </th>
                  <td className="px-4 py-3 text-white">
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                      className="hover:text-emerald-300"
                    >
                      {personalInfo.phone}
                    </a>
                  </td>
                </tr>
                <tr className="bg-white/[0.03]">
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location
                  </th>
                  <td className="px-4 py-3 text-white">
                    {personalInfo.address}
                  </td>
                </tr>
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Portfolio
                  </th>
                  <td className="px-4 py-3 text-white break-all">
                    <a
                      href={personalInfo.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-300"
                    >
                      regmibiraj.com.np
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT — Paragraph + services grid */}
        <div>
          <div className="panel-surface rounded-[28px] p-7">
            <p className="whitespace-pre-line text-[15.5px] leading-8 text-slate-300 sm:text-[16.5px]">
              {paragraph}
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-5 flex items-end justify-between">
              <div>
                <span className="section-kicker">What I Do</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  Services I offer
                </h3>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group panel-surface rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <i className={`bx ${service.icon} text-2xl ${service.color}`} />
                    </div>
                    <h4 className="text-[17px] font-bold text-white">
                      {service.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick facts row */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="panel-surface rounded-2xl p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Experience
              </p>
              <p className="mt-1.5 text-xl font-bold text-white">3.5+ Yrs</p>
            </div>
            <div className="panel-surface rounded-2xl p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Projects
              </p>
              <p className="mt-1.5 text-xl font-bold text-white">10+</p>
            </div>
            <div className="panel-surface rounded-2xl p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Clients
              </p>
              <p className="mt-1.5 text-xl font-bold text-white">Happy</p>
            </div>
            <div className="panel-surface rounded-2xl p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Based In
              </p>
              <p className="mt-1.5 text-xl font-bold text-white">Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
