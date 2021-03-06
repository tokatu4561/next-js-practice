import { useSession } from "next-auth/react";
import React from "react";
import { MiniProfile } from "./MiniProfile";
import { Posts } from "./Posts";
import Stories from "./Stories";
import { Suggestions } from "./Suggestions";

export const Feed = () => {
  const { data: session } = useSession();

  return (
    <main
      className={`grid mx-auto ${
        session
          ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl"
          : "md:grid-cols-2 md:max-w-3xl"
      } `}
    >
      <section className="md:col-span-2">
        {/* ストーリー */}
        <Stories />
        {/* 投稿 */}
        <Posts />
      </section>

      <section className="hidden md:inline-block md:col-span-1">
        <div className="fixed">
          <MiniProfile />

          <Suggestions />
        </div>
      </section>
    </main>
  );
};
