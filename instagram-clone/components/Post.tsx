import {
  BookmarkAltIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import React, { FC } from "react";
import { PostType } from "../types/Post";

interface Props {
  post: PostType;
}

export const Post: FC<Props> = ({ post }) => {
  const { userName, userImg, img, caption } = post;

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

      {/* post buttons */}
      <div className="flex justify-between px-4">
        <div className="flex">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkAltIcon className="btn" />
      </div>

      {/* post comments */}
      <p className="p-5 truncate">
        <span className="font-bold">{userName}</span>
        {caption}
      </p>

      {/* post input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-8" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          name=""
          placeholder="入力してください"
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
};
