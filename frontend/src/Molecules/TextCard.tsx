import { Card } from "Atoms/Boxes";
import { Heading } from "Atoms/Typographics";
import { FC } from "react";

interface TextCardProps {
  text: string;
}

export const TextCard: FC<TextCardProps> = (props) => {
  return (
    <Card w="20vw" h="20vh" m="20px" aCenter clickable>
      <Heading text={props.text} />
    </Card>
  );
};
