import React, { FC } from "react";
import { signIn, useSession, signOut } from "next-auth/react";

interface Props {
  className: string;
}

export const User: FC<Props> = ({ className }) => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <img
          onClick={function () {
            signOut();
          }}
          src={session.user.image}
          alt="user-image"
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
        />
      </>
    );
  }

  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        onClick={function () {
          signIn();
        }}
      >
        Sign in
      </button>
    </>
  );
};
