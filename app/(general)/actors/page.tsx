"use client";
import Header from "@/app/components/header";
import styles from "./Actors.module.scss";
import Carousel from "@/app/components/carousel";
import tmdb from "@/util/tmdb";
export default async function page() {
  const actors = await tmdb.getPeopleList();
  const itemheader = await tmdb.detailedMedia(actors[0].known_for[0]);

  return (
    <div>
      <Header item={itemheader} autoUpdate />
      <div className={styles.content}>
        <img src="https://image.tmdb.org/t/p/w200/9jkThAGYj2yp8jsS6Nriy5mzKFT.jpg" />

       {actors[0] &&  <Carousel items={actors[0].known_for} />}
       </div>
    </div>
  );
}
