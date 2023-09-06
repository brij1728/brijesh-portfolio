import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      flex-flow: column wrap;
    }

    // for screens larger than 576px and smaller than 768px
    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
    }

    // for screens larger than 768px and smaller than 992px
    @media only screen and (min-width: ${theme.breakpoints
        .md}) and (max-width: ${theme.breakpoints.lg}) {
      flex-flow: row wrap;
    }

    // for screens larger than 992px and smaller than 1200px
    @media only screen and (min-width: ${theme.breakpoints
        .lg}) and (max-width: ${theme.breakpoints.xl}) {
      flex-flow: row wrap;
      gap: 40px;
    }

    // for screens larger than 1200px
    @media only screen and (min-width: ${theme.breakpoints.xl}) {
      flex-flow: row wrap;
      margin: 20px;
      gap: 80px;
    }
  `}
`;

export const ProjectHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3.lg};
  font-weight: 400;
`;
