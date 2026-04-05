import Image from "next/image";
import { portfolioData } from "@/lib/data";

const About = () => {
  const { paragraph, personalInfo, highlights } = portfolioData.about;

  return (
    <section id="about" className="section-shell py-20">
      <div className="mb-10">
        <span className="section-kicker">About Me</span>
        <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[56px]">
          Building products with both code quality and product thinking.
        </h2>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="panel-surface rounded-[32px] p-6">
          <div className="green-pink-gradient mx-auto w-fit rounded-full p-[1px] shadow-card">
            <Image
              src="/assets/img/myphoto.jpg"
              alt={portfolioData.hero.name}
              className="mx-auto h-52 w-52 rounded-full bg-tertiary object-cover md:h-64 md:w-64"
              width={256}
              height={256}
              priority
            />
          </div>
          <div className="mt-6 space-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="max-w-3xl text-[16px] leading-8 text-slate-300 sm:text-[17px]">
            {paragraph}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="panel-surface rounded-3xl p-5">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Email
              </span>
              <div className="mt-2 text-white">{personalInfo.email}</div>
            </div>
            <div className="panel-surface rounded-3xl p-5">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Phone
              </span>
              <div className="mt-2 text-white">{personalInfo.phone}</div>
            </div>
            <div className="panel-surface rounded-3xl p-5">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Location
              </span>
              <div className="mt-2 text-white">{personalInfo.address}</div>
            </div>
            {personalInfo.linkedin ? (
              <div className="panel-surface rounded-3xl p-5">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  LinkedIn
                </span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block break-all text-white transition-colors hover:text-sky-300"
                >
                  {personalInfo.linkedin.replace("https://", "")}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
