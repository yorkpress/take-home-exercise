import React from "react";
import './index.css'

const BLockTitlBody = ({ title, ...rest }) => {

    return (
        <div>
            {!title?null: <h3 className="header1">{title}</h3>}
            <div className="cont1">
                {rest.children}
            </div>
        </div>
    )
}

export default BLockTitlBody;