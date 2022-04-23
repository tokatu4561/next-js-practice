import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React, { FC } from "react";
import { PostType } from "../types/Post";

interface Props {
  post: PostType;
}

export const Post: FC<Props> = ({ post }) => {
  const { userName, userImg, img } = post;
  return (
    <div className="bg-white border mt-4">
      {/* post header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full border p-1 mr-4"
          src={userImg}
          alt={userName}
        />
        <p className="font-bold flex-1">{userName}</p>
        <DotsHorizontalIcon className="h-4" />
      </div>

      {/* post image */}
      <div className="">
        <img className="max-h-screen w-full object-cover " src={img} alt="" />
      </div>
    </div>
  );
};
