import React, {Component} from 'react';
import ClassRoomModel from '../../Models/Classroom';
import './classroom.css'




export default class Classroom extends Component {



    constructor(props){
        super(props);
        this.state = {
            classRoomName: "",
            enrolledStudents:[],
            showModal: false
        }

        this.forceUpdate = this.forceUpdate.bind(this);
    }

    forceUpdate(){

        let {showModal} = this.state.showModal;
        this.setState({showModal});
    }

    componentWillMount(){

        ClassRoomModel.subscribeToUpdates(this.forceUpdate,"classromPage");
        console.log("component will mount classromm",{isEnrollmentListEmpty: ClassRoomModel.isEnrollmentListEmpty(), enrollmentList: ClassRoomModel.enrollmentList, enrollmentListState: this.state.enrolledStudents})
        if(ClassRoomModel.isEnrollmentListEmpty()){
            ClassRoomModel.fetchEnrollmentList();
            return;
        }
        this.setState({
            classRoomName: ClassRoomModel.name,
            enrolledStudents: ClassRoomModel.enrollmentList,
        });


    }
    componentWillUnmount(){
        ClassRoomModel.unsubscribeToUpdates("classromPage");


    }
    render(){


        return (
            <div className="classRoomMainWrapper">
               <div className="classRoomHeaderWrapper"><span>Classroom {this.state.classRoomName}</span></div>
                <div className="classRoomEnrollmentList">{this.state.enrolledStudents.map((student,index)=> <StudentElement student={student} key={index} />)}</div>
               <div className="classRoomAssignButton"><button onClick={event=>{this.setState({showModal:true});}}>assign homework</button></div>
               {this.state.showModal && <div className="AssignmentModalWrapper">
                   <span className="exitModal" onClick={(event=>{this.setState({showModal:false})})}>x</span>
                   <div className="modalContent">modal content</div>
               </div>}
            </div>
        );
    }
}

const StudentElement = (props) =>{

    let {student} = props;
    console.log("Tanawy is testing props of studentElement", props);

    return (
        <div className="studentInfoRow">
            <span className="studentName">{`${student.firstname} ${student.lastname}`}</span>


        </div>
    );
}