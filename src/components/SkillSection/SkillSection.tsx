import {
  SectionContainer,
  SectionTitle,
  SkillsList,
} from "./SkillSectionStyles";

import { SkillItem } from "../SkillItem";

interface SectionProps {
  title: string;
  skills: Array<{ icon: JSX.Element; label: string; favorite?: boolean }>;
}

export const SkillSection: React.FC<SectionProps> = ({ title, skills }) => (
  <SectionContainer>
    <SectionTitle>{title}</SectionTitle>
    <SkillsList>
      {skills.map((skill, idx) => (
        <SkillItem key={idx} {...skill} />
      ))}
    </SkillsList>
  </SectionContainer>
);
