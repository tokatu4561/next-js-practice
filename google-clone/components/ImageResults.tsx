import React, { FC } from "react";
import { GoogleApiResults } from "../types/google-api-type";

interface Props {
  results: GoogleApiResults;
}

export const ImageResults: FC<Props> = ({ results }) => {
  return (
    <div>
      <div className="">
        {results.items.map((result) => (
          <div className="group">
            <a href={result.image.contextLink}>
              <img src={result.link} alt={result.title} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
