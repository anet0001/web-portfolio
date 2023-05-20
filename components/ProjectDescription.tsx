import React, { FC } from "react";
import { ProjectDescriptionComponent } from "@/types";
import { projects } from "@/data/projects";

const ProjectDescription: FC<ProjectDescriptionComponent> = ({
  hoveredProject,
}) => {
  return (
    <article className="project-info">
      <div className="inner">
        <span className="description">
          {hoveredProject ? projects[hoveredProject - 1]?.description : null}
        </span>
      </div>
    </article>
  );
};

export default ProjectDescription;
