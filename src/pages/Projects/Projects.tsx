import {
  ProjectContainer,
  ProjectHeading,
  ProjectListContainer,
} from "./ProjectStyles";

import { ProjectCard } from "../../components";
import { projects } from "../../utils";

export const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectHeading>Projects</ProjectHeading>
      <ProjectListContainer>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              projectUrl={project.projectUrl}
            />
          );
        })}
      </ProjectListContainer>
    </ProjectContainer>
  );
};
