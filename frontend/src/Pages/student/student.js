import React, {Component} from 'react';




export default class Student extends Component {



    constructor(props){
        super(props);

    }


    render(){


        return (
            <div className="dashboardMainWrapper">
                <button className="assignmentBotton" onClick={()=>{window.location.href='/classroom'}}>Assign homework</button>
            </div>
        );
    }
}