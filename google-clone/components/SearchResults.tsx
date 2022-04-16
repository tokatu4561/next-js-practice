import React, { FC } from "react";
import { GoogleApiResults } from "../types/google-api-type";

interface Props {
  results: GoogleApiResults;
}

export const SearchResults: FC<Props> = ({ results }) => {
  return (
    <div className="w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm">
        About {results.searchInformation.formattedTotalResults} results
        {results.searchInformation.formattedSearchTime}
      </p>
    </div>
  );
};
