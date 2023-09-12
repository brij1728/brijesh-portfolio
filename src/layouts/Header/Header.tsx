import {
  Container,
  HeaderImage,
  HeaderText,
  HeaderWrapper,
} from "./HeaderStyles";

import { ProfilePhoto } from "../../assets";
import { Resume } from "../../pages";

export const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderText>Hi, I'm Brijesh a Front End Developer in India</HeaderText>
        <Resume />
      </HeaderWrapper>
      <HeaderImage src={ProfilePhoto} alt="hero" />
    </Container>
  );
};
