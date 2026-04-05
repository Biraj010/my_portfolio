"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { portfolioData } from "@/lib/data";
import { Link } from "react-scroll";

const Hero = () => {
  const { name, titles, description, badges, stats } = portfolioData.hero;
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
    <section id="home" className="section-shell relative flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="section-kicker">Portfolio 2026</span>
          <h1 className="mt-6 max-w-4xl text-[42px] font-black leading-[1.02] text-white sm:text-[56px] lg:text-[78px]">
            Building clean, scalable products for the modern web.
          </h1>
          <div className="mt-5 text-lg font-semibold text-sky-300 sm:text-2xl">
            <span className="text-slate-400">Hi, I&apos;m </span>
            <span className="text-white">{name}</span>
            <span className="mx-3 hidden text-slate-500 sm:inline">/</span>
            <span ref={typedElement} />
          </div>

          <p className="mt-6 max-w-2xl text-[16px] leading-8 text-slate-300 sm:text-[17px]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex cursor-pointer items-center rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-500"
              spy={true}
              activeClass="text-accent"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="inline-flex cursor-pointer items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              spy={true}
            >
              Let&apos;s Connect
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="panel-surface rounded-3xl p-5">
                <div className="font-display text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="panel-surface relative overflow-hidden rounded-[32px] p-4 sm:p-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/10" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70">
              <Image
                src="/assets/img/myphoto.jpg"
                alt={name}
                width={640}
                height={720}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="relative mt-4 rounded-[24px] border border-white/10 bg-slate-950/80 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Current Focus
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Full-stack products with strong UI, SEO, and deployment quality.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
