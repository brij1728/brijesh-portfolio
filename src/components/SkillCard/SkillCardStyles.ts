import { Card, List, ListItem, Typography } from "@mui/material";
import styled, { css } from "styled-components";

export const StyledCard = styled(Card)`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column wrap;

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      margin-bottom: 20px;
      width: 100%;
    }

    // for screens larger than 576px and smaller than 768px
    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      margin-bottom: 20px;
      width: 300;
    }

    // for screens larger than 768px and smaller than 992px
    @media only screen and (min-width: ${theme.breakpoints
        .md}) and (max-width: ${theme.breakpoints.lg}) {
      margin-bottom: 20px;
      width: 40%;
    }

    // for screens larger than 992px and smaller than 1200px
    @media only screen and (min-width: ${theme.breakpoints
        .lg}) and (max-width: ${theme.breakpoints.xl}) {
      margin-bottom: 20px;
      width: 40%;
    }

    // for screens larger than 1200px
    @media only screen and (min-width: ${theme.breakpoints.xl}) {
      margin-bottom: 20px;
      width: 30%;
    }
  `}
`;

export const SkillCardTitle = styled(Typography)`
  margin-bottom: 1rem;
  text-align: start;
  font-weight: bold;
`;

export const SkillCardListItem = styled(ListItem)`
  display: flex;
  flex-flow: column;
  align-items: start;
  padding-bottom: 1rem;
`;

export const SkillCardList = styled(List)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  margin-bottom: 10px;

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
      margin: 20px;
    }

    // for screens larger than 992px and smaller than 1200px
    @media only screen and (min-width: ${theme.breakpoints
        .lg}) and (max-width: ${theme.breakpoints.xl}) {
      flex-flow: row wrap;
      margin: 20px;
    }

    // for screens larger than 1200px
    @media only screen and (min-width: ${theme.breakpoints.xl}) {
      flex-flow: row wrap;
      margin: 20px;
    }
  `}
`;
