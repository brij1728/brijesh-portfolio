import { SkillList, SkillTitle, SkillsContainer } from "./SkillsStyles";

import { SkillCard } from "../../components";
import { skills } from "../../utils";

export const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <SkillTitle>Skills</SkillTitle>
      <SkillList>
        {skills.map((item) => {
          return (
            <SkillCard key={item.title} title={item.title} skill={item.skill} />
          );
        })}
      </SkillList>
    </SkillsContainer>
  );
};
