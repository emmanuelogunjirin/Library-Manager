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
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import Favorites from "../Pages/SavedBooks";
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
        <PrivateRoute exact path="/home" component={Homepage} />
        <PrivateRoute exact path="/home/profile" component={Profile} />
        <PrivateRoute exact path="/home/search" component={Search} />
        <PrivateRoute exact path="/home/favorites" component={Favorites} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
