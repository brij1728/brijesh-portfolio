import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "../../utils/constants";

import { SocialMediaLink } from "../SocialMediaLink";
import { SocialMediaList } from "./SocialMediaLinksStyles";

export const SocialMediaLinks = () => {
  return (
    <SocialMediaList>
      <li>
        <SocialMediaLink icon={<AiFillLinkedin />} href={LINKEDIN_URL} />
      </li>
      <li>
        <SocialMediaLink icon={<AiFillGithub />} href={GITHUB_URL} />
      </li>
      <li>
        <SocialMediaLink icon={<AiFillTwitterCircle />} href={TWITTER_URL} />
      </li>
    </SocialMediaList>
  );
};
