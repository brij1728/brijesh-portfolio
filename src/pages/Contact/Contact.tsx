import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from "../../constants";

import { ContactContainer } from "./style";
import { SocialMediaLink } from "../../components";

export const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <SocialMediaLink
        githubUrl={GITHUB_URL}
        twitterUrl={TWITTER_URL}
        linkedinUrl={LINKEDIN_URL}
      />
    </ContactContainer>
  );
};
