import React, { FC } from "react";
import { PostType } from "../types/Post";

interface Props {
  post: PostType;
}

export const Post: FC<Props> = ({ post }) => {
  const { userName } = post;
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
};
