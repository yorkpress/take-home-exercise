import { Avatar } from "Atoms";
import { Heading } from "Atoms/Typographics";
import { TextRow } from "Molecules/TextRow";
import { AssignModal } from "Organisms";
import { FC } from "react";
import { colors } from "styleGuide/colors";
import { IResource, IStudent } from "types";
import styles from "./studentTemplate.module.css";

interface StudentTemplateProps {
  student?: IStudent;
  assignedBook?: string;
  showModal: () => void;
  isModalOpen: boolean;
  assign: (bookName: string) => void;
  books: IResource[];
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
          <button
            className={styles.assignBtn}
            onClick={() => props.showModal()}
          >
            Assign book
          </button>
        </div>
      )}

      <AssignModal
        isOpen={props.isModalOpen}
        onAssign={props.assign}
        label="Assign book to student"
        rows={props.books.map((book) => {
          const bookName = book.path.split("/").pop();
          return {
            Component: <TextRow text={bookName ?? "Book Name"} />,
            value: bookName,
          };
        })}
      />

      {!student && (
        <Heading text={"Student Not Found!"} bold="600" size="3em" />
      )}
    </>
  );
};
