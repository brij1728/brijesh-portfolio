import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center; // helps with vertical centering when wrapping occurs
  align-items: center;
  gap: 20px;
  padding: 16px;

  background-color: ${({ theme }) => theme.secondaryColors.secondaryBackground};
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

  font-size: ${({ theme }) => theme.fontSizes.h1.lg};

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.h1.sm}px;
    }

    // for screens larger than 576px and smaller than 768px
    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.h1.md}px;
    }
  `}
`;

export const HeaderImage = styled.img`
  max-width: 100px; // control maximum width
  height: auto; // maintain the original image aspect ratio

  border-radius: 10%;
  object-fit: cover; // this ensures the image scales properly within its boundaries

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      max-width: 60px;
    }

    // for screens larger than 576px and smaller than 768px
    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      max-width: 80px;
    }
  `}
`;
