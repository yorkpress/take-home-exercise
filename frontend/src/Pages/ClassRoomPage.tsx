import { FC } from "react";
import { useHistory } from "react-router";
import { ClassRoomTemplate } from "Templates";

export const ClassRoomPage: FC = () => {
  const history = useHistory();

  function navToStudent(studentId: string) {
    console.log(studentId);
    history.push(`/student/${studentId}`);
  }

  return <ClassRoomTemplate navToStudent={navToStudent} />;
};
