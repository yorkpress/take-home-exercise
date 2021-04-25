import React, { FC } from "react";
import styled from "styled-components";
import { IDivStyle } from "types";

interface CardProps extends IDivStyle {
  children: React.ReactNode;
}

export const Card: FC<CardProps> = (props) => {
  return <CardContainer {...props}>{props.children}</CardContainer>;
};

const CardContainer = styled.div<CardProps>`
  box-shadow: 5px 7px 6px -1px rgba(99, 99, 99, 0.6);
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.aCenter ? "center" : undefined)};
  align-items: ${(props) => (props.aCenter ? "center" : undefined)};
  width: ${(props) => (props.w ? props.w : undefined)};
  height: ${(props) => (props.h ? props.h : undefined)};
  align-text: ${(props) => (props.centerText ? "center" : undefined)};
  cursor: ${(props) => (props.clickable ? "pointer" : "auto")};
`;
