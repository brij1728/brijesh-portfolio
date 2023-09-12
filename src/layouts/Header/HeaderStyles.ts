import styled, { css } from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 16px;

  background-color: ${({ theme }) => theme.secondaryColors.secondaryBackground};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;

  gap: 10px;
`;

export const HeaderText = styled.h1`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.secondaryColors.secondaryText};
  margin: 8px;
  overflow-wrap: break-word;

  font-size: ${({ theme }) => theme.fontSizes.h1.md}px;

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.h2.sm}px;
    }
  `}
`;

export const HeaderImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 10%;
  object-fit: cover;

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
