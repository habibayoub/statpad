import React from "react"
import {Button, Navbar, Nav, Container, Jumbotron} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './SignUp.css';



const SignUp = () => {
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

        <Breadcrumb className="Bread">
            <Breadcrumb.Item href="/statpad">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/login">Login</Breadcrumb.Item>
            <Breadcrumb.Item active>Sign Up</Breadcrumb.Item>
        </Breadcrumb>

        <div className="row align-items-center">

            <div className="col text-white text-center">
            <div className="Auth-form-container">

                <form className="Signup-form">
                    <div className="Signup-form-content">
                        <h1 className="Signup-form-title" style={{color: 'black'}}>Personal Information</h1>
                        <div className="form-group mt-3">
                        <label style={{color: 'black'}}>Full name</label>
                        <input
                            type="name"
                            className="form-control mt-1"
                            placeholder="Enter name"/>
                        </div>
                        <div className="form-group mt-3">
                        <label style={{color: 'black'}}>Country</label>
                        <input
                            type="country"
                            className="form-control mt-1"
                            placeholder="Enter country"/>
                        </div>
                    </div>

                </form>
            </div>
                
            </div>


            <div class="col text-center">

            <div className="Signup-form-container">
                    <form className="Signup-form">
                    <div className="Signup-form-content">
                        <h1 className="Signup-form-title" style={{color: 'black'}}>Profile</h1>

                        <div className="form-group mt-3">
                        <label style={{color: 'black'}}>Username</label>
                        <input
                            type="username"
                            className="form-control mt-1"
                            placeholder="@username"/>
                        </div>

                        <div className="form-group mt-3">
                        <label style={{color: 'black'}}>Nickname</label>
                        <input
                            type="nickname"
                            className="form-control mt-1"
                            placeholder="Enter nickname"/>

                        </div>

                    </div>
                    </form>
            </div>
            </div>

            <div className="col text-center">

                <div className="Signup-form-container">
                    <form className="Signup-form">
                    <div className="Signup-form-content">
                        <h1 className="Signup-form-title" style={{color: 'black'}}>Sign Up</h1>
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
                        <div className="form-group mt-3">
                        <label style={{color: 'black'}}>Re-enter password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Re-enter password"/>
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-danger" >
                            Submit
                            </button>
                        </div>
                    
                    </div>
                    </form>
                </div>
                
            </div>
                
            </div>
        
        </div>
    </header>
    </div>
    )
}
 
export default SignUp;