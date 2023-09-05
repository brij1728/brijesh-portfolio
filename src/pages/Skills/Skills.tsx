import { SiJavascript, SiTypescript } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { SkillSection } from "../../components";
import { SkillsContainer } from "./SkillsStyles";

export const Skills: React.FC = () => {
  const languageSkills = [
    {
      icon: <SiTypescript size="40px" color="#dca0a2" />,
      label: "TypeScript",
      favorite: true,
    },
    { icon: <SiJavascript size="40px" />, label: "JavaScript" },
  ];

  const frontendSkills = [
    {
      icon: <FaReact size="45px" color="#dca0a2" />,
      label: "React",
      favorite: true,
    },
  ];

  // ... other skill sections

  return (
    <SkillsContainer id="skills">
      <h1>Skills</h1>
      <SkillSection title="Languages" skills={languageSkills} />
      <SkillSection title="Front-end" skills={frontendSkills} />
      {/* Other SkillSections */}
    </SkillsContainer>
  );
};

export default Skills;
