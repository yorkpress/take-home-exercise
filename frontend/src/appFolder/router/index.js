import {lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const
    Login = lazy(()=>import('../pages/Login')),
    Error = lazy(()=>import('../pages/Error')),
    Dashboard = lazy(()=>import('../pages/Dashboard')),
    Classroom = lazy(()=>import('../pages/Classroom')),
    Student = lazy(()=>import('../pages/Student'));

export default () => (
    <Router>
        <Switch>
            <PublicRoute exact path='/' restrected component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/classroom/:id' component={Classroom} />
            <PrivateRoute exact path='/student/:id' component={Student} />
            <PublicRoute exact path='/error' component={Error} />
            <Redirect exact to='/error' />
        </Switch>
    </Router>
)