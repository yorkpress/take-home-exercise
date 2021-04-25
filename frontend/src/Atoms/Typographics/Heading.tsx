import React, { FC } from "react";
import styled from "styled-components";

enum sizeOptions {
  "small",
  "medium",
  "large",
  "larger",
  "x-large",
  "xx-large",
}

interface HeadingProps {
  text: string;
  bold?: string | number;
  size?: sizeOptions;
  m?: string;
}

export const Heading: FC<HeadingProps> = (props) => {
  return <P {...props}>{props.text}</P>;
};

const P = styled.p<HeadingProps>`
    color: ${(props) => (props.color ? props.color : "black")};
    font-weight ${(props) => (props.bold ? props.bold : "400")};
    font-size: ${(props) => (props.size ? props.size : "x-large")};
    margin: ${(props) => (props.m ? props.m : undefined)};
`;
