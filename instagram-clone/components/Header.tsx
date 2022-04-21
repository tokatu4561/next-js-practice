import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl">
      <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-block">
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

      <h1>right side</h1>
    </div>
  );
};
