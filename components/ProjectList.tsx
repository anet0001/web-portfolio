import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import ProjectShowcase from "./ProjectShowcase";
import { gsap } from "gsap";

interface PLProps {
  showLoader: boolean;
}

const ProjectList: FC<PLProps> = ({ showLoader }) => {
  const scope = useRef(null);
  const projects = [
    { name: "Nonso Anetoh", link: "/" },
    { name: "Rexvirgo Media", link: "" },
    { name: "Jasmine College", link: "" },
    { name: "Shop Rebellis", link: "" },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    if (showLoader) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from(".project-list ul li", {
        autoAlpha: 0,
        y: 50,
        stagger: 0.07,
      });
    }, scope);

    return () => ctx.revert();
  }, [showLoader]);

  return (
    <div className="project-list" ref={scope}>
      <ul>
        {projects.map(({ name, link }, index) => {
          return (
            <li
              key={index}
              onMouseEnter={() => setHoveredProject(index + 1)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link href={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <ProjectShowcase hoveredProject={hoveredProject} />
    </div>
  );
};

export default ProjectList;
