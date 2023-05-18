import React, { FC } from "react";

interface PDProps {
  hoveredProject: number | null;
}

interface Project {
  name: string;
  link: string;
  context: string;
}

const ProjectDescription: FC<PDProps> = ({ hoveredProject }) => {
  const projects: Project[] = [
    {
      name: "Nonso Anetoh",
      link: "/",
      context:
        "My personal portfolio website built with Next.js, TypeScript, SCSS, Prismic CMS, GSAP,and deployed on Vercel.",
    },
    {
      name: "Rexvirgo Media",
      link: "/",
      context:
        "A website for a turkey-based digital design agency built with Next.js, SCSS, Sanity CMS, GSAP, ,and deployed on Vercel.",
    },
    {
      name: "Jasmine College",
      link: "/",
      context: "A website for a college in Nigeria built with React and SCSS",
    },
    {
      name: "Shop Rebellis",
      link: "/",
      context:
        "An e-commerce website built with React, SCSS, Redux,Firebase, and MongoDB.",
    },
  ];

  return (
    <div className="project-info">
      <div className="inner">
        <span>
          {hoveredProject ? projects[hoveredProject - 1]?.context : null}
        </span>
      </div>
    </div>
  );
};

export default ProjectDescription;
