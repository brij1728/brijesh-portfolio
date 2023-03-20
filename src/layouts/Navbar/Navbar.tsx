import { Logo, Menu, MenuItem, Nav, NavLinks } from "./style";

export const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Brijesh</Logo>
      <Menu>
        <MenuItem>
          <NavLinks activeClassName="active" to="/works">
            Works
          </NavLinks>
        </MenuItem>
        <MenuItem>
          <NavLinks to="/about">About</NavLinks>
        </MenuItem>
        <MenuItem>
          <NavLinks to="/skills">Skills</NavLinks>
        </MenuItem>
        <MenuItem>
          <NavLinks to="/contact">Contact</NavLinks>
        </MenuItem>
        <MenuItem>
          <NavLinks to="/resume">Resume</NavLinks>
        </MenuItem>
      </Menu>
    </Nav>
  );
};
