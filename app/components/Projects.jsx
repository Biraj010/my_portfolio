"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { portfolioData } from "@/lib/data";

const Lightbox = dynamic(() => import("./LightboxWrapper"), { ssr: false });

const Projects = () => {
  const projects = portfolioData.projects;
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const unique = new Set(projects.map((p) => p.tag).filter(Boolean));
    return ["All", ...Array.from(unique)];
  }, [projects]);

  const filteredProjects = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((p) => p.tag === activeTag),
    [activeTag, projects]
  );

  // Map filtered project index -> real index (for lightbox)
  const realIndexFor = (filteredIdx) => {
    const project = filteredProjects[filteredIdx];
    return projects.findIndex((p) => p.title === project.title);
  };

  return (
    <>
      <section id="projects" className="section-shell py-24">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">Selected Work</span>
            <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[54px]">
              Featured{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-300">
              Production apps, freelance builds, and personal experiments —
              spanning commerce, CMS platforms, Web3, and SaaS.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((t) => {
              const isActive = activeTag === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setActiveTag(t)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${
                    isActive
                      ? "border-emerald-400 bg-emerald-500/20 text-emerald-100"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                  suppressHydrationWarning
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, filteredIdx) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
                project.featured ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <button
                type="button"
                className={`relative block w-full overflow-hidden text-left ${
                  project.featured ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
                onClick={() => setLightboxIndex(realIndexFor(filteredIdx))}
                suppressHydrationWarning
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.stack.slice(0, 3).join(", ")} project by Biraj Regmi`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    project.featured
                      ? "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {project.featured ? (
                    <span className="rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950 shadow-lg">
                      <i className="bx bxs-star mr-1" />
                      Featured
                    </span>
                  ) : null}
                  {project.tag ? (
                    <span className="rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                      {project.tag}
                    </span>
                  ) : null}
                </div>

                <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur opacity-0 transition-opacity group-hover:opacity-100">
                  <i className="bx bx-zoom-in mr-1" />
                  Preview
                </div>
              </button>

              <div className="space-y-4 p-5 sm:p-6">
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Tech Stack
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs font-medium text-sky-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      <i className="bx bxl-github text-base" />
                      GitHub
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_25px_-10px_rgba(37,99,235,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.9)]"
                    >
                      <i className="bx bx-link-external text-base" />
                      Live Site
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(realIndexFor(filteredIdx))}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-transparent px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:text-white"
                    suppressHydrationWarning
                  >
                    <i className="bx bx-image text-base" />
                    Gallery
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="panel-surface mt-10 rounded-3xl p-10 text-center">
            <p className="text-slate-300">No projects in this category yet.</p>
          </div>
        ) : null}
      </section>

      {lightboxIndex > -1 && (
        <Lightbox
          open
          close={() => setLightboxIndex(-1)}
          slides={projects[lightboxIndex].gallery}
        />
      )}
    </>
  );
};

export default Projects;
