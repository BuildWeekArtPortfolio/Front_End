import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 20px 0;
`

const StyledNav = styled.nav`
font-family: 'Raleway';
display: flex;
justify-content: space-around;
border: 1px solid black;
width: 80%;
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
