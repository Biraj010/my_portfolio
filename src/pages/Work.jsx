import React from "react";
import { portfolioData } from "../data";

const Work = () => {
  const { experiences, education, certifications } = portfolioData.work;

  return (
    <section id="work" className="py-20 max-w-7xl mx-auto px-6">
      <div className="mb-10">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Where I’ve worked
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Experience.
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={`${exp.title}-${exp.company}-${exp.start}`}
            className="bg-tertiary rounded-2xl shadow-card border border-white-100/10"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-white text-[22px] font-bold">{exp.title}</h3>
                  <p className="text-secondary mt-1">
                    <span className="text-white-100 font-semibold">{exp.company}</span>
                    <span className="text-secondary"> · {exp.location}</span>
                  </p>
                </div>
                <p className="text-secondary text-[14px] md:text-[15px] whitespace-nowrap">
                  {exp.start} — {exp.end}
                </p>
              </div>

              <ul className="mt-5 space-y-2 list-disc list-inside text-secondary leading-[28px]">
                {exp.highlights.map((item) => (
                  <li key={item} className="text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>

              {exp.tools && exp.tools.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white-100/10">
                  <p className="text-secondary text-[13px] uppercase tracking-wider mb-3">Tools & Technologies</p>
                  <div className="flex flex-wrap gap-3">
                    {exp.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-2 bg-black-200/50 px-3 py-2 rounded-lg hover:bg-black-200/80 transition-colors"
                        title={tool.name}
                      >
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-white-100 text-[13px]">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-tertiary rounded-2xl shadow-card border border-white-100/10 p-8">
          <h3 className="text-white text-[22px] font-bold">Education</h3>
          <p className="text-secondary mt-3">
            <span className="text-white-100 font-semibold">{education.degree}</span>
          </p>
          <p className="text-secondary mt-1">
            {education.school} · {education.location}
          </p>
          <p className="text-secondary mt-2 text-[14px]">
            {education.start} — {education.end}
          </p>
        </div>

        <div className="bg-tertiary rounded-2xl shadow-card border border-white-100/10 p-8">
          <h3 className="text-white text-[22px] font-bold">Certifications</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside text-secondary leading-[28px]">
            {certifications.map((c) => (
              <li key={c} className="text-[15px]">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;

