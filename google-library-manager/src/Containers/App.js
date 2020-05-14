import React from 'react';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import Landing from '../Pages/Landing';
import Homepage from '../Pages/Homepage';
import UserProvider from '../Containers/UserProvider'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  // const user = null;
  return (
    <UserProvider>
      user ?
      <Router>
        <Route path="/home">
          <Homepage />
        </Route>
      </Router>
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
    </UserProvider>
  );
}

export default App;
