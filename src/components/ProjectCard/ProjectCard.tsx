import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

import { FaGithub } from "react-icons/fa";
import { ProjectType } from "../../types";

export const ProjectCard: React.FC<ProjectType> = (props) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 300, md: "40%", lg: "30%" },
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1, alignContent: "center" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: 2, textAlign: "start" }}
        >
          <Link href={props.projectUrl} underline="none" target="_blank">
            {props.title}
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ textAlign: "start" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box flexGrow={1}></Box>
        <Link href={props.githubUrl} underline="none" target="_blank">
          <FaGithub size={25} />
        </Link>
      </CardActions>
    </Card>
  );
};
