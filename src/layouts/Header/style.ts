import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 20px;

  background-color: ${({ theme }) => theme.secondaryColors.secondaryBackground};

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      flex-flow: column wrap;
    }
  `}
`;

export const HeaderText = styled.h1`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.secondaryColors.secondaryText};
  margin: 0;
  overflow-wrap: break-word;

  font-size: ${({ theme }) => theme.fontSizes.h1.lg}px;

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.h1.sm}px;
    }

    // for screens larger than 576px and smaller than 768px
    @media only screen and (min-width: ${theme.breakpoints
        .md}) and (max-width: ${theme.breakpoints.lg}) {
      font-size: ${theme.fontSizes.h1.md}px;
    }
  `}
`;

export const HeaderImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 0;
  padding: 16px;

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      max-width: 250px;
    }

    // for screens larger than 576px and smaller than 768px
    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      max-width: 300px;
    }

    // for screens larger than 768px and smaller than 992px
    @media only screen and (min-width: ${theme.breakpoints
        .md}) and (max-width: ${theme.breakpoints.lg}) {
      max-width: 350px;
    }

    // for screens larger than 992px and smaller than 1200px
    @media only screen and (min-width: ${theme.breakpoints
        .lg}) and (max-width: ${theme.breakpoints.xl}) {
      max-width: 400px;
    }
  `}
`;
