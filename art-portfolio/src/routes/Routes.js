import React from 'react';
import { Route } from 'react-router-dom';
import AboutUs from '../components/About';
import SignIn from '../components/SignIn';
import Home from '../components/Home';

const Routes = () => {
    return(
        <>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/signIn" component={SignIn} />
        </>
    )
}

export default Routes;
