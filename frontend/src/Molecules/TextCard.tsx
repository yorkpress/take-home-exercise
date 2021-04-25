import { Card } from "Atoms/Boxes";
import { Heading } from "Atoms/Typographics";
import { MouseEventHandler } from "react";
import { FC } from "react";

interface TextCardProps {
  text: string;
  onClick?: MouseEventHandler;
}

export const TextCard: FC<TextCardProps> = (props) => {
  return (
    <Card w="20vw" h="20vh" m="20px" aCenter clickable onClick={props.onClick}>
      <Heading text={props.text} />
    </Card>
  );
};
