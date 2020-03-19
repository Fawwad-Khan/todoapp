import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ACL_ROTUES from './roles';
import *  as Routes from './index';

const PrivateRoutes = () => {

    return (
        <Switch>
            {ACL_ROTUES().map(({ module, path }) => {
                const Component = Routes[module];
                return (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={props => <Component {...props} />}
                    />
                )
            })}
        </Switch>
    )
}

export default PrivateRoutes;