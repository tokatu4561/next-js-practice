import React, { FC } from "react";

interface SuggestionType {
  username: string;
  jobTitle: string;
  id: number;
}

interface Props {
  suggestion: SuggestionType;
}

export const Suggestion: FC<Props> = ({ suggestion }) => {
  const { username, jobTitle } = suggestion;

  return (
    <div className="flex mt-4">
      <img
        className="h-10 rounded-full border p-[2px]"
        src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`}
        alt=""
      />
      <div className="flex-1 text-sm ml-4">
        <h2 className="font-semibold">{username}</h2>
        <h3 className="truncate w-[230px] text-gray-500">{jobTitle}</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Follow</button>
    </div>
  );
};
