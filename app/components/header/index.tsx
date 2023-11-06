"use client";

import React from "react";
import styles from "./Header.module.scss";
import { DetailedMedia } from "@/util/model";
import NavBar from "../navbar/Header";
import { useSelector } from "@/store";
import Image from "next/image";
import overlay1 from "@/public/overlay1.svg";
import overlay2 from "@/public/overlay2.svg";

type Props = { item: DetailedMedia };

export default function Header({ item }: Props) {
  item = useSelector((state) => state.banner.media) || item;
  const itemRelease = item.release_date || item.first_air_date;
  const itemDuration = item.runtime
    ? `${Math.floor(item.runtime / 60)} h ${item.runtime % 60} m`
    : `${item.number_of_episodes} Episodes`;

  return (
    <header
      className={styles.header}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.backdrop_path})`,
      }}>
      <div className={styles.gradients}>
        <div></div>
        <div></div>
      </div>
      <NavBar />
      <hgroup className={styles.info}>
        <h1>{item.title || item.name}</h1>
        <p className={styles.release}>
          {itemRelease?.slice(0, 4)} • {itemDuration}
        </p>
        <p className={styles.genres}>
          {item.genres
            .map((i) => i.name)
            .join(", ")
            .replace(/(,)(?!.*\1)/, " &")}
        </p>
        <p className={styles.overview}>{item.overview}</p>
      </hgroup>
    </header>
  );
}
