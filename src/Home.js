import React from 'react';
import {Button, Navbar, Nav, Container, Jumbotron, Table} from 'react-bootstrap';
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
          <Navbar bg="primary" variant="dark">
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

      <h2 className="different" style={{color:'black', transform: "translate(0,200%)"}}> NBA 2022 Finals <break> Top 3 Perfomers Per Team</break> </h2>
      
      </header>

      <body>


      <Table striped bordered hover style={{transform: "translate(0,-80%)"}}>
        <thead>
          <tr>
            <th>Golden State</th>
            <th>Player</th>
            <th>Playing Time (Minutes)</th>
            <th>Points</th>
            <th>Rebounds</th>
            <th>Assists</th>
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
            <th>Player</th>
            <th>Playing Time (Minutes)</th>
            <th>Points</th>
            <th>Rebounds</th>
            <th>Assists</th>
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