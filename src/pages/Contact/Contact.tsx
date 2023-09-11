import {
  ContactContainer,
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
      <MainTextContainer>
        <TitleContainer>Contact</TitleContainer>
        <SubtitleContainer>Let's Collaborate</SubtitleContainer>
        <TextContainer>
          Connect with me on social media or drop me a line directly from here.
          Let's bring your ideas to life!
        </TextContainer>
      </MainTextContainer>

      <SocialMediaCard items={socialMedia} />
    </ContactContainer>
  );
};
