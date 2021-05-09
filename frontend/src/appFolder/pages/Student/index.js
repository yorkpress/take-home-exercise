import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../store';
import Std from '../../components/Student';
import './index.css';

const Student = () => {
    const
        { id } = useParams(),
        [std, setStd] = useState({}),
        { store, setStore } = useContext(AppContext)


    useEffect(() => {
        let student = store.students.find(s=>s.id==id);
        setStore({pageTitle: ""});
        setStd(student)
    }, []);

    return (
        <div>
            <Std {...std} />
        </div>
    );
}

export default Student;