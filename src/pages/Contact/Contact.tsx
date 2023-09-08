import {
  ContactContainer,
  MainBackground,
  MainTextContainer,
  SocialMediaContainer,
  TitleContainer,
} from "./ContactStyles";

import { SocialMediaCard } from "../../components";
import { socialMedia } from "../../utils";

export const Contact: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <TitleContainer>Contact</TitleContainer>
      <MainBackground>
        <MainTextContainer>
          <h3>Let's Collaborate</h3>
          <p>
            Connect with me on social media or drop me a line directly from
            here. Let's bring your ideas to life!
          </p>
        </MainTextContainer>

        <SocialMediaContainer>
          <SocialMediaCard items={socialMedia} />
        </SocialMediaContainer>
      </MainBackground>
    </ContactContainer>
  );
};
