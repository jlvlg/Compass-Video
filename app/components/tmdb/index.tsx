import React from "react";
import { WishlistButton } from "./WishlistButton";
import { FavoriteButton } from "./FavoriteButton";
import styles from "./Controls.module.scss";
import { DetailedMedia } from "@/util/model";

type Props = { item: DetailedMedia };

export default function Controls({ item }: Props) {
  return (
    <div className={styles.tmdb}>
      <WishlistButton />
      <FavoriteButton />
    </div>
  );
}
