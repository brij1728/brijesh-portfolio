import styled, { css } from "styled-components";

import { Card } from "@mui/material";

export const ContactContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.md} {
    padding: 10px;
  }
`;

export const MainBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch; // this ensures that child elements stretch to the maximum height
    }
  `}
`;

export const MainTextContainer = styled(Card)`
  padding: 20px;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column; // Adjust content direction
  justify-content: center;

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints.md}) {
      height: 100%; // This will stretch the card to the height of the parent
    }
  `}
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 460px;
  justify-content: center;

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints.md}) {
      height: 100%;
    }
  `}
`;

export const TitleContainer = styled.h3`
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  text-align: start;
  margin-bottom: 20px;
`;
