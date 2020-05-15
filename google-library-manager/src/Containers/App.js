import React from "react";
import { auth } from "../Authentication/Firebase";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Landing from "../Pages/Landing";
import Homepage from "../Pages/Homepage";
import UserProvider from "../Containers/UserProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/home" component={Homepage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.currentUser ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
);
