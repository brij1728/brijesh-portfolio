import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import styled, { css } from "styled-components";

export const StyledCard = styled(Card)`
  &.MuiCard-root {
    display: flex;
    flex-flow: column;
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

export const SkillCardContainer = styled(CardContent)`
  flex: 1;
  &.MuiCardContent-root {
    padding: 0;
  }
`;

export const SkillCardTitle = styled(Typography)`
  font-size: ${({ theme }) => theme.fontSizes.h3.lg};
  color: ${({ theme }) => theme.secondaryColors.secondaryText};

  padding: 16px;
  padding-bottom: 0;
`;

export const SkillCardList = styled(List)`
  display: block;
  list-style: none;
  column-count: 2;
  column-gap: 5px;
  row-gap: 5px;

  & .MuiContainer-root {
    margin: 0;
  }
`;

export const SkillCardListItem = styled(ListItem)`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  break-inside: avoid;

  & > div,
  & > img,
  & > svg {
    // Assuming the icon is either a div, img, or svg

    // Spacing between the icon and the text
  }

  &.MuiListItem-root {
    /* margin-right: 10px; */
    padding-left: 0;
  }
`;

export const SkillListItemText = styled(ListItemText)`
  display: flex;
  align-items: center;

  &.MuiListItemText-root {
    margin: 0;
    max-width: 50px;
  }
`;
