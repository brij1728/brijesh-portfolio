import { Contact, Projects, Skills } from "../../pages";
import { Container, SectionWrapper } from "./style";
import { useEffect, useRef } from "react";

import { Header } from "../../layouts";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();

  const projectRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/projects":
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "/about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "/skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "/contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [location]);
  return (
    <Container>
      <Header />
      <SectionWrapper ref={projectRef}>
        <Projects />
      </SectionWrapper>
      {/* <SectionWrapper ref={aboutRef}>
        <About />
      </SectionWrapper> */}
      <SectionWrapper ref={skillsRef}>
        <Skills />
      </SectionWrapper>
      <SectionWrapper ref={contactRef}>
        <Contact />
      </SectionWrapper>
    </Container>
  );
};
