import { Container, HeaderImage, HeaderText } from "./style";

import { ProfilePhoto } from "../../assets";

export const Header = () => {
  return (
    <Container>
      <HeaderText>Hi, I'm Brijesh a Front End Developer in India</HeaderText>
      <HeaderImage src={ProfilePhoto} alt="hero" />
    </Container>
  );
};
