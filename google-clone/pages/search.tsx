import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { PaginationButtons } from "../components/PaginationButtons";
import SearchHeader from "../components/SearchHeader";
import { SearchResults } from "../components/SearchResults";
import Response from "../Response";
import { GoogleApiResults } from "../types/google-api-type";

interface Props {
  results: GoogleApiResults;
}

export default function Search({ results }: Props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      <SearchHeader />

      <SearchResults results={results} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mockData = true;

  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};
