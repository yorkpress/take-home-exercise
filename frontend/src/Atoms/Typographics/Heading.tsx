import React, { FC } from "react";
import styled, { CSSObject, StyledProps } from "styled-components";

enum sizeOptions {
  "small",
  "medium",
  "large",
  "larger",
  "x-large",
  "xx-large",
}

interface HeadingProps extends CSSObject {
  text: string;
  bold?: string | number;
  size?: sizeOptions;
}

export const Heading: FC<HeadingProps> = (props) => {
  return <P>{props.text}</P>;
};

const P = styled.p`
    color: ${(props) => (props.color ? props.color : "black")};
    font-weight ${(props: HeadingProps) => (props.bold ? props.bold : "400")};
    font-size: ${(props: HeadingProps) => (props.size ? props.size : "x-large")}
`;
