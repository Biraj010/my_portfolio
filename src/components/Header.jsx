import React, { useState } from "react";
import { Link } from "react-scroll";
import { portfolioData } from "../data";

const Header = () => {
  const { navLinks } = portfolioData.header;
  const { name, titles } = portfolioData.hero;
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="home"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {name} &nbsp;
            <span className="sm:block hidden"> | {titles?.[0] ?? "Full-Stack Web Developer"}</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.text}
              className={`text-secondary hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
            >
              <Link
                to={link.href.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-white"
                hash={true}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <i
            className={`bx ${isMobileMenuOpen ? "bx-x" : "bx-menu"
              } text-[28px] object-contain cursor-pointer text-white`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          ></i>

          <div
            className={`${!isMobileMenuOpen ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.text}
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white transition-colors`}
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
                    hash={true}
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
