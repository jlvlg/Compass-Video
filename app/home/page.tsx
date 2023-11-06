import React from "react";
import tmdb from "@/util/tmdb";
import style from "./Home.module.scss";
import Carousel from "../components/ui/carousel";
import Episodelist from "../components/ui/episodelist";

type Props = {};

export const revalidate = 60;

export default async function Home({}: Props) {
  const popularMovies = await tmdb.popularMovies;
  return (
    <div className={style.maincontent}>
      <Carousel items={popularMovies} title="Popular" />
      <Episodelist id_serie={1399} season_number={1} />
    </div>
  );
}
