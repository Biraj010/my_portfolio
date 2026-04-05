"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { portfolioData } from "@/lib/data";

const Header = () => {
  const { navLinks } = portfolioData.header;
  const { name } = portfolioData.hero;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-30 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:px-6">
        <Link
          to="home"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex flex-col">
            <span className="font-display text-[17px] font-bold text-white sm:text-[18px]">
              {name}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.24em] text-slate-400 sm:block">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        <ul className="hidden list-none flex-row gap-8 sm:flex">
          {navLinks.map((link) => (
            <li
              key={link.text}
              className="cursor-pointer text-[15px] font-medium text-slate-300 transition-colors hover:text-white"
            >
              <Link
                to={link.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-white"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <i
            className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"} cursor-pointer text-[28px] text-white`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          ></i>

          <div
            className={`${
              !isMobileMenuOpen ? "hidden" : "flex"
            } absolute right-0 top-16 z-10 mx-1 min-w-[180px] rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.text}
                  className="cursor-pointer text-[15px] font-medium text-slate-300 transition-colors hover:text-white"
                  onClick={() => {
                    setMobileMenuOpen(!isMobileMenuOpen);
                  }}
                >
                  <Link
                    to={link.href.replace("#", "")}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="text-white"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
