import { useContext, useEffect, useState } from 'react';
import { Collapse, Student, Modal1, Assignment, GetAssessments } from '../../components';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../store';
import { addAssignment } from '../../apis';
import { List } from 'antd';

const Classroom = () => {
    const
        { id } = useParams(),
        [stds, setStds] = useState([]),
        { store, setStore } = useContext(AppContext);


    useEffect(() => {
        setStore({
            pageTitle: `Class-room : ${store.classrooms
                .find(s => s.schoolId == id).grade}`
        })
    }, []);

    useEffect(() => {
        let students = store.students
            .filter(s => s.schoolId == id);

        setStds(students);
    }, []);

    const onConfirm = async (ass) => {
        const data = {
            students: stds.map(s => s.id),
            date: new Date().getTime(),
            ...ass,
            id,
        }

        const req = await addAssignment(data);

        if (req.status == 201)
            setStore({
                assessments: [
                    ...store.assessments,
                    data
                ]
            })
    }


    return (
        <div>
            <Collapse
                collapseStyle={{ marginBottom: "20px" }}
                data={[
                    {
                        header: (
                            <div className="panel-header">
                                Students
                            </div>
                        ),
                        body: (
                            <List
                                bordered
                                dataSource={stds}
                                renderItem={item => (
                                    <List.Item>
                                        <Link
                                            style={{ width: "100%" }}
                                            to={`/student/${item.id}`}
                                        >
                                            <Student {...item} />
                                        </Link>
                                    </List.Item>
                                )}
                            />
                        )
                    }
                ]}
            />
            <Modal1
                buttonText="Assign Homework"
                title="Assign Homework"
                width="60%"
            >
                <Assignment onConfirm={onConfirm} />
            </Modal1>
            <GetAssessments
                assessments={store.assessments.filter(ass=>ass.id==id)}
                rsrcs={store.resources}
            />
        </div>
    );
}

export default Classroom;