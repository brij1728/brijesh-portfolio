import {
  GitHubIcon,
  IconLink,
  LinkedInIcon,
  SocialMediaContainer,
  TwitterIcon,
} from "./style";

interface ContactProps {
  githubUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
}

export const SocialMediaLink: React.FC<ContactProps> = ({
  githubUrl,
  twitterUrl,
  linkedinUrl,
}) => {
  return (
    <SocialMediaContainer>
      <IconLink href={githubUrl} target="_blank">
        <GitHubIcon
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
        />
      </IconLink>
      <IconLink href={twitterUrl} target="_blank">
        <TwitterIcon
          src="https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
          alt="Twitter"
        />
      </IconLink>
      <IconLink href={linkedinUrl} target="_blank">
        <LinkedInIcon
          src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
          alt="LinkedIn"
        />
      </IconLink>
    </SocialMediaContainer>
  );
};
