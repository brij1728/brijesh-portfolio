import { Card, List } from "@mui/material";

import styled from "styled-components";

export const StyledSocialCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .MuiCardContent-root {
    padding: 0;
  }
  & .MuiCardContent-root:last-child {
    padding-bottom: 0;
  }
`;

export const StyledSocialList = styled(List)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &.MuiList-root {
    padding: 0;
  }
`;
