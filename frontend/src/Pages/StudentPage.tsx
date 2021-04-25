import { FC } from "react";
import { useLocation } from "react-router";
import { StudentTemplate } from "Templates";
import { IStudent } from "types";

interface LocationState {
  student: IStudent;
}

export const StudentPage: FC = () => {
  const location = useLocation<LocationState>();
  const student = location.state.student;

  return <StudentTemplate student={student} assignedBook="GOOD BOOK" />;
};
