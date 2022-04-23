import React from "react";
import { MiniProfile } from "./MiniProfile";
import { Posts } from "./Posts";
import Stories from "./Stories";

export const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl">
      <section className="md:col-span-2">
        {/* ストーリー */}
        <Stories />
        {/* 投稿 */}
        <Posts />
      </section>

      <section className="hidden md:inline-block md:col-span-1">
        <div className="fixed">
          <MiniProfile />
        </div>
      </section>
    </main>
  );
};
