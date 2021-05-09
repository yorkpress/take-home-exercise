import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import { AppContext } from '../store';


const PrivateRoute = ({ ...rest }) => {
    let { store } = useContext(AppContext);

    return (
        store.loggedIn ?
            <Layout>
                <Route {...rest} />
            </Layout>
            : <Redirect exact to='/' />
    )
}

export default PrivateRoute