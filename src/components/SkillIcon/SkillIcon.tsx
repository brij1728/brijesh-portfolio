import { icons } from "../../utils";

type SkillIconProps = {
  iconName: string;
};

type IconNames = keyof typeof icons;

export const SkillIcon: React.FC<SkillIconProps> = ({ iconName }) => {
  const Icon = icons[iconName as IconNames] || icons["typescript-plain"];
  return <img src={Icon} alt={iconName} style={{ width: "50px" }} />;
};
