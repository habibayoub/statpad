import React from 'react';
import {Button, Navbar, Nav, Container, Jumbotron} from 'react-bootstrap';
import header from "./content/header.png";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="jumbotron container-fluid">
          <div className="">

            <h2>StatPad | Stay In The Hoop.</h2>
          </div>
        </div>
        
          <>
          <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">StatPad</Navbar.Brand>
            <Nav className="m-auto">
              <Nav.Link href="#perks">Exclusive Perks!</Nav.Link>
              <Nav.Link href="#forums">Forums</Nav.Link>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#players">Players</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        </>
      </header>
    </div>
  );
}

