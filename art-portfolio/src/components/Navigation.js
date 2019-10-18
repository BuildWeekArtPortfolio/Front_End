import React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import AboutUs from "./About";
import SignIn from "./SignIn";

const Navigation = () => {
  return (
    <nav>
      <NavLink to={`/`}>home</NavLink>
      <NavLink to={`/about`}>About</NavLink>
      <NavLink to={`/signIn`}>Sign-In</NavLink>

      <Route exact path="/" /> 
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/signIn" component={SignIn} />
    </nav>
  );
};

export default Navigation;
