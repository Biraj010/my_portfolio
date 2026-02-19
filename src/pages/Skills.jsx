import React, { useMemo, useState } from "react";
import { portfolioData } from "../data";

const Skills = () => {
  const skillsByCategory = portfolioData.skills;

  const allSkills = useMemo(
    () =>
      Object.entries(skillsByCategory).flatMap(([category, items]) =>
        items.map((skill) => ({
          name: skill.name,
          icon: skill.icon,
          category,
        }))
      ),
    [skillsByCategory]
  );

  const categories = useMemo(
    () => ["All", ...Object.keys(skillsByCategory)],
    [skillsByCategory]
  );

  const [activeCategory, setActiveCategory] = useState("All");

  const visibleSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6">
      <div className="mb-10">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I know
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills.
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors ${
                isActive
                  ? "bg-[#915EFF] border-[#915EFF] text-white"
                  : "bg-tertiary border-white-100/10 text-secondary hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleSkills.map((skill) => (
          <div
            key={`${skill.name}-${skill.category}`}
            className="bg-tertiary p-6 rounded-2xl shadow-card border border-white-100/10 flex flex-col justify-between hover:border-[#915EFF] hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-black-200 flex items-center justify-center p-2">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="text-white text-[18px] font-semibold">
                  {skill.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
