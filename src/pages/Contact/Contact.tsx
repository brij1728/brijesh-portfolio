import {
  ContactButton,
  ContactContainer,
  MainBackground,
  MainTextContainer,
  TitleContainer,
} from "./ContactStyles";

// import AnimateInView from "../Animation";
// Contact.tsx
import React from "react";
import { SocialMediaLinks } from "../../components";

export const Contact = () => {
  return (
    <ContactContainer id="contact">
      <MainBackground>
        <MainTextContainer>
          <TitleContainer>
            <h1>Contact</h1>
            {/* <AnimateInView> */}
            <div>
              <p>
                If you like my work,
                <br /> why not contact me for your next project?
              </p>
              <p>You can find me on social media or send me a message here!</p>
            </div>
            {/* </AnimateInView> */}
          </TitleContainer>
        </MainTextContainer>
        <SocialMediaLinks />
        <ContactButton>
          <a href="mailto:bk10895@gmail.com">Contact Me</a>
        </ContactButton>
      </MainBackground>
    </ContactContainer>
  );
};
