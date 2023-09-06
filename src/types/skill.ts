export type SkillType = {
  title: string;
  skill: SkillList[];
};

export type SkillList = {
  name: string;
  icon?: string;
  level?: number;
};
