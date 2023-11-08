import React from "react";
import styles from "./Details.module.scss";
import useClamp from "@/util/hooks/useClamp";
import Button from "../button";
import Link from "next/link";
import play from "@/public/icons/play.svg";
import info from "@/public/icons/info.svg";
import { DetailedMedia } from "@/util/model";
import Controls from "../tmdb";
import tmdb from "@/util/tmdb";

type Props = {
  item: DetailedMedia;
  buttons?: ("watch" | "trailer" | "info" | "controls")[];
};

export default function Details({ item, buttons }: Props) {
  const ref = useClamp(item);
  const itemRelease = item.release_date || item.first_air_date;
  let mediasCollection = item.parts?.length
  let itemDuration = item.runtime
    ? `${Math.floor(item.runtime / 60)} h ${item.runtime % 60} m`
    : `${item.number_of_episodes && item.number_of_episodes + " Episodes"}`;

  const buttonElements = {
    watch: (

      <Button
        key="watch"
        Real={Link}
        href={`/playermedia?id=${item.id}&type=${item.type}`}
        passHref
        className={`${styles.button} ${styles.buttonPrimary}`}
        Icon={play}
      >
        Ver Agora
      </Button>
    ),
    trailer: (
      <Button
        key="trailer"
        Real={Link}
        href={`/playermedia?id=${item.id}&type=${item.type}`}
        passHref
        className={`${styles.button}`}
      >
        Trailer
      </Button>
    ),
    info: (
      <Button
        key="info"
        Real={Link}
        href={`${item.type}/${item.id}`}
        className={styles.button}
        Icon={info}
      >
        Mais Informações
      </Button>
    ),
    controls: <Controls key="controls" item={item} />,
  };

  return (
    <div className={styles.info}>
      <hgroup>
        <h1>{item.title || item.name || item.original_name}</h1>
        <p className={styles.release}>
          {mediasCollection ? mediasCollection + " Itens" : <> {itemRelease ? itemRelease?.slice(0, 4) : mediasCollection} • {itemDuration}</>}
        </p>
        <p className={styles.genres}>
          {item.genres && item.genres.map((i) => i.name).join(", ")}
        </p>
        <p ref={ref} className={styles.overview}>
          {item.overview}
        </p>
      </hgroup>
      {buttons && (
        <div className={styles.interact}>
          {buttons.map((b) => buttonElements[b])}
        </div>
      )}
    </div>
  );
}
