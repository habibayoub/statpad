import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>

            <Route exact path="/statpad/statpadFinal">
              <Home />
            </Route>

            <Route path="/Login">
              <Login />
            </Route>

            <Route path="/SignUp">
              <SignUp />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>  
  );
}

export default App;