import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import ProjectDescription from "./ProjectDescription";
import { gsap } from "gsap";

interface PLProps {
  showLoader: boolean;
}

interface Project {
  name: string;
  link: string;
  context: string;
}

const ProjectList: FC<PLProps> = ({ showLoader }) => {
  const scope = useRef(null);
  const projects: Project[] = [
    { name: "Nonso Anetoh", link: "/", context: "" },
    {
      name: "Rexvirgo Media",
      link: "https://www.rexvirgomedia.com/en",
      context: "",
    },
    {
      name: "Jasmine College",
      link: "https://www.jasminecollege.sch.ng/",
      context: "",
    },
    {
      name: "Shop Rebellis",
      link: "https://dan.com/buy-domain/shoprebellis.com?redirected=true",
      context: "",
    },
  ];

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
            </li>
          );
        })}
      </ul>
      <ProjectDescription hoveredProject={hoveredProject} />
    </div>
  );
};

export default ProjectList;
