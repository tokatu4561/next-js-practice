import { signOut, useSession } from "next-auth/react";

export const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session && session.user?.image}
        className="h-16 rounded-full border p-[2px]"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">{session?.user?.name}</h2>
        <h3 className="text-sm text-gray-400">
          Welcome to instagram clone app
        </h3>
      </div>
      <button
        onClick={function () {
          signOut();
        }}
        className="font-semibold text-blue-400 text-sm"
      >
        Sign out
      </button>
    </div>
  );
};
