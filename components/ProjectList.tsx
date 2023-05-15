import Link from "next/link";
import React, { FC, useState } from "react";
import ProjectShowcase from "./ProjectShowcase";

interface PLProps {}

const ProjectList: FC<PLProps> = () => {
  const projects = [
    { name: "Nonso Anetoh", link: "/" },
    { name: "Rexvirgo Media", link: "" },
    { name: "Jasmine College", link: "" },
    { name: "Shop Rebellis", link: "" },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="project-list">
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
