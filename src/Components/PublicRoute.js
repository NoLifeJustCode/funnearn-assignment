import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * Public route to Authenticate and redirect if  logged in
 * @param {*} param0 
 */
const PublicRoute = ({component: Component, ...rest}) => {
   
    return (

        // Show the component only when the user is not logged in
        // Otherwise, redirect the user to /home page
        <Route {...rest} render={props => (
             !rest.login?
                <Component {...rest.state} />
            : <Redirect to="/home" />
        )} />
    );
};

export default PublicRoute;