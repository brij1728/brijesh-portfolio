import {
  CSSIcon,
  ContextAPIIcon,
  FigmaIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  MUIIcon,
  ReactIcon,
  ReactNativeIcon,
  ReduxIcon,
  StyledComponentsIcon,
  TypeScriptIcon,
} from "../../assets";

type SkillIconProps = {
  iconName: string;
};

export const SkillIcon: React.FC<SkillIconProps> = ({ iconName }) => {
  return <div>{getIcon(iconName)}</div>;
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "typescript-plain":
      return (
        <img src={TypeScriptIcon} alt="typescript" style={{ width: "50px" }} />
      );
    case "javascript-plain":
      return (
        <img src={JavaScriptIcon} alt="javascript" style={{ width: "50px" }} />
      );
    case "html5-plain":
      return <img src={HTMLIcon} alt="html" style={{ width: "50px" }} />;
    case "css3-plain":
      return <img src={CSSIcon} alt="css" style={{ width: "50px" }} />;
    case "react-original":
      return <img src={ReactIcon} alt="react" style={{ width: "50px" }} />;
    case "reactnative-plain":
      return (
        <img
          src={ReactNativeIcon}
          alt="reactnative"
          style={{ width: "50px" }}
        />
      );
    case "materialui-plain":
      return <img src={MUIIcon} alt="materialui" style={{ width: "50px" }} />;
    case "styledcomponents-plain":
      return (
        <img
          src={StyledComponentsIcon}
          alt="styledcomponents"
          style={{ width: "50px" }}
        />
      );
    case "contextapi-original":
      return (
        <img src={ContextAPIIcon} alt="contextapi" style={{ width: "50px" }} />
      );
    case "redux-original":
      return <img src={ReduxIcon} alt="redux" style={{ width: "50px" }} />;
    case "github-original":
      return <img src={GitHubIcon} alt="github" style={{ width: "50px" }} />;
    case "git-plain":
      return <img src={GitIcon} alt="git" style={{ width: "50px" }} />;

    case "figma-plain":
      return <img src={FigmaIcon} alt="figma" style={{ width: "50px" }} />;

    default:
      return (
        <img src={TypeScriptIcon} alt="typescript" style={{ width: "50px" }} />
      );
  }
};
