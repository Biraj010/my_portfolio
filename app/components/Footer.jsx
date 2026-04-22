"use client";

import { portfolioData } from "@/lib/data";
import { Link } from "react-scroll";

const Footer = () => {
  const { socialLinks } = portfolioData.footer;
  const { personalInfo } = portfolioData.about;
  const { name, role } = portfolioData.hero;
  const { navLinks } = portfolioData.header;
  const whatsappUrl =
    portfolioData.contact?.whatsappUrl ||
    `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`;

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/60">
      <div className="section-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white">
              {name}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{role} · Kathmandu</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Building modern, scalable web products across React, Next.js,
              Node.js, Prisma, and MongoDB. Open to full-time roles and
              freelance builds.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#25D366] transition-all hover:-translate-y-0.5 hover:bg-white/10"
                aria-label="WhatsApp"
              >
                <i className="bx bxl-whatsapp text-xl" />
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.text}>
                  <Link
                    to={l.href.replace("#", "")}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer text-slate-300 transition-colors hover:text-white"
                  >
                    {l.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-2 text-slate-300 transition-colors hover:text-white"
                >
                  <i className="bx bx-envelope mt-0.5 text-sky-300" />
                  <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 text-slate-300 transition-colors hover:text-white"
                >
                  <i className="bx bx-phone mt-0.5 text-emerald-300" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <i className="bx bx-map mt-0.5 text-violet-300" />
                <span>{personalInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500">
            Crafted with Next.js 15 &middot; React 19 &middot; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
