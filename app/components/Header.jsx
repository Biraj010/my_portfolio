"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { portfolioData } from "@/lib/data";

const Header = () => {
  const { navLinks } = portfolioData.header;
  const { name } = portfolioData.hero;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-30 w-full px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-4 py-3 transition-colors sm:px-6 ${
          scrolled
            ? "bg-slate-950/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "bg-slate-950/80 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
        }`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex cursor-pointer items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 font-display text-sm font-black text-white shadow-lg">
            BR
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[16px] font-bold text-white sm:text-[17px]">
              {name}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:block">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex list-none flex-row gap-6">
            {navLinks.map((link) => (
              <li
                key={link.text}
                className="cursor-pointer text-[14px] font-semibold text-slate-300 transition-colors hover:text-white"
              >
                <Link
                  to={link.href.replace("#", "")}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="/Biraj_Regmi_Resume.pdf"
            download="Biraj_Regmi_Resume.pdf"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2 text-xs font-bold text-white shadow-[0_6px_20px_-8px_rgba(37,99,235,0.8)] transition-all hover:-translate-y-0.5"
          >
            <i className="bx bx-download" />
            Download CV
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end lg:hidden">
          <i
            className={`bx ${
              isMobileMenuOpen ? "bx-x" : "bx-menu"
            } cursor-pointer text-[28px] text-white`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          ></i>

          <nav
            aria-label="Mobile navigation"
            className={`${
              !isMobileMenuOpen ? "hidden" : "flex"
            } absolute right-4 top-16 z-10 min-w-[220px] rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl`}
          >
            <ul className="flex w-full list-none flex-col items-start gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.text}
                  className="w-full cursor-pointer rounded-lg px-3 py-2 text-[14px] font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link
                    to={link.href.replace("#", "")}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="block w-full"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a
                  href="/Biraj_Regmi_Resume.pdf"
                  download="Biraj_Regmi_Resume.pdf"
                  className="mt-2 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-xs font-bold text-white"
                >
                  <i className="bx bx-download" />
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
