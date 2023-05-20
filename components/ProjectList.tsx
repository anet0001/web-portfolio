import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import { gsap } from "gsap";
import { GenericComponent } from "@/types";
import { projects } from "@/data/projects";

const ProjectList: FC<GenericComponent> = ({ showLoader }) => {
  const scope = useRef<HTMLDivElement | null>(null);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    if (showLoader) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from([".project-list .heading", ".project-list ul li"], {
        autoAlpha: 0,
        y: 50,
        stagger: 0.07,
        delay: 0.3,
      });
    }, scope);

    return () => ctx.revert();
  }, [showLoader]);

  return (
    <div className="project-list" ref={scope}>
      <span className="heading">Projects:</span>
      <ul>
        {projects.map(({ name, link }, index) => {
          return (
            <li
              key={index}
              onMouseEnter={() => setHoveredProject(index + 1)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link target="_blank" rel="noreferrer" href={link}>
                {name}
              </Link>
              <span
                className="info-toggle"
                onClick={() => setHoveredProject(index + 1)}
              >
                +
              </span>
            </li>
          );
        })}
      </ul>
      <ProjectDescription hoveredProject={hoveredProject} />
    </div>
  );
};

export default ProjectList;
