import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

interface NavLinkProps {
  activeClassName?: string;
}

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 100px;
  border-bottom: 2px solid ${({ theme }) => theme.primaryColors.primaryBorder};

  background-color: ${({ theme }) => theme.primaryColors.primary_01};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #333;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const MenuItem = styled.li`
  margin-left: 1rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const NavLinks = styled(NavLink)<NavLinkProps>`
  display: flex;
  text-decoration: none;
  color: #333; // Set the default color

  &:hover,
  &:focus {
    color: red;
  }

  &.${(props) => props.activeClassName} {
    color: blue; // Set active color to blue
    font-weight: bold;
  }
`;
