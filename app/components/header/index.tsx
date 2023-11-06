"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { DetailedMedia } from "@/util/model";
import NavBar from "../navbar/index";
import { useSelector } from "@/store";
import useClamp from "@/util/hooks/useClamp";

type Props = { item: DetailedMedia; autoUpdate?: boolean };

export default function Header({ item, autoUpdate }: Props) {
  const dynamic = useSelector((state) => state.banner.media) || item;
  if (autoUpdate) item = dynamic;
  const ref = useClamp(item);
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
          {item.genres.map((i) => i.name).join(", ")}
        </p>
        <p ref={ref} className={styles.overview}>
          {item.overview}
        </p>
      </hgroup>
    </header>
  );
}
