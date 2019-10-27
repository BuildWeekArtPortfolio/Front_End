import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 20px 0;
color: #002438;
`

const StyledNav = styled.nav`
font-family: 'Raleway';
display: flex;
justify-content: space-around;
width: 80%;
margin: 0 auto;
`


const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to={`/`}>Home</StyledNavLink>
      <StyledNavLink to={`/about`}>About</StyledNavLink>
      <StyledNavLink to={`/login`}>Log In</StyledNavLink>
      <StyledNavLink to={`/register`}>Register</StyledNavLink>
      <StyledNavLink to={`/register2`}>Register2</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
