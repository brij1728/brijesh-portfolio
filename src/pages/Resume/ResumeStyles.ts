import { Button, ButtonProps } from "@mui/material";

import styled from "styled-components";

type ExtendedButtonProps = ButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const ResumeButton = styled(Button as React.FC<ExtendedButtonProps>)`
  margin: 0 8px;
  background-color: ${({ theme }) => theme.primaryColors.primaryBackground};
  &:hover {
    background-color: ${({ theme }) => theme.primaryColors.primaryBackground};
  }
`;
