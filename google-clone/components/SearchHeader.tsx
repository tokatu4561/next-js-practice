import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { User } from "./User";

export default function SearchHeader() {
  const router = useRouter();

  const [enterdValue, setEnterdValue] = useState("");

  const onChangeValue = (event: any) => {
    setEnterdValue(event.target.value);
  };

  return (
    <header className="flex justify-between p-5 text-gray-700">
      <div className="flex items-center w-full">
        <Image
          onClick={() => router.push("/")}
          width="120"
          height="40"
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        />

        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-8 mr-4 flex-grow">
          <input
            type="text"
            value={enterdValue}
            onChange={onChangeValue}
            name=""
            id=""
            className="w-full focus:outline-none"
          />
          <XIcon
            onClick={() => {
              setEnterdValue("");
            }}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
}
