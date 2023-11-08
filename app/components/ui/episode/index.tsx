/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./Episode.module.scss";
import { Episode } from "@/util/model";
import PlayIcon from "@/public/icons/play.svg";
import Link from "next/link";
const BASE_URL = "https://image.tmdb.org/t/p/w500";
const episodeImageDefault = "/episodedefault.png";

type Props = {
  episode: Episode;
};

export default function Episode(props: Props) {
  let description = props.episode.overview;
  let title = props.episode.name;
  const maxLengthDescription = 150;
  const maxLengthTitle = 39;

  if (description.length > maxLengthDescription) {
    description = description.slice(0, maxLengthDescription) + "...";
  }

  if (title.length > maxLengthTitle) {
    title = title.slice(0, maxLengthTitle) + "...";
  }

  function getImage(path: string) {
    if (path) {
      return `${BASE_URL}/${path}`;
    }
    return episodeImageDefault;
  }
  const linkplayer = `/playermedia?id=507089&type=movie`; // id fixo devido a milhares de episodios nao terem videos associados
  return (
    <div className={style.card}>
      <Link href={linkplayer}> 
        <div className={style.imgcontainer}>
          <img
            src={getImage(props.episode.still_path)}
            alt="Capa do episódio"
            className={style.episodeimg}
          />
          <PlayIcon className={style.playicon} />
        </div>
      </Link>
      <div className={style.containerinfor}>
        <div className={style.info}>
          <h2>{`${props.episode.episode_number}. ${title}`}</h2>
          {props.episode.runtime && <p>{`${props.episode.runtime} min`}</p>}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
