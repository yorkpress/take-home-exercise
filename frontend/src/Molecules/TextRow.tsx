import { FC } from "react";
import styled from "styled-components";

interface TextRowProps {
  text: string;
}

export const TextRow: FC<TextRowProps> = (props) => {
  return <Row>{props.text}</Row>;
};

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #cfcfcf;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;
