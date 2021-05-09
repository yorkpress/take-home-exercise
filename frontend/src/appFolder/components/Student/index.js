import React from "react";
import './index.css'


const Student = ({ avatar, firstname, lastname, email }) => (
    <div className="cont">
        <div className="avat">{avatar}</div>
        <div>
            <div>name: {`${firstname} ${lastname}`}</div>
            <div>email: {email}</div>
        </div>
    </div>
)

export default Student;