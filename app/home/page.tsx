import React from "react";
import tmdb from "@/util/tmdb";
import Carousel from "../components/carousel";
import Header from "../components/header";

type Props = {};

export const revalidate = 60;

export default async function Home({}: Props) {
  const popular = await tmdb.detailedMediaMultiple(await tmdb.popular);

  return (
    <>
      <Header item={popular![0]} />
      <Carousel
        items={popular!}
        title="Popular"
        autoplay={3000}
        updateBanner={true}
      />
    </>
  );
}
