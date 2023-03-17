import { Logo, Menu, MenuItem, Nav } from "./style";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">My Website</Logo>
      <Menu>
        <MenuItem>
          <NavLink to="/works">Works</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/about">About</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/skills">Skills</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/contact">Contact</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/resume">Resume</NavLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
};
