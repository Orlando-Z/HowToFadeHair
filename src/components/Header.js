import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import BarberLogoWhite from "../app/img/logo_white_blackBackground.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark sticky="top" expand="md">
      <NavbarBrand href="/">
        <img
          src={BarberLogoWhite}
          alt="How to fade hair barber school logo"
          className="float-start"
        />
        <h1 className="mt-2">How To Fade Hair Barber School</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
      <Nav className="ms-auto" navbar>
        <NavItem>
          <NavLink className="nav-link" to="/">
            <i className="fa fa-home fa-lg" /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/contact">
            <i className="fa fa-address-card fa-lg" /> Contact Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/classes">
            <i className="fa fa-graduation-cap fa-lg" /> Class Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/appointment">
            <i className="fa fa-pencil fa-lg" /> Appointment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/about-us">
            <i className="fa fa-question fa-lg" /> About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/haircuts">
            <i className="fa fa-scissors fa-lg" /> Styles
          </NavLink>
        </NavItem>
      </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
