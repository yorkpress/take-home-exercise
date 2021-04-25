import { Card } from "Atoms/Boxes";
import { Heading } from "Atoms/Typographics";
import { StudentRow } from "Molecules";
import { FC } from "react";
import { IStudent } from "types";
import styles from "./classRoom.module.css";

interface ClassRoomTemplateProps {
  navToStudent: (studentId: string) => void;
  students: IStudent[];
}

export const ClassRoomTemplate: FC<ClassRoomTemplateProps> = (props) => {
  return (
    <div className={styles.mainSection}>
      <Heading text="Math Classroom" bold="600" />
      <Card row isWrap p="4vh 0 8vh 0" m="5vh 0">
        {props.students.map((student) => {
          return (
            <StudentRow
              key={student.id}
              {...student}
              onClick={() => props.navToStudent(student.id)}
            />
          );
        })}
      </Card>

      <button className={styles.assignBtn}>Assign homework</button>
    </div>
  );
};
