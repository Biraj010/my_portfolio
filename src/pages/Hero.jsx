import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { portfolioData } from "../data";
import { Link } from "react-scroll";

const Hero = () => {
  const { name, titles, description } = portfolioData.hero;
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: titles,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, [titles]);

  return (
    <section
      id="home"
      className="relative w-full h-screen mx-auto flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-[#915EFF]">{name}</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            <span ref={typedElement}></span>
          </p>
          <p className="text-secondary font-medium lg:text-[18px] sm:text-[16px] text-[14px] mt-4 max-w-lg">
            {description}
          </p>
          <div className="mt-7">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="bg-[#915EFF] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#804dee] transition-all cursor-pointer inline-block"
              spy={true}
              activeClass="text-accent"
              hash={true}
            >
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
