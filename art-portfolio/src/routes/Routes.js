import React from 'react';
import { Route } from 'react-router-dom';
import AboutUs from '../components/About';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';

const Routes = () => {
    return(
        <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </div>
    )
}

export default Routes;
