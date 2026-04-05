"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portfolioData } from "@/lib/data";

const Projects = () => {
  const projects = portfolioData.projects;
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <section id="projects" className="section-shell py-20">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker">Selected Work</span>
            <h2 className="mt-4 text-[32px] font-black text-white sm:text-[44px] md:text-[56px]">
              Image-first project highlights with the stack that matters.
            </h2>
          </div>
          <p className="max-w-2xl text-[16px] leading-8 text-slate-300">
            I refined this section to keep the visuals front and center. Each card
            leads with the product image, then shows a concise, stronger tech stack
            instead of long paragraphs.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-card backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 ${
                project.featured ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <button
                type="button"
                className={`relative block w-full overflow-hidden text-left ${
                  project.featured ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    project.featured
                      ? "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 top-4 flex gap-2">
                  {project.featured ? (
                    <span className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950">
                      Featured
                    </span>
                  ) : null}
                  <span className="rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                    Preview
                  </span>
                </div>
              </button>

              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Best Tech Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-sm font-medium text-sky-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    GitHub
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      Live Site
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxIndex > -1}
        close={() => setLightboxIndex(-1)}
        slides={lightboxIndex > -1 ? projects[lightboxIndex].gallery : []}
      />
    </>
  );
};

export default Projects;
