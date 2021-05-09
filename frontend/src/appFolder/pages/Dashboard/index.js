import { Fragment, useContext, useEffect, useState } from 'react';
import Classes from '../../components/Classes';
import { AppContext } from '../../store';
import './index.css';

const Dashboard = () => {
    const
    {store, setStore} = useContext(AppContext)

    useEffect(()=>{setStore({pageTitle: "Dashboard"})}, []);

    return (
        store.classrooms.length ?
        <Classes data={store.classrooms} /> :
        <Fragment></Fragment>
    );
}

export default Dashboard;