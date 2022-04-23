import React from "react";
import { Posts } from "./Posts";
import Stories from "./Stories";

export const Feed = () => {
  return (
    <main>
      <section>
        {/* ストーリー */}
        <Stories />
        {/* 投稿 */}
        <Posts />
      </section>
    </main>
  );
};
