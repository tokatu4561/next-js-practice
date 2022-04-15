import React from "react";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";
import { SearchHeaderOption } from "./SearchHeaderOption";
import { useRouter } from "next/router";

export const SearchHeaderOptions = () => {
  const router = useRouter();

  return (
    <div className="flex space-x-8 w-full justify-center border-b-2 lg:justify-start">
      <SearchHeaderOption
        title="all"
        Icon={SearchIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
};
