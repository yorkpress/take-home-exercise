import {createContext, useState} from 'react';

/**
 * i used contex to simblify project as possible
 * i would be use redux but i decided not to because of (time and simbisity)
 */

export const initState = {
    loggedIn: false,
    isLoading: false,
    students: [],
    resources: [],
    classrooms: [],
    assessments: [],
    studentWorks: [],
    pageTitle: "",
};


export const AppContext = createContext();

const Provider = ({children}) => {

    const [store, setToStore] = useState(initState);

    const setStore = (data) => setToStore({
        ...store,
        ...data
    })

    return (
        <AppContext.Provider value={{store, setStore}}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;