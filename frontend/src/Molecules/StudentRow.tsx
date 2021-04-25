import { Avatar } from "Atoms";
import { Heading } from "Atoms/Typographics";
import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import { colors } from "styleGuide/colors";
import { IStudent } from "types";

interface StudentRowProps extends IStudent {
  onClick?: MouseEventHandler;
}

export const StudentRow: FC<StudentRowProps> = (props) => {
  return (
    <Row onClick={props.onClick}>
      <Avatar width={50} height={50} type="img" seed={props.avatar} />
      <Heading
        text={`${props.firstname} ${props.lastname}`}
        size="1.3em"
        width="30%"
        ellipsis
      />
      <Heading
        text={props.email}
        color={colors.blue}
        size="1.3em"
        ellipsis
        width="40%"
      />
      <Avatar width={50} height={50} type="text" seed={props.grade} />
    </Row>
  );
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-width: 45%;
  max-width: 45%;
  height: 10vh;
  border-bottom: 1px solid #cfcfcf;
  margin-left: 2%;
  margin-top: 2%;
  cursor: pointer;
`;
