import { Avatar } from "Atoms";
import { Heading } from "Atoms/Typographics";
import { FC } from "react";
import { colors } from "styleGuide/colors";
import { IStudent } from "types";
import styles from "./studentTemplate.module.css";

interface StudentTemplateProps {
  student: IStudent | null;
  assignedBook?: string;
}

export const StudentTemplate: FC<StudentTemplateProps> = (props) => {
  const { student } = props;
  return (
    <>
      {student && (
        <div className={styles.mainSection}>
          <Avatar seed={student.avatar} type="img" width={100} height={100} />
          <div className={styles.studentBookSection}>
            <Heading
              text={`${student.firstname} ${student.lastname}`}
              bold="300"
              size="2em"
              m="4px 0px"
            />
            {props.assignedBook && (
              <Heading
                text={props.assignedBook}
                bold="bolder"
                size=".8em"
                m="0px 2px"
                color={colors.blue}
              />
            )}
          </div>
          <button className={styles.assignBtn}> Assign book </button>
        </div>
      )}
      {!student && (
        <Heading text={"Student Not Found!"} bold="600" size="3em" />
      )}
    </>
  );
};
