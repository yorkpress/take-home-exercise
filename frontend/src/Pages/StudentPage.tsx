import { FC } from "react";
import { StudentTemplate } from "Templates";

const student = {
  id: "5bd9e9fbecef8d003e003006",
  grade: "K1",
  firstname: "Student",
  lastname: "Invited",
  email: "student-invited@york-e.com",
  schoolId: "schYpEN01",
  avatar: "chocolate",
};

export const StudentPage: FC = () => {
  return <StudentTemplate student={student} assignedBook="GOOD BOOK" />;
};
