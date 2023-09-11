import { Box, CardActions, CardContent, Link } from "@mui/material";
import {
  StyledDescription,
  StyledGithubLink,
  StyledTitle,
} from "./ProjectCardStyles";

import { FaGithub } from "react-icons/fa";
import { ProjectType } from "../../types";
import { StyledCard } from "../SkillCard/SkillCardStyles";

export const ProjectCard: React.FC<ProjectType> = (props) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTitle variant="h5">
          <Link href={props.projectUrl} underline="none" target="_blank">
            {props.title}
          </Link>
        </StyledTitle>

        <StyledDescription variant="body2">
          {props.description}
        </StyledDescription>
      </CardContent>
      <CardActions>
        <Box flexGrow={1}></Box>
        <StyledGithubLink
          href={props.githubUrl}
          underline="none"
          target="_blank"
        >
          <FaGithub size={25} />
        </StyledGithubLink>
      </CardActions>
    </StyledCard>
  );
};
