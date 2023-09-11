import {
  SkillCardContainer,
  SkillCardList,
  SkillCardListItem,
  SkillCardTitle,
  SkillListItemText,
  StyledCard,
} from "./SkillCardStyles";

import { SkillIcon } from "../SkillIcon";
import { SkillType } from "../../types";

export const SkillCard: React.FC<SkillType> = ({ title, skill }) => {
  return (
    <StyledCard>
      <SkillCardTitle variant="h5">{title}</SkillCardTitle>
      <SkillCardContainer>
        <SkillCardList>
          {skill.map((item) => (
            <SkillCardListItem key={item.name}>
              <SkillIcon iconName={item.icon || "default-icon-class"} />
              <SkillListItemText primary={item.name} />
            </SkillCardListItem>
          ))}
        </SkillCardList>
      </SkillCardContainer>
    </StyledCard>
  );
};
