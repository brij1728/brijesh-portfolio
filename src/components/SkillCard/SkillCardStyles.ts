import { Card, List, ListItem, ListItemText, Typography } from "@mui/material";
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
  flex-flow: column wrap;
  align-items: flex-start; // Aligns items to the top
  padding-bottom: 1rem;
  break-inside: avoid; // Prevent breaking inside

  & > div,
  & > img,
  & > svg {
    // Assuming the icon is either a div, img, or svg
    margin-right: 10px; // Spacing between the icon and the text
  }
`;

export const SkillCardList = styled(List)`
  display: block;
  list-style: none;
  margin-bottom: 10px;
  column-count: 2;
  column-gap: 20px;
  row-gap: 10px;

  ${({ theme }) => css`
    // for screens smaller than 576px
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      column-count: 2;
    }

    // for screens larger than 576px and smaller than 768px
    @media only screen and (min-width: ${theme.breakpoints
        .sm}) and (max-width: ${theme.breakpoints.md}) {
      column-count: 2;
    }

    // for screens larger than 768px and smaller than 992px
    @media only screen and (min-width: ${theme.breakpoints
        .md}) and (max-width: ${theme.breakpoints.lg}) {
      column-count: 2;
    }

    // for screens larger than 992px
    @media only screen and (min-width: ${theme.breakpoints.lg}) {
      flex-flow: column wrap;
      margin: 20px;
      column-count: 2; // Create two columns
      column-gap: 20px; // Space between columns
      width: 100%;
    }
  `}
`;

export const SkillListItemText = styled(ListItemText)`
  display: flex;
  align-items: flex-start;
`;
