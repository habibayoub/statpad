import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import Teams from './Teams';
import Players from './Players';
import Forums from './Forums';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>

            <Route exact path="/statpad">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/teams">
              <Teams />
            </Route>

            <Route path="/players">
              <Players />
            </Route>

            <Route path="/forums">
              <Forums />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>  
  );
}

export default App;