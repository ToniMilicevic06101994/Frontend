import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Navbar.Link href="/"> Izbori u BiH </Navbar.Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem href="/kantoni"> Kantoni </NavItem>
      <NavItem href="/opcine"> Općine </NavItem>
      <NavItem href="/lokacije"> Lokacije </NavItem>
      <NavItem href="/izborneJedinice"> Izborne jedinice </NavItem>
      <NavItem href="/birackaMjesta"> Biračka mjesta </NavItem>
      <NavItem href="/kandidati"> Kandidati </NavItem>
      <NavItem href="/politickiSubjekti"> Politički subjekti </NavItem>
      <NavItem href="/brojGlasovaPoKandidatu"> Glasovi kandidata </NavItem>
      <NavItem href="/brojGlasovaPoPolitickomSubjektu"> Glasovi političkih subjekata </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
