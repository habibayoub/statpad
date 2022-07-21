import React from "react"
import {Button, Navbar, Nav, Container, Jumbotron} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bucks from "./content/bucks.svg";
import bulls from "./content/bulls.svg";
import celtics from "./content/celtics.svg";
import cleveland from "./content/cleveland.svg";
import clippers from "./content/clippers.svg";
import dallas from "./content/dallas.svg";
import hawks from "./content/hawks.svg";
import heat from "./content/heat.svg";
import hornets from "./content/hornets.svg";
import jazz from "./content/jazz.svg";
import kings from "./content/kings.svg";
import knicks from "./content/knicks.svg";
import lakers from "./content/lakers.svg";
import magic from "./content/magic.svg";
import memphis from "./content/memphis.svg";
import nets from "./content/nets.svg";
import nuggets from "./content/nuggets.svg";
import okc from "./content/okc.svg";
import pacers from "./content/pacers.svg";
import pelicans from "./content/pelicans.svg";
import philly from "./content/philly.svg";
import pistons from "./content/pistons.svg";
import portland from "./content/portland.svg";
import raptors from "./content/raptors.svg";
import rockets from "./content/rockets.svg";
import spurs from "./content/spurs.svg";
import suns from "./content/suns.svg";
import warriors from "./content/warriors.svg";
import wizards from "./content/wizards.svg";
import wolves from "./content/wolves.svg";


const Teams = () => {
    return ( 
    <div className="App">
    <header className="App-header">

        <div class="container">
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
        </div>

        <h1 className="different" style={{color:'black', transform: "translate(0,-525%)"}}> NBA Teams </h1>

    </header>


    
    <body>
        <Container style={{transform: "translate(0,-40%)"}}>
        <Row>
            <Col>
                <div>
                    <img src={bucks} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={bulls} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={celtics} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={cleveland} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={clippers} alt=""/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <img src={dallas} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={hawks} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={heat} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={hornets} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={jazz} alt=""/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <img src={kings} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={knicks} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={lakers} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={magic} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={memphis} alt=""/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <img src={nets} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={nuggets} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={okc} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={pacers} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={pelicans} alt=""/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <img src={philly} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={pistons} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={portland} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={raptors} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={rockets} alt=""/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>
                    <img src={spurs} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={suns} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={warriors} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={wizards} alt=""/>
                </div>
            </Col>
            <Col>
                <div>
                    <img src={wolves} alt=""/>
                </div>
            </Col>
        </Row>
        
        </Container>
    </body>

    </div>

    
    )
}
 
export default Teams;