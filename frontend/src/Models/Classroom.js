import axios from 'axios';
import config from '../env';
import StudentModel from './Student';
import { StudentPage } from '../Pages';


const {BACKEND_URL} = config;
class ClassRoom{
    static classRoomInstance;
    name;
    enrollmentList =[];
    subscribersList={};
    constructor() {
      if (!ClassRoom.classRoomInstance) {
        return this.initialize();
      } else {
        return ClassRoom.classRoomInstance;
      }
    }
  
    initialize() {
        this.fetchEnrollmentList();
        ClassRoom.classRoomInstance = this;
        return ClassRoom.classRoomInstance;
    }
  
   
  
   
  
 
    
    getClassRoomName(){
      return this.name;
    }

    isEnrollmentListEmpty(){
        return this.enrollmentList.length === 0;
    }
  

    fetchEnrollmentList(){
        axios(`${BACKEND_URL}students`).then(res =>{

            console.log("[Tanawy is testing fetching students response ]",res);
            this.enrollmentList = res.data.map(student => new StudentModel(student) );
            this.name = this.enrollmentList[0].schoolId;
            this.notifySubscribers("students Data Received");

        }).catch(e=>{

            console.error("[Error while fetching students]", e);
        })

    }


    subscribeToUpdates(callback, identifier){

        this.subscribersList[identifier] = callback;

    }

    unsubscribeToUpdates(identifier){
        delete this.subscribersList[identifier];
    }

    notifySubscribers(message){
        let subscribers = Object.keys(this.subscribersList);

        subscribers.forEach(subscriber=>{

            let callback = this.subscribersList[subscribers];
            try{

                callback();
            }catch(e){
                console.error("[Error while notifying subscribers]", e);
            }
        })

    }
  
    
   
  }
  
  const instance = new ClassRoom();
   
  export default instance;
  
  