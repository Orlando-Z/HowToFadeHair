import { Navbar, NavbarBrand } from "reactstrap";
import BarberLogoWhite from '../app/img/logo_white_blackBackground.png';

const Header = () => {
  return (
    <Navbar dark color="dark" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={BarberLogoWhite} alt="How to fade hair barber school logo" />
        <h2>How to fade Hair Barber School</h2>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
