import React, { Fragment } from 'react';
import { PrivateRoutes } from '../route';

const Dashboard = () => (
    <Fragment>
        <h1>Dashboard !!!</h1>
        <PrivateRoutes />
    </Fragment>
);

export default Dashboard;