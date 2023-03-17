import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid ${({ theme }) => theme.primaryColors.primaryBorder};

  background-color: ${({ theme }) => theme.primaryColors.primary_01};
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
`;

export const MenuItem = styled.li`
  margin-left: 1rem;

  &:first-child {
    margin-left: 0;
  }
`;
