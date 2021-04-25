import { Contexts } from "HOCs";
import { FC, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { StudentTemplate } from "Templates";
import { IResource, IStudent } from "types";

interface LocationState {
  student: IStudent;
}

export const StudentPage: FC = () => {
  const location = useLocation<LocationState>();
  const student = location.state.student;
  const [assignedBook, setAssignedBook] = useState<string | undefined>();
  const [books, setBooks] = useState<IResource[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { studentsBooksAssignments, assingToStudent } = useContext(
    Contexts.Assigning
  );
  const { APIClient } = useContext(Contexts.API);

  function assign(bookName: string) {
    assingToStudent(student.id, bookName);
    setIsModalOpen(false);
  }

  async function getBooks() {
    const { resources } = await APIClient.Resource.list();
    setBooks(resources.filter((resource) => resource.type === "book"));
  }

  function showModal() {
    getBooks();
    setIsModalOpen(true);
  }

  useEffect(() => {
    studentsBooksAssignments.forEach((studentBookAssignment) => {
      if (studentBookAssignment.studentId === student.id) {
        setAssignedBook(studentBookAssignment.bookName);
      }
    });
  }, [studentsBooksAssignments, student]);

  return (
    <StudentTemplate
      student={student}
      assignedBook={assignedBook}
      showModal={showModal}
      isModalOpen={isModalOpen}
      assign={assign}
      books={books}
    />
  );
};
