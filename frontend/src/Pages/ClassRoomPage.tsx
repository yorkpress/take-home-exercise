import { FC, useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ClassRoomTemplate } from "Templates";
import { IStudent } from "types";
import { Contexts } from "HOCs";

export const ClassRoomPage: FC = () => {
  const history = useHistory();
  const { APIClient } = useContext(Contexts.API);
  const [students, setStudents] = useState<IStudent[]>([]);

  function navToStudent(student: IStudent) {
    history.push({ pathname: `/student/${student.id}`, state: { student } });
  }

  const getStudents = useCallback(async () => {
    const { students } = await APIClient.Student.list();
    setStudents(students);
  }, [APIClient.Student]);

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  return <ClassRoomTemplate navToStudent={navToStudent} students={students} />;
};
