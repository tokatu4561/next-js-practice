import React from "react";
import { Post } from "./Post";

export const Posts = () => {
  const posts = [
    {
      id: 1,
      userName: "codeWith",
      userImg: "https://i.pravatar.cc/150?img=41",
      img: "https://i.pinimg.com/originals/87/ae/83/87ae8360cfe56fda3b49e609eb3b7c25.jpg",
      caption: "thanks for watch",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
