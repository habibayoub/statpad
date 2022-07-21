import React from "react"
import {Button, Navbar, Nav, Container, Jumbotron} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lebron from "./content/lebron.jpeg";
import Breadcrumb from 'react-bootstrap/Breadcrumb';



const Login = () => {
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

        <Breadcrumb className="Bread" style={{transform: "translate(0,350%)"}}>
            <Breadcrumb.Item href="/statpad">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Login</Breadcrumb.Item>
        </Breadcrumb>

                    <div className="row align-items-center">

                        <div className="col text-center">
                            <p style={{color: 'black'}}>
                                Sign In for exclusive perks! Get access to live updates and much more!</p>
                        </div>

                        <div className="col text-center" style={{padding: 15}}>

                        <div className="Signup-form-container">
                            <form className="Auth-form">

                            <div className="Signup-form-content">
                                <h1 className="Signup-form-title" style={{color: 'black'}}>Sign In</h1>
                                <div className="form-group mt-3">
                                <label style={{color: 'black'}}>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"/>
                                </div>

                                <div className="form-group mt-3">
                                <label style={{color: 'black'}}>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"/>
                                </div>

                                <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-danger" >
                                    Submit
                                </button>
                                </div>

                                <p className="signup text-right mt-2" style={{color: 'black'}}>
                                Don't have an account? <Link to="/signup">Make one now</Link>
                                </p>

                            </div>

                            </form>
                        </div>
                            
                        </div>
                        <div class="col text-center">
                        <div>
                            <img src={lebron} alt=""/>
                        </div>
                        </div>
                      </div>
        
        </div>
    </header>
    </div>
    )
}
 
export default Login;