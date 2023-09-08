import { Image } from "./SocialMediaLinksStyles";
import { Link } from "@mui/material";
import { SocialMediaType } from "../../types";

export const SocialMediaLinks: React.FC<SocialMediaType> = (props) => {
  return (
    <Link href={props.url} underline="none" target="_blank">
      <Image src={props.icon} alt={props.name} width="50px" />
    </Link>
  );
};
