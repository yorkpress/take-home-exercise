import React, { FC, useCallback } from "react";
import { createAvatar } from "@dicebear/avatars";
import * as initialsStyle from "@dicebear/avatars-initials-sprites";
import * as avataaarsStyle from "@dicebear/avatars-avataaars-sprites";

interface AvatarProps {
  type: "text" | "img";
  seed: string;
  width: number;
  height: number;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { type, seed, width, height } = props;

  const getAvatar = useCallback(() => {
    const usedStyle = type === "text" ? initialsStyle : avataaarsStyle;
    let Svg = createAvatar(usedStyle, {
      seed,
      radius: 50,
      width,
      height,
    });
    return Svg;
  }, [type, seed, width, height]);

  return <img src={`data:image/svg+xml;utf8,${getAvatar()}`} alt="" />;
};
