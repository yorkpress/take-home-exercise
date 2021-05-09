import React from "react";
import { Fragment } from "react";
import { useContext } from "react"
import { AppContext } from "../../store"


const Loading = ({ loading }) => {
    let { isLoading } = useContext(AppContext);

    return (
        (loading || isLoading) ?
            <div>loading</div> :
            <Fragment></Fragment>
    )
}

export default Loading;