import { Card } from "Atoms/Boxes";
import { Heading } from "Atoms/Typographics";
import { StudentRow } from "Molecules";
import { FC } from "react";
import styles from "./classRoom.module.css";

const students = [
  {
    id: "5bd9e9fbecef8d003e003001",
    grade: "K1",
    firstname: "Student",
    lastname: "EN",
    email: "student@york-e.com",
    schoolId: "schYpEN01",
    avatar: "books",
  },
  {
    id: "5bd9e9fbecef8d003e003002",
    grade: "K1",
    firstname: "Student",
    lastname: "Two",
    email: "student-two@york-e.com",
    schoolId: "schYpEN01",
    avatar: "ladybird",
  },
  {
    id: "5bd9e9fbecef8d003e003003",
    grade: "K1",
    firstname: "Student",
    lastname: "Three",
    email: "student-three@york-e.com",
    schoolId: "schYpEN01",
    avatar: "paint",
  },
  {
    id: "5bd9e9fbecef8d003e003004",
    grade: "K1",
    firstname: "Student",
    lastname: "Four",
    email: "student-four@york-e.com",
    schoolId: "schYpEN01",
    avatar: "tableTennis",
  },
  {
    id: "5bd9e9fbecef8d003e003005",
    grade: "K1",
    firstname: "Student",
    lastname: "Five",
    email: "student-five@york-e.com",
    schoolId: "schYpEN01",
    avatar: "tomato",
  },
  {
    id: "5bd9e9fbecef8d003e003006",
    grade: "K1",
    firstname: "Student",
    lastname: "Invited",
    email: "student-invited@york-e.com",
    schoolId: "schYpEN01",
    avatar: "chocolate",
  },
];

export const ClassRoomTemplate: FC = () => {
  return (
    <div className={styles.mainSection}>
      <Heading text="Math Classroom" bold="600" />
      <Card row wrap p="4vh 0 8vh 0" m="5vh 0">
        {students.map((student) => {
          return <StudentRow {...student} />;
        })}
      </Card>
    </div>
  );
};
