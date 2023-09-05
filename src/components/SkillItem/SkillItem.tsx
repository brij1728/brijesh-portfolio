import { SkillContainer, SkillIcon, SkillLabel } from "./SkillItemStyles";

import { FaHeart } from "react-icons/fa";

interface SkillProps {
  icon: JSX.Element;
  label: string;
  favorite?: boolean;
}

export const SkillItem: React.FC<SkillProps> = ({ icon, label, favorite }) => (
  <SkillContainer>
    <SkillIcon>{icon}</SkillIcon>
    <SkillLabel>
      {favorite ? (
        <>
          <span>
            <FaHeart />
          </span>
          {label}
          <span>
            <FaHeart />
          </span>
        </>
      ) : (
        label
      )}
    </SkillLabel>
  </SkillContainer>
);
