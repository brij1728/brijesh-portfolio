import { Box, CardActions } from "@mui/material";
import {
  StyledCardContent,
  StyledDescription,
  StyledGithubLink,
  StyledTitle,
  StyledTitleLink,
} from "./ProjectCardStyles";

import { FaGithub } from "react-icons/fa";
import { ProjectType } from "../../types";
import { StyledCard } from "../SkillCard/SkillCardStyles";

export const ProjectCard: React.FC<ProjectType> = (props) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTitle variant="h5">
          <StyledTitleLink
            href={props.projectUrl}
            underline="none"
            target="_blank"
          >
            {props.title}
          </StyledTitleLink>
        </StyledTitle>

        <StyledDescription variant="body2">
          {props.description}
        </StyledDescription>
      </StyledCardContent>
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
