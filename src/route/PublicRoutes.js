
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch, AuthAction } from '../store/index';
import { LocalStorage } from '../service';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;


// Containers
const Dashboard = React.lazy(() => import('../container/Dashboard'));
const App = React.lazy(() => import('../App'));
const Login = React.lazy(() => import('../container/Login'));
const Register = React.lazy(() => import('../container/Register'));
// const Page404 = React.lazy(() => import('./../views/Pages/Page404'));
// const Page500 = React.lazy(() => import('./../views/Pages/Page500'));

const Authentication = ({ component: Component, authed = false, ...rest }) => {
    return (
        <Route {...rest}
            render={props => authed ? <Component {...props} /> : <Redirect to="/login" />} />
    )
}

const PublicRoutes = () => {
    const Dispatch = useDispatch();
    const localStorageUser = LocalStorage.getItem('user');

    const { user } = useSelector(({ auth }) => ({
        user: auth.user,
    }), shallowEqual);

    useEffect(() => {
        if (!user) {
            if (localStorageUser) {
                Dispatch(AuthAction.setUser(localStorageUser));
            }
        }
    }, [user]);

    return (
        <Router>
            <React.Suspense fallback={loading()}>
                <Switch>
                    <Route exact path="/login" name="Login" render={props => <Login {...props} />} />
                    <Route exact path="/register" name="Register" render={props => <Register {...props} />} />
                    <Route exact path="/app" name="App" render={props => <App {...props} />} />
                    {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                    <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
                    <Authentication path="/" name="dashboard" authed={localStorageUser || user} component={Dashboard} />
                </Switch>
            </React.Suspense>
        </Router>
    );
}


export default PublicRoutes;
