import { About, Contact, Skills, Works } from "../../pages";
import { useEffect, useRef } from "react";

import { Container } from "./style";
import { Header } from "../../layouts";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();

  const worksRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/works":
        worksRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <>
      <Container>
        <Header />
      </Container>
      <div ref={worksRef}>
        <Works />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};
