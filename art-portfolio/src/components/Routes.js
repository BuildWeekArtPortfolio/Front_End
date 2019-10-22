import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import SignIn from "./SignIn";
import Navigation from "./Navigation";
import Home from './Home';

const Routes = () => {
  return (
    <div>
      <Navigation />

      <Route exact path="/" component={Home} />

      <Route exact path="/about" component={About} />

      <Route exact path="/signIn" component={SignIn} />
    </div>
  );
};

export default Routes;
