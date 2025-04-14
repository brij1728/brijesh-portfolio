import { IconType } from "react-icons";
import { Image } from "./SkillIconStyles";
import { icons } from "../../utils";

type SkillIconProps = {
  iconName: string | IconType;
};

type IconNames = keyof typeof icons;


export const SkillIcon: React.FC<SkillIconProps> = ({ iconName }) => {
  if (typeof iconName === "function") {
    const IconComponent = iconName;
    return <IconComponent size={32} />;
  }

  const IconSrc = icons[iconName as IconNames] || icons["typescript-plain"];
  return <Image src={IconSrc} alt={iconName} style={{ width: "50px" }} />;
};
