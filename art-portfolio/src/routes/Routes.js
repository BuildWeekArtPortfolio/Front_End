import React from 'react';
import { Route } from 'react-router-dom';
import AboutUs from '../components/About';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import Register2 from '../components/Register2';

const Routes = () => {
    return(
        <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/register2" component={Register2} />
        </div>
    )
}

export default Routes;
