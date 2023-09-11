import {
  IconButton,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
} from "@mui/material";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

export const AppBar = styled(MuiAppBar)`
  background-color: ${({ theme }) => theme.primaryColors.primaryBackground};

  ${({ theme }) => `
    @media (max-width: ${theme.breakpoints.sm}px) {
      padding: 10px 20px;
    }

    @media (min-width: ${theme.breakpoints.sm}px) and (max-width: ${theme.breakpoints.md}px) {
      padding: 10px 20px;
    }

    @media (min-width: ${theme.breakpoints.md}px) and (max-width: ${theme.breakpoints.lg}px) {
      padding: 20px 50px;
    }
  `}
`;

export const Toolbar = styled(MuiToolbar)`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: 20px;
`;

export const HamburgerIconButton = styled(IconButton)`
  ${({ theme }) => css`
    // appear only for small screens
    @media only screen and (max-width: ${theme.breakpoints.sm}) {
      display: block;
    }

    // disappear for larger screens
    @media only screen and (min-width: ${theme.breakpoints.sm}) {
      display: none;
    }
  `}
`;

export const NavItems = styled.div`
  ${({ theme }) => css`
    // hidden for small screens
    @media only screen and (max-width: ${theme.breakpoints.md}) {
      display: none;
    }
    // appear for larger screens
    @media only screen and (min-width: ${theme.breakpoints.md}) {
      display: flex;
      gap: 20px;
    }
  `}
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 200px;
`;
