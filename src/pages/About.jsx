import React from "react";
import myphoto from "../assets/img/myphoto.jpg";
import { portfolioData } from "../data";

const About = () => {
  const { paragraph, personalInfo } = portfolioData.about;

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-6">
      <div className="mb-10">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3">
          <div className="w-full green-pink-gradient p-[1px] rounded-full shadow-card">
            <img
              src={myphoto}
              alt={portfolioData.hero.name}
              className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover bg-tertiary"
            />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            {paragraph}
          </p>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-white-100 font-bold">Email</span>
              <span className="text-secondary">{personalInfo.email}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white-100 font-bold">Phone</span>
              <span className="text-secondary">{personalInfo.phone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white-100 font-bold">Location</span>
              <span className="text-secondary">{personalInfo.address}</span>
            </div>
            {personalInfo.linkedin ? (
              <div className="flex flex-col">
                <span className="text-white-100 font-bold">LinkedIn</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white transition-colors"
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
