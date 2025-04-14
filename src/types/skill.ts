import { IconType } from "react-icons";
export type SkillType = {
  title: string;
  skill: SkillList[];
};

export type SkillList = {
  name: string;
  icon: string | IconType;
  level?: number;
};
