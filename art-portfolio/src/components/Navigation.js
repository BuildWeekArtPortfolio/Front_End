import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 20px 0px;
`

const StyledNav = styled.nav`
font-family: 'Railway';
text-decoration: none;
border: 1px solid black;
width: 80%;
display: flex;
justify-content: space-around;
margin: 0 auto;
`

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to={`/`}>Home</StyledNavLink>
      <StyledNavLink to={`/about`}>About</StyledNavLink>
      <StyledNavLink to={`/signIn`}>Sign-In</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
