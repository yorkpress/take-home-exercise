import { Avatar } from "Atoms";
import { Heading } from "Atoms/Typographics";
import { FC } from "react";
import styled from "styled-components";
import { IStudent } from "types";

export const StudentRow: FC<IStudent> = (props) => {
  return (
    <Row>
      <Avatar width={50} height={50} type="img" seed={props.avatar} />
      <Heading text={`${props.firstname} ${props.lastname}`} />
      <Heading text={props.email} />
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
  height: 10vh;
  border-bottom: 1px solid #cfcfcf;
  margin-left: 2%;
  margin-top: 2%;
  cursor: pointer;
`;
