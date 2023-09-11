import {
  ContactContainer,
  MainBackground,
  MainTextContainer,
  SubtitleContainer,
  TextContainer,
  TitleContainer,
} from "./ContactStyles";

import { SocialMediaCard } from "../../components";
import { socialMedia } from "../../utils";

export const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <TitleContainer>Contact</TitleContainer>
      <MainBackground>
        <MainTextContainer>
          <SubtitleContainer>Let's Collaborate</SubtitleContainer>
          <TextContainer>
            Connect with me on social media or drop me a line directly from
            here. Let's bring your ideas to life!
          </TextContainer>
        </MainTextContainer>

        <SocialMediaCard items={socialMedia} />
      </MainBackground>
    </ContactContainer>
  );
};
