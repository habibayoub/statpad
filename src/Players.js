import React from 'react';
import {Button, Navbar, Nav, Container, Jumbotron, Table} from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';
import kareem from "./content/kareem.png";
import lbj from "./content/lbj.png";
import malone from "./content/malone.png";
import bean from "./content/bean.png";
import mj from "./content/mj.png";



export default function Players() {
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

      <h2 className="different" style={{color:'black', transform: "translate(0,-650%)"}}> NBA All-Time Top 5 Perfomers </h2>
      
      </header>

      <body>

    <Container>

      <Table striped bordered hover style={{transform: "translate(0,-120%)"}}>
        <thead>
          <tr>
            <th></th>
            <th>Player</th>
            <th>Games Played</th>
            <th>Playing Time (Minutes)</th>
            <th>Points</th>
            <th>Rebounds</th>
            <th>Assists</th>
            <th>3 Pointers Made</th>
            <th>3 Pointer %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={kareem} width="20%" alt=""/></td>
            <td>Kareem Abdul-Jabbar</td>
            <td>1,560</td>
            <td>57446</td>
            <td>38387</td>
            <td>17440</td>
            <td>5660</td>
            <td>1</td>
            <td>5.6</td>
          </tr>
          <tr>
            <td><img src={lbj} width="20%" alt=""/></td>
            <td>LeBron James</td>
            <td>1,366</td>
            <td>52138</td>
            <td>37062</td>
            <td>10210</td>
            <td>10045</td>
            <td>2140</td>
            <td>34.6</td>
          </tr>
          <tr>
            <td><img src={malone} width="20%" alt=""/></td>
            <td>Karl Malone</td>
            <td>1,476</td>
            <td>54852</td>
            <td>36928</td>
            <td>14968</td>
            <td>5248</td>
            <td>85</td>
            <td>27.4</td>
          </tr>
          <tr>
            <td><img src={bean} width="20%" alt=""/></td>
            <td>Kobe Bean Bryant</td>
            <td>1,346</td>
            <td>48643</td>
            <td>33643</td>
            <td>7047</td>
            <td>6306</td>
            <td>1827</td>
            <td>32.9</td>
          </tr>
          <tr>
            <td><img src={mj} width="20%" alt=""/></td>
            <td>Micheal Jordan</td>
            <td>1,072</td>
            <td>41010</td>
            <td>32292</td>
            <td>6672</td>
            <td>5633</td>
            <td>581</td>
            <td>32.7</td>
          </tr>
        </tbody>
      </Table>

    </Container>

      </body>

    </div>
  );
}