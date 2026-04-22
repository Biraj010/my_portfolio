"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { portfolioData } from "@/lib/data";
import { Link } from "react-scroll";

const Hero = () => {
  const { name, role, location, titles, description, badges, stats } =
    portfolioData.hero;
  const { personalInfo } = portfolioData.about;
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: titles,
      typeSpeed: 42,
      backSpeed: 24,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, [titles]);

  return (
    <section
      id="home"
      className="section-shell relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="grid w-full items-center gap-14 pt-10 lg:grid-cols-[1.25fr_0.75fr]">
        {/* LEFT — Text + badges + CTAs + stats */}
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="section-kicker">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Work
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300">
              <i className="bx bx-map text-sky-300" />
              {location}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-[42px] font-black leading-[1.02] text-white sm:text-[56px] lg:text-[74px]">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {name}
            </span>
            .
          </h1>

          <div className="mt-4 text-lg font-semibold text-sky-300 sm:text-2xl">
            <span className="text-slate-400">I&apos;m a </span>
            <span className="text-white">{role}</span>
          </div>

          <div className="mt-3 min-h-[30px] text-base text-slate-300 sm:text-lg">
            <span ref={typedElement} />
          </div>

          <p className="mt-6 max-w-2xl text-[15.5px] leading-8 text-slate-300 sm:text-[17px]">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_40px_-10px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_45px_-8px_rgba(37,99,235,0.9)]"
            >
              View My Work
              <i className="bx bx-right-arrow-alt text-lg transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              <i className="bx bx-envelope text-lg" />
              Let&apos;s Connect
            </Link>
            <a
              href="/Biraj_Regmi_Resume.pdf"
              download="Biraj_Regmi_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:text-white"
            >
              <i className="bx bx-download text-lg" />
              Download CV
            </a>
          </div>

          {/* Socials row */}
          <div className="mt-8 flex items-center gap-4 text-2xl text-slate-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <i className="bx bxl-github" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-sky-300"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin-square" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="transition-colors hover:text-emerald-300"
              aria-label="Email"
            >
              <i className="bx bx-envelope" />
            </a>
            <a
              href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#25D366]"
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="panel-surface rounded-2xl p-4 transition-all hover:border-sky-400/30 hover:bg-white/[0.06]"
              >
                <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Portrait card */}
        <div className="relative">
          <div className="relative mx-auto max-w-[480px]">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-sky-500/25 via-transparent to-emerald-500/20 blur-2xl" />
            <div className="panel-surface relative overflow-hidden rounded-[32px] p-4 sm:p-5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-transparent to-emerald-500/10" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70">
                <Image
                  src="/assets/img/myphoto.jpg"
                  alt={name}
                  width={640}
                  height={720}
                  priority
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    Open to full-time & freelance
                  </div>
                </div>
              </div>

              {/* Currently working */}
              <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[20px] border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Currently
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-white">
                    MERN Full Stack @ EasyPR
                  </p>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Stack
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-white">
                    Next.js · Node · Prisma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
