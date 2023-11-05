"use client";

import React from "react";
import styles from "./Header.module.scss";
import { DetailedMedia } from "@/util/model";
import NavBar from "../navbar/Header";
import { useSelector } from "@/store";

type Props = { item: DetailedMedia };

export default function Header({ item }: Props) {
  item = useSelector((state) => state.banner.media) || item;

  return (
    <section>
      <header
        className={styles.header}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.backdrop_path})`,
        }}>
        <NavBar />
        <div className={styles.info}>
          <hgroup>
            <h1>{item.title}</h1>
            <p className={styles.release}>
              {(item.release_date || item.first_air_date)?.slice(0, 4)} •{" "}
            </p>
            <p className={styles.genres}>{item.genres.join()}</p>
          </hgroup>
        </div>
      </header>
    </section>
  );
}
