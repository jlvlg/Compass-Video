import React from "react";
import tmdb from "@/util/tmdb";
import Banner from "../components/banner";
import Carousel from "../components/ui/carousel";

type Props = {};

export const revalidate = 60;

export default async function Home({}: Props) {
  const popularMovies = await tmdb.popularMovies;
  return <Carousel items={popularMovies} title="Popular" />;
}
