import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Feed } from "../components/Feed";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram Clone App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ヘッダー */}

      <Header />

      <Feed />
      {/* モーダル */}
    </div>
  );
};

export default Home;
