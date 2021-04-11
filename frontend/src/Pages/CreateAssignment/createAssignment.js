
import React, {Component} from 'react';
import './createAssignment.css';


const QuestionFactory = (props)=>{


    console.log("this is questionFactory", props);

    return (<div>
        question factory
    </div>);
}

export default class CreateAssignment extends Component {



    constructor(props){
        super(props);

    }


    render(){


        return (
            <div className="CreateAssignmentMainWrapper">
               <div className="FormTitle">About your Assessment</div>
               <div className="FormInputAssessmentName"><input placeholder="enter assessment name" /></div>
               <div className="QuestionsTitle">Add Questions and answers</div>
               <div className="QuestionFactory"><QuestionFactory /></div>
            </div>
        );
    }
}