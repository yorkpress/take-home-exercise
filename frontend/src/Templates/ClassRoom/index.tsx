import { Card } from "Atoms/Boxes";
import { Heading } from "Atoms/Typographics";
import { StudentRow } from "Molecules";
import { TextRow } from "Molecules/TextRow";
import { AssignModal } from "Organisms";
import { FC } from "react";
import { IHomewrok, IStudent } from "types";
import styles from "./classRoom.module.css";

interface ClassRoomTemplateProps {
  navToStudent: (student: IStudent) => void;
  students: IStudent[];
  homeworks: IHomewrok[];
  onAssign: (homeworkName: string) => void;
  showModal: () => void;
  isModalOpen: boolean;
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
              onClick={() => props.navToStudent(student)}
            />
          );
        })}
      </Card>

      <button className={styles.assignBtn} onClick={() => props.showModal()}>
        Assign homework
      </button>

      <AssignModal
        isOpen={props.isModalOpen}
        label="Assign Homework"
        onAssign={props.onAssign}
        rows={props.homeworks.map((homework) => {
          return {
            Component: <TextRow text={homework.name} />,
            value: homework.name,
          };
        })}
      />
    </div>
  );
};
