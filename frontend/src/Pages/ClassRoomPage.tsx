import { FC, useCallback, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { ClassRoomTemplate } from "Templates";
import { IHomewrok, IStudent } from "types";
import { Contexts } from "HOCs";

export const ClassRoomPage: FC = () => {
  const history = useHistory();
  const { APIClient } = useContext(Contexts.API);
  const { assingHomework, assignedHomework } = useContext(Contexts.Assigning);
  const [students, setStudents] = useState<IStudent[]>([]);
  const [homeworks, setHomeworks] = useState<IHomewrok[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function navToStudent(student: IStudent) {
    history.push({ pathname: `/student/${student.id}`, state: { student } });
  }

  function onAssign(homeworkName: string) {
    assingHomework(homeworkName);
    setIsModalOpen(false);
  }

  const getStudents = useCallback(async () => {
    const { students } = await APIClient.Student.list();
    setStudents(students);
  }, [APIClient.Student]);

  const getHomeworks = useCallback(() => {
    const homeworks = APIClient.Homework.list();
    setHomeworks(homeworks);
  }, [APIClient.Homework]);

  useEffect(() => {
    getStudents();
  }, [getStudents]);

  useEffect(() => {
    getHomeworks();
  }, [getHomeworks]);

  return (
    <ClassRoomTemplate
      navToStudent={navToStudent}
      students={students}
      homeworks={homeworks}
      onAssign={onAssign}
      showModal={() => setIsModalOpen(true)}
      isModalOpen={isModalOpen}
      assignedHomework={assignedHomework}
    />
  );
};
