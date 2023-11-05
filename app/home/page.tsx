import React from "react";
import tmdb from "@/util/tmdb";
import Carousel from "../components/carousel";
import Header from "../components/header";

type Props = {};

export const revalidate = 60;

export default async function Home({}: Props) {
  const popular = await tmdb.popular;
  const defaultBanner = await tmdb.detailedMovie(popular[0]);

  return (
    <>
      <Header item={defaultBanner} />
      <Carousel items={popular} title="Popular" autoplay={1000} />
    </>
  );
}
