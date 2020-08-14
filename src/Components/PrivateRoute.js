import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component: Component, ...rest}) => {
    console.log(rest.state)
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
             rest.login?
                <Component {...rest.state} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;