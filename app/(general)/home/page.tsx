import React from "react";
import tmdb from "@/util/tmdb";
import style from "./Home.module.scss";
import Carousel from "../../components/carousel";
import Header from "../../components/header";
import { Media } from "@/util/model";

type Props = {};

export const revalidate = 60;

export default async function Home({}: Props) {
  const popular = await tmdb.detailedMediaMultiple(await tmdb.trendingMovies);
  const trendingMovies = await tmdb.detailedMediaMultiple(await tmdb.trendingMovies);
  const trendingSeries = await tmdb.detailedMediaMultiple(await tmdb.topRatedSeries);
  const collection = await (await tmdb.detailedCollection(91361)).parts

  return (
    <div className={style.maincontent}>
      <Header
        item={trendingSeries[3]}
        autoUpdate
        buttons={["watch", "info", "controls"]}
      />
      <Carousel items={collection as Media[]} title="Coleções de Hallowen" updateBanner autoplay={3500}/>
      <Carousel items={trendingSeries!} title="Séries em alta"/>
      <Carousel items={trendingMovies} title="Filmes em alta"/>
    </div>
  );
}