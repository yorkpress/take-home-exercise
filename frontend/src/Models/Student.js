


export default class Student {
    constructor(studentObj){

        // tempStudentObj = {
        //     "id": "5bd9e9fbecef8d003e003001",
        //     "grade": "K1",
        //     "firstname": "Student",
        //     "lastname": "EN",
        //     "email": "student@york-e.com",
        //     "schoolId": "schYpEN01",
        //     "avatar": "books"
        //   }

          this.id                   = studentObj.id;
          this.grade                = studentObj.grade;
          this.firstname            = studentObj.firstname;
          this.lastname             = studentObj.lastname;
          this.email                = studentObj.email;
          this.schoolId             = studentObj.schoolId;
          this.avatar               = studentObj.avatar;
          this.assignedResources    = [];
          this.assignedHomeWork     = [];


    }


    assignResource(resourceObj){
        this.assignedResources.push(resourceObj);
    }

    assignHomework(assignment){
        this.assignedHomeWork.push(assignment);
    }

    removeResource(resourceObj){
        this.assignedResources = this.assignedResources.filter(resource => resource.id !== resourceObj.id);
    }

    removeHomework(assignment){
        this.assignedHomeWork = this.assignedHomeWork.filter((hw)=> hw.id !== assignment.id );
    }
}