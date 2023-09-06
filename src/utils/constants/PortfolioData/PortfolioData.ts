import { ProjectType, SkillType } from "../../../types";

export const projects: ProjectType[] = [
  {
    title: "Responsive UI App",
    description:
      "Responsive app built with React.js, enhanced by TypeScript for type-safety, and styled-components for dynamic, encapsulated styling. Optimized for a seamless user experience across devices.",
    githubUrl: "https://github.com/brij1728/responsive-ui",
    projectUrl: "https://responsive.brijesh.app/",
  },
  {
    title: "Portfolio App",
    description:
      "Portfolio app crafted with React.js, powered by TypeScript, styled-components for tailored aesthetics, and MUI for cohesive, modern UI components. Showcasing professional work seamlessly.",
    githubUrl: "https://github.com/brij1728/brijesh-portfolio",
    projectUrl: "https://brijesh.app/",
  },
  {
    title: "Meal Crafter App",
    description:
      "Meal Crafter: An app built with React Native and TypeScript, offering intuitive meal planning and recipe management for a streamlined culinary experience.",
    projectUrl: "",
  },
];

export const skills: SkillType[] = [
  {
    title: "Languages",
    skill: [
      {
        name: "TypeScript",
        icon: "typescript-plain",
        level: 90,
      },
      {
        name: "JavaScript",
        icon: "javascript-plain",
        level: 80,
      },
      {
        name: "HTML",
        icon: "html5-plain",
        level: 90,
      },
      {
        name: "CSS",
        icon: "css3-plain",
        level: 90,
      },
    ],
  },
  {
    title: "Frontend",
    skill: [
      {
        name: "React.js",
        icon: "react-original",
        level: 90,
      },
      {
        name: "React Native",
        icon: "reactnative-plain",
        level: 80,
      },
      {
        name: "MUI",
        icon: "materialui-plain",
        level: 90,
      },
      {
        name: "Styled Components",
        icon: "styledcomponents-plain",
        level: 90,
      },
      {
        name: "Context API",
        icon: "contextapi-original",
        level: 90,
      },
      {
        name: "Redux",
        icon: "redux-original",
        level: 80,
      },
    ],
  },
  {
    title: "Others",
    skill: [
      {
        name: "Github",
        icon: "github-original",
        level: 90,
      },
      {
        name: "Git",
        icon: "git-plain",
        level: 90,
      },
      {
        name: "Figma",
        icon: "figma-plain",
        level: 90,
      },
    ],
  },
];
