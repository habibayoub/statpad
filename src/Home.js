import React from 'react';
import {Button, Navbar, Nav, Container, Jumbotron} from 'react-bootstrap';
import header from "./content/header.png";
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (

     <div className="App">
       <header className="App-header">

         <div className="jumbotron container-fluid">
             <h2>StatPad | Stay In The Hoop.</h2>
         </div>
        
          <>
          <Navbar bg="primary" variant="light">
            <Container>
            <nav className="navbar">
                 <h1>StatPad</h1>
                 {/* <div className="links"> */}
                    {/* <Nav className="m-auto"> */}
                        <Link to="/login" style={{color: 'white'}}>Exclusive Perks!</Link>
                        <Link to="/forums" style={{color: 'white'}}>Forums</Link>
                        <Link to="/teams" style={{color: 'white'}}>Teams</Link>
                        <Link to="/players" style={{color: 'white'}}>Players</Link>
                    {/* </Nav> */}
                 {/* </div> */}
             </nav>
            {/* <Navbar.Brand href="#home">StatPad</Navbar.Brand>
            <Nav className="m-auto">
              <Link to="/SignUp">Exclusive Perks!</Link>
              <Nav.Link href="#forums">Forums</Nav.Link>
              <Nav.Link href="#teams">Teams</Nav.Link>
              <Nav.Link href="#players">Players</Nav.Link>
            </Nav> */}
            </Container>
          </Navbar>
        </> 
      </header>
    </div>
  );
}