import { Logo, Menu, MenuItem, Nav, NavLinks } from "./style";

const navItems = [
  { path: "/works", label: "Works" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
  { path: "/assets/brijesh resume.pdf", label: "Resume", external: true },
];

export const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Brijesh</Logo>
      <Menu>
        {navItems.map((item, index) => (
          <MenuItem key={index}>
            <NavLinks
              to={item.path}
              activeClassName="active"
              target={item.external ? "_blank" : undefined}
            >
              {item.label}
            </NavLinks>
          </MenuItem>
        ))}
      </Menu>
    </Nav>
  );
};
