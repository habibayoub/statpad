import React from 'react';
import {Button, Navbar, Nav, Container, Jumbotron, Table} from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';



export default function HomeFR() {
  return (

     <div className="App">
       <header className="App-header">

         <div className="jumbotron container-fluid">
             <h2>StatPad | Stay In The Hoop.</h2>
         </div>
        
          <>
          <Navbar bg="primary" variant="dark">
            <Container>
            <nav className="navbar">
              <Link to="/statpad" style={{color: 'white', textDecoration: 'None'}}><h1>StatPad</h1></Link>
  
                        <Link to="/login" style={{color: 'white', textDecoration: 'None'}}>Avantages exclusifs!</Link>
                        <Link to="/teams" style={{color: 'white', textDecoration: 'None'}}>Équipes</Link>
                        <Link to="/players" style={{color: 'white', textDecoration: 'None'}}>Joueurs</Link>
                        <Link to="/forums" style={{color: 'white', textDecoration: 'None'}}>Forums</Link>

                        <NavDropdown title="Menu déroulant" id="nav-dropdown">
                            <Dropdown.Item as={Link} to="/statpad">Anglais</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/homefr">Français</Dropdown.Item>
                        </NavDropdown>

             </nav>
            </Container>
          </Navbar>
        </> 

      <h2 className="different" style={{color:'black', transform: "translate(0,200%)"}}> Finales NBA 2022 <break> Les 3 meilleurs joueurs par équipe</break> </h2>
      
      </header>

      <body>


      <Table striped bordered hover style={{transform: "translate(0,-80%)"}}>
        <thead>
          <tr>
            <th>Golden State</th>
            <th>Jouer</th>
            <th>Temps de jeu (minutes)</th>
            <th>Points</th>
            <th>Rebonds</th>
            <th>Aides</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Stephen Curry</td>
            <td>37.6</td>
            <td>31.2</td>
            <td>6.0</td>
            <td>5.0</td>
          </tr>
          <tr>
            <td></td>
            <td>Andrew Wiggins</td>
            <td>39.2</td>
            <td>18.3</td>
            <td>8.8</td>
            <td>2.2</td>
          </tr>
          <tr>
            <td></td>
            <td>Klay Thompson</td>
            <td>38.4</td>
            <td>17.0</td>
            <td>3.0</td>
            <td>2.0</td>
          </tr>
        </tbody>
      </Table>

      <Table striped bordered hover style={{transform: "translate(0,-20%)"}}>
        <thead>
          <tr>
            <th>Boston Celtics</th>
            <th>Jouer</th>
            <th>Temps de jeu (minutes)</th>
            <th>Points</th>
            <th>Rebonds</th>
            <th>Aides</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Jaylen Brown</td>
            <td>38.8</td>
            <td>23.5</td>
            <td>7.3</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td></td>
            <td>Jayson Tatum</td>
            <td>40.7</td>
            <td>21.5</td>
            <td>6.8</td>
            <td>7.0</td>
          </tr>
          <tr>
            <td></td>
            <td>Marcus Smart</td>
            <td>35.4</td>
            <td>15.2</td>
            <td>4.5</td>
            <td>5.0</td>
          </tr>
        </tbody>
      </Table>

      </body>

    </div>
  );
}