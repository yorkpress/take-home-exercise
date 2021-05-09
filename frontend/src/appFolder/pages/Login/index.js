import { Button } from 'antd'
import { useContext, useEffect, useState } from 'react';
import { getResources, getStudents } from '../../apis';
import { AppContext } from '../../store';
import './index.css';

const Login = () => {
    const
        { setStore } = useContext(AppContext),
        [loading, setLoading] = useState(false)

    const onLogin = () => {
        setLoading(true);

        //server call simulation :)
        setTimeout(async () => {
            let
                students = await getStudents(),
                resources = await getResources();


            if (students.data && resources.data) {
                setLoading(false);

                students = students.data.students;
                resources = resources.data.resources;
                
                const classrooms = students.reduce((acc, itm)=>(
                    acc.map(a=>a.grade).includes(itm.grade) ?
                    acc : [...acc,
                        {
                            grade: itm.grade,
                            schoolId: itm.schoolId,
                            students: students.filter(s=>s.grade == itm.grade).length
                        }]
                ), []);

                setStore({
                    loggedIn: true,
                    students,
                    resources,
                    classrooms,
                });
            }
        }, 1000);
    }

    return (
        <div className='full'>
            <div className='login-logo'>Class-rooms</div>
            <Button
                size="large"
                type="primary"
                loading={loading}
                onClick={() => onLogin()}
            >
                Login
            </Button>
        </div>
    );
}

export default Login;