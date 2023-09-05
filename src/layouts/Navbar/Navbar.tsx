import {
  AppBar,
  HamburgerIconButton,
  NavItems,
  StyledLink,
  Toolbar,
} from "./style";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

// Or wherever you keep your styled components

const navItems = [
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
  { path: "/brijesh_resume.pdf", label: "Resume", external: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <StyledLink to="/">
          {/* <Logo src={AppLogo} alt="logo" /> */}
          Home
        </StyledLink>

        <NavItems>
          {navItems.map((item, index) => (
            <StyledLink key={index} to={item.path}>
              {item.label}
            </StyledLink>
          ))}
        </NavItems>

        <HamburgerIconButton onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </HamburgerIconButton>
      </Toolbar>
      <Drawer anchor="right" open={isOpen} onClose={toggleMenu}>
        <List>
          {navItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.path}
              onClick={toggleMenu}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};
