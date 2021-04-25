import React, { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import { IDivStyle } from "types";

interface CardProps extends IDivStyle {
  children: React.ReactNode;
  onClick?: MouseEventHandler;
}

export const Card: FC<CardProps> = (props) => {
  return (
    <CardContainer {...props} onClick={props.onClick}>
      {props.children}
    </CardContainer>
  );
};

const CardContainer = styled.div<CardProps>`
  box-shadow: 4px 4px 12px 5px rgba(164, 160, 160, 0.75);
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.aCenter ? "center" : undefined)};
  align-items: ${(props) => (props.aCenter ? "center" : undefined)};
  width: ${(props) => (props.w ? props.w : undefined)};
  height: ${(props) => (props.h ? props.h : undefined)};
  align-text: ${(props) => (props.centerText ? "center" : undefined)};
  cursor: ${(props) => (props.clickable ? "pointer" : "auto")};
  margin: ${(props) => (props.m ? props.m : undefined)};
  padding: ${(props) => (props.p ? props.p : undefined)};
  flex-wrap: ${(props) => (props.isWrap ? "wrap" : undefined)};
  transition: all 0.3s;
  :hover {
    box-shadow: 6px 6px 14px 7px rgba(164, 160, 160, 0.75);
  }
`;
