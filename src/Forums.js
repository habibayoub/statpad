import React from 'react';
import {Button, Navbar, Nav, Container, Jumbotron, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Forums() {
  return (

     <div className="App">
       <header className="App-header">
        
       <>
          <Navbar fixed="top" bg="primary" variant="dark">
            <Container>
            <nav className="navbar">
                 <Link to="/statpad" style={{color: 'white', textDecoration: 'None'}}><h1>StatPad</h1></Link>

                        <Link to="/login" style={{color: 'white', textDecoration: 'None'}}>Exclusive Perks!</Link>
                        <Link to="/teams" style={{color: 'white', textDecoration: 'None'}}>Teams</Link>
                        <Link to="/players" style={{color: 'white', textDecoration: 'None'}}>Players</Link>
                        <Link to="/forums" style={{color: 'white', textDecoration: 'None'}}>Forums</Link>

             </nav>

            </Container>
          </Navbar>
        </>

      <h2 className="different" style={{color:'black', transform: "translate(0,-650%)"}}> FAQ Section, Most Asked Questions </h2>
      
      </header>

      <body>
        <Container>
            <Card style={{transform: "translate(0,-400%)"}}>
                <Card.Body>
                    <Card.Title>Whats the use for this site? -Posted by Anonymous</Card.Title>
                    <Card.Text>
                    This site is used as a hub for all statistics basketball.
                    Join our exclusive members club by creating an account and get access to a bunch of cool perks!
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
            </Card>

            <Card style={{transform: "translate(0,-300%)"}}>
                <Card.Body>
                    <Card.Title>How are these stats accurate? -Posted by Anonymous</Card.Title>
                    <Card.Text>
                    This site is partned by a world-leading sports analytics company and they provide us with all
                    of our data. Everything is certified and accurate. 
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
            </Card>

            <Card style={{transform: "translate(0,-200%)"}}>
                <Card.Body>
                    <Card.Title>How do I get live updates on statistics? -Posted by Anonymous</Card.Title>
                    <Card.Text>
                    Get real-time updates by simply signing up to our account system. Just by creating an account 
                    with us, not only do you gain live updates, but many more cool perks!
                    </Card.Text>
                    <Button variant="primary">Reply</Button>
                </Card.Body>
            </Card>
        </Container>
      

      </body>

    </div>
  );
}
