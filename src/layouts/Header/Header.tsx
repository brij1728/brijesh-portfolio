import { Container, HeaderImage, HeaderText } from "./style";

import { ProfilePhoto } from "../../assets";

export const Header = () => {
  return (
    <Container>
      <HeaderText>
        Hi, I'm Brijesh A Front End Developer Based In Ballia (U.P.)
      </HeaderText>
      <HeaderImage src={ProfilePhoto} alt="hero" />
    </Container>
  );
};
