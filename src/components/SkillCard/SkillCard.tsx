import { CardContent, ListItemText } from "@mui/material";
import {
  SkillCardList,
  SkillCardListItem,
  SkillCardTitle,
  StyledCard,
} from "./SkillCardStyles";

import { SkillIcon } from "../SkillIcon";
import { SkillType } from "../../types";

export const SkillCard: React.FC<SkillType> = ({ title, skill }) => {
  return (
    <StyledCard>
      <CardContent>
        <SkillCardTitle variant="h5">{title}</SkillCardTitle>

        <SkillCardList>
          {skill.map((item) => (
            <SkillCardListItem key={item.name}>
              <SkillIcon iconName={item.icon || "default-icon-class"} />
              <ListItemText primary={item.name} />
            </SkillCardListItem>
          ))}
        </SkillCardList>
      </CardContent>
    </StyledCard>
  );
};
