import React, { FC } from "react";

interface PSProps {
  hoveredProject: number | null;
}

const ProjectShowcase: FC<PSProps> = ({ hoveredProject }) => {
  return (
    <div className="project-showcase">
      {hoveredProject && <div className="inner"></div>}
    </div>
  );
};

export default ProjectShowcase;
