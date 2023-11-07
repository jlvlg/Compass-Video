import React from "react";
import { WatchlistButton } from "./WatchlistButton";
import { FavoriteButton } from "./FavoriteButton";
import styles from "./Controls.module.scss";
import { DetailedMedia } from "@/util/model";

type Props = { item: DetailedMedia };

export default function Controls({ item }: Props) {
  return (
    <div className={styles.tmdb}>
      <WatchlistButton />
      <FavoriteButton />
    </div>
  );
}
