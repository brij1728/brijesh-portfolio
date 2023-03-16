import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;


}
html {
  /* background: ${({ theme }) => theme.primaryColors.primaryBackground}; */
  scroll-behavior: smooth;

}

body {
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.primaryColors.primaryBackground};
  
}
`;
