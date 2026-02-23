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
      <section id="projects" className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            My work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] shadow-card group"
            >
              <div
                className="relative w-full h-[230px] cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, "_blank");
                    }}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <i className="bx bxl-github text-white text-2xl"></i>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {project.title}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <p
                    key={tech}
                    className={`text-[14px] ${i % 3 === 0
                        ? "blue-text-gradient"
                        : i % 3 === 1
                          ? "green-text-gradient"
                          : "pink-text-gradient"
                      }`}
                  >
                    #{tech}
                  </p>
                ))}
              </div>
            </div>
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
