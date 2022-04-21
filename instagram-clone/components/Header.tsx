import Image from "next/image";
import React from "react";
import { SearchIcon, PlusCircleIcon, HomeIcon } from "@heroicons/react/outline";

export const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-4 md:mx-auto">
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-block">
        {/* 左側 */}
        <Image
          src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
          layout="fill"
          className="object-contain"
        />
      </div>

      <div className="cursor-pointer h-24 w-10 relative lg:hidden">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
          layout="fill"
          className="object-contain"
        />
      </div>

      {/* 真中 */}
      <div className="relative">
        <SearchIcon className="absolute top-3 left-2 h-4" />
        <input
          type="text"
          name=""
          id=""
          placeholder="検索"
          className="pl-8 bg-gray-50 border-gray-500 text-gray-500 focus:border-black focus:ring-black rounded-md"
        />
      </div>

      {/* 右側 */}
      <div className="flex items-center space-x-4">
        <HomeIcon className="hidden md:inline-block h-8 cursor-pointer transition-transform hover:scale-125 duration-200" />
        <PlusCircleIcon className="h-8 cursor-pointer transition-transform hover:scale-125 duration-200" />
        <img src="" alt="" className="h-10 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};
