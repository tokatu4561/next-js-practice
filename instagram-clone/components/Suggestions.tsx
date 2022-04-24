import React, { useEffect, useState } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import { Suggestion } from "./Suggestion";

interface SuggestionType {
  username: string;
  jobTitle: string;
  id: number;
}

export const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<SuggestionType[]>([]);

  useEffect(() => {
    const suggestions = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mt-4">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} suggestion={suggestion} />
      ))}
    </div>
  );
};
