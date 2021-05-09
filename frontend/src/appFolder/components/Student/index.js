import { Button } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BLockTitlBody, GetAssessments, Modal1, SelectMultiCstm } from "..";
import { AppContext } from "../../store";
import './index.css'


const Student = ({ id, avatar, firstname, lastname, email, schoolId, cardOnly }) => {
    const
        { store, setStore } = useContext(AppContext),
        [book, setBook] = useState([]);

    const onSelect = (ids) => setBook(ids)

    const onConf = () => {
        setStore({
            studentWorks: [
                ...store.studentWorks,
                { book, studentId: id }
            ]
        })
    }


    return (
        <div>
            <div className="cont">
                <div className="avat">{avatar}</div>
                <div>
                    <div>name: {`${firstname} ${lastname}`}</div>
                    <div>email: {email}</div>
                </div>
            </div>
            {cardOnly ? null :
                <div>
                    <Link
                        className="text-mid cont3"
                        to={`/classroom/${schoolId}`}
                    >goto classroom homeworks</Link>

                    <BLockTitlBody>
                        <Modal1
                            buttonText="Assign Book"
                            title="Assign Homework"
                            width="60%"
                        >
                            <div>
                                <SelectMultiCstm
                                    onSelect={onSelect}
                                    placeholder="add resourses"
                                    style={{ width: "50%", margin: "15px" }}
                                    data={
                                        store.resources
                                            .filter(f => f.type == 'book')
                                            .map(r => {
                                                let texts = r.path.split('/')
                                                return {
                                                    text: texts[texts.length - 1],
                                                    value: r.id
                                                }
                                            })}
                                />
                                <Button onClick={onConf}>Submit</Button>
                            </div>
                        </Modal1>
                    </BLockTitlBody>
                    <BLockTitlBody title="student homeworks">
                        {
                            store.studentWorks
                                .filter(sw => sw.studentId == id)
                                .map((sw, i) => (
                                    <div>
                                        <h3>Homework {i + 1}</h3>
                                        <GetAssessments.GetLinks
                                            rsrcs={store.resources}
                                            resources={sw.book}
                                            className="shft"
                                        />
                                    </div>
                                ))
                        }
                    </BLockTitlBody>
                </div>
            }
        </div>

    )
}

export default Student;