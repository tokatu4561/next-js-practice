import React, { FC } from "react";
import { User } from "../types/User";

interface Props {
  user: User;
}

export const Story: FC<Props> = ({ user }) => {
  const { userName, img } = user;

  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border cursor-pointer hover:scale-110 duration-200"
        src={img}
      />
      <p className="text-sm w-14 truncate">{userName}</p>
    </div>
  );
};
