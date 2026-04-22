"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/lib/data";

const Skills = () => {
  const skillsByCategory = portfolioData.skills;
  const categoryKeys = useMemo(
    () => Object.keys(skillsByCategory),
    [skillsByCategory]
  );

  const [view, setView] = useState("table"); // 'table' | 'cards'
  const [activeCategory, setActiveCategory] = useState("All");

  const tabs = useMemo(() => ["All", ...categoryKeys], [categoryKeys]);

  const filteredCategories =
    activeCategory === "All"
      ? categoryKeys
      : categoryKeys.filter((c) => c === activeCategory);

  return (
    <section id="skills" className="section-shell py-24">
      <div className="mb-10 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <span className="section-kicker">Technical Stack</span>
          <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[54px]">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-300">
            A structured view of the technologies I use across frontend,
            backend, databases, and DevOps.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          <button
            type="button"
            onClick={() => setView("table")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              view === "table"
                ? "bg-white text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
            suppressHydrationWarning
          >
            <i className="bx bx-table mr-1" /> Table
          </button>
          <button
            type="button"
            onClick={() => setView("cards")}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              view === "cards"
                ? "bg-white text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
            suppressHydrationWarning
          >
            <i className="bx bx-grid-alt mr-1" /> Cards
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? "border-sky-400 bg-sky-500/20 text-sky-100"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
              }`}
              suppressHydrationWarning
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* TABLE VIEW */}
      {view === "table" && (
        <div className="panel-surface overflow-hidden rounded-[28px]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="w-[22%] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                    Category
                  </th>
                  <th className="px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                    Technologies
                  </th>
                  <th className="w-[10%] px-5 py-4 text-right text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                    Count
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredCategories.map((category) => {
                  const group = skillsByCategory[category];
                  const items = group.items;
                  return (
                    <tr
                      key={category}
                      className="transition-colors hover:bg-white/[0.03]"
                    >
                      <td className="align-top px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-gradient-to-br ${group.accent} ${group.border}`}
                          >
                            <i className={`bx ${group.icon} text-xl ${group.text}`} />
                          </div>
                          <div>
                            <p className={`text-[15px] font-bold ${group.text}`}>
                              {category}
                            </p>
                            <p className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-500">
                              Stack
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="align-top px-5 py-5">
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <div
                              key={`${category}-${skill.name}`}
                              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-slate-200 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                            >
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={18}
                                height={18}
                                className="h-[18px] w-[18px] object-contain"
                              />
                              <span>{skill.name}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="align-top px-5 py-5 text-right">
                        <span className="inline-flex min-w-[36px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-white">
                          {items.length}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CARDS VIEW */}
      {view === "cards" && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCategories.map((category) => {
            const group = skillsByCategory[category];
            return (
              <div
                key={category}
                className="panel-surface group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.accent} opacity-60`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-slate-950/60 ${group.border}`}
                    >
                      <i className={`bx ${group.icon} text-2xl ${group.text}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${group.text}`}>
                        {category}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        {group.items.length} Technologies
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {group.items.map((skill) => (
                      <div
                        key={`${category}-card-${skill.name}`}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-[12.5px] text-slate-200"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={18}
                          height={18}
                          className="h-[18px] w-[18px] object-contain"
                        />
                        <span className="truncate">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Skills;
