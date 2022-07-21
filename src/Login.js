import React from "react"
import {Button, Navbar, Nav, Container, Jumbotron} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
    <div className="App">
    <header className="App-header">
        <div class="container">
        <>
          <Navbar fixed="top" bg="primary" variant="dark">
            <Container>
            <nav className="navbar">
                 <h1>StatPad</h1>

                        <Link to="/login">Exclusive Perks!</Link>
                        <Link to="/forums">Forums</Link>
                        <Link to="/teams">Teams</Link>
                        <Link to="/players">Players</Link>

             </nav>

            </Container>
          </Navbar>
        </>

                    <div class="row align-items-center">

                        <div class="col text-white text-center">
                            <p>Sign In for exclusive perks! get access to live updates and much more!</p>
                        </div>

                        <div class="col text-white text-center">

                        <div className="Auth-form-container">
                            <form className="Auth-form">
                            <div className="Auth-form-content">
                                <h1 className="Auth-form-title">Sign In</h1>
                                <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                />
                                </div>
                                <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                                </div>
                                <p className="signup text-right mt-2">
                                Don't have an account? <Link to="/signup">Make one now</Link>
                                </p>
                            </div>

                            </form>
                        </div>
                            
                        </div>
                        <div class="col text-center">
                           
                        </div>
                      </div>
        
        </div>
    </header>
    </div>
    )
}
 
export default Login;