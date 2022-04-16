import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export const PaginationButtons = () => {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="flex justify-between px-12 pb-4 text-blue-700 sm:justify-start sm:space-x-44 sm:px-0">
      {/* prev page button */}
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Prev</p>
          </div>
        </Link>
      )}
      {/* next page button */}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};
