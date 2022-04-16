import React, { FC } from "react";
import Parser from "html-react-parser";
import { GoogleApiResults } from "../types/google-api-type";

interface Props {
  results: GoogleApiResults;
}

export const SearchResults: FC<Props> = ({ results }) => {
  return (
    <div className="w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-4">
        About {results.searchInformation.formattedTotalResults} results
        {results.searchInformation.formattedSearchTime}
      </p>
      {results.items.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a className="text-sm">{result.link}</a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};
