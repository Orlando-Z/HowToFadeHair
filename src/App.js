import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import BarberLogoWhite from './app/img/logo_white_blackBackground.png'; 
 
function App() {
  return (
    <div className="App">
      <Navbar dark  sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={BarberLogoWhite} alt='How to fade hair barber school logo' />
            <h2>How to fade Hair Barber School</h2>
          </NavbarBrand>
        </Container>
      </Navbar>
      Body of website here / Info
    </div>
  );
}

export default App;
