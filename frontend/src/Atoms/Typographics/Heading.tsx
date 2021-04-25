import { FC } from "react";
import styled, { css } from "styled-components";

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
  size?: sizeOptions | string;
  m?: string;
  color?: string;
  ellipsis?: boolean;
  width?: string;
}

export const Heading: FC<HeadingProps> = (props) => {
  return (
    <P {...props} title={props.text}>
      {props.text}
    </P>
  );
};

const P = styled.p<HeadingProps>`
    color: ${(props) => (props.color ? props.color : "black")};
    font-weight ${(props) => (props.bold ? props.bold : "400")};
    font-size: ${(props) => (props.size ? props.size : "x-large")};
    margin: ${(props) => (props.m ? props.m : undefined)};
    width: ${(props) => props.width};
    ${(props) =>
      props.ellipsis
        ? css`
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          `
        : undefined}
`;
