import React, { FC } from "react";
import { ProjectDescriptionComponent } from "@/types";
import { projects } from "@/data/projects";

const ProjectDescription: FC<ProjectDescriptionComponent> = ({
  hoveredProject,
}) => {
  return (
    <div className="project-info">
      <div className="inner">
        <span>
          {hoveredProject ? projects[hoveredProject - 1]?.description : null}
        </span>
      </div>
    </div>
  );
};

export default ProjectDescription;
