import { Container } from "./style";
import { ProjectCard } from "../../components";
import { projects } from "../../utils";

export const Projects = () => {
  return (
    <Container>
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
    </Container>
  );
};
