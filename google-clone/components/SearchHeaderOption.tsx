import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  title: string;
  Icon: any;
  selected: boolean;
}

export const SearchHeaderOption: FC<Props> = ({ title, Icon, selected }) => {
  const router = useRouter();

  const selectTab = () => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      onClick={selectTab}
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer pb-3 ${
        selected && "text-blue-500 border-blue-500"
      }`}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
};
