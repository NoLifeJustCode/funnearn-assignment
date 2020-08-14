import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to / page
        <Route {...rest} render={props => (
             rest.login?
                <Component {...rest.state} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;