import { Card, CardContent, Link, Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const StyledCard = styled(Card)`
  &.MuiCard-root {
    flex-flow: column;
    display: flex;
    width: 300px;
    min-height: 100%;
    justify-content: space-between;

    ${({ theme }) => css`
      @media (max-width: ${theme.breakpoints.sm}) {
        width: 100%;
      }
      @media (min-width: ${theme.breakpoints.sm} and (max-width: ${theme
          .breakpoints.md})) {
        width: 250px;
      }
    `}
  }
`;

export const StyledCardContent = styled(CardContent)`
  flex: 1;
`;

export const StyledTitle = styled(Typography)`
  font-size: ${({ theme }) => theme.fontSizes.h3.lg};
  color: ${({ theme }) => theme.primaryColors.primaryText};
  margin: 0;
`;
export const StyledDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.primaryColors.primaryText};
  margin: 0;
`;

export const StyledGithubLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.primaryColors.primaryText};
  margin: 0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.primaryColors.accent1};
  }
`;
