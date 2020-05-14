import React from 'react';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Landing from '../Pages/Landing';
import Homepage from '../Pages/Homepage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = null;
  return (
    user ?
    <Route path="/home">
      <Homepage />
    </Route>
    :
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
