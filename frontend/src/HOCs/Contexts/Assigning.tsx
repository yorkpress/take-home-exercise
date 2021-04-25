import { createContext, FC, useState } from "react";

interface studentBookAssignment {
  studentId: string;
  bookName: string;
}

interface IAssigningContext {
  assignedHomework?: string;
  studentsBooksAssignments: studentBookAssignment[];
  assingHomework: (homeworkName: string) => void;
  assingToStudent: (studentId: string, bookName: string) => void;
}

const AssigningContextInitialValue = {
  assignedHomework: undefined,
  studentsBooksAssignments: [],
  assingHomework: (homeworkName: string) => {},
  assingToStudent: (studentId: string, bookName: string) => {},
};

export const AssigningContext = createContext<IAssigningContext>(
  AssigningContextInitialValue
);

export const AssigingProvider: FC = ({ children }) => {
  const [assignedHomework, setAssignedHomework] = useState<string>();
  const [studentsBooksAssignments, setStudentsBooksAssignments] = useState<
    studentBookAssignment[]
  >([]);

  function assingHomework(homeworkName: string) {
    setAssignedHomework(homeworkName);
  }

  function assingToStudent(studentId: string, bookName: string) {
    setStudentsBooksAssignments([
      ...studentsBooksAssignments,
      { studentId, bookName },
    ]);
  }

  return (
    <AssigningContext.Provider
      value={{
        assignedHomework,
        studentsBooksAssignments,
        assingHomework,
        assingToStudent,
      }}
    >
      {children}
    </AssigningContext.Provider>
  );
};
