import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AppContext } from '../store';


const PublicRoute = ({ restrected = false, ...rest }) => {
    const { store } = useContext(AppContext);

    return (
        store.loggedIn && restrected ?
            <Redirect exact to='/dashboard' /> :
            <Route {...rest} />
    )
}

export default PublicRoute