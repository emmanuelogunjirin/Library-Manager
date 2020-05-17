import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { auth } from "../Authentication/Firebase";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Landing from "../Pages/Landing";
import Homepage from "../Pages/Homepage";
import UserProvider from "../Containers/UserProvider";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.currentUser ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);

function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

function AppRouter() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={Homepage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
