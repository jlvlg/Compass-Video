/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import style from "./Episode.module.scss";

type Props = {
  episode: Episode;
}

export default  function Episode(props: Props) {
  let description = props.episode.overview;
  let title = props.episode.name;
  const maxLengthDescription = 150;
  const maxLengthTitle = 39;

  if (description.length > maxLengthDescription) {
    description = description.slice(0, maxLengthDescription) + '...';
  }

  if (title.length > maxLengthTitle) {
    title = title.slice(0, maxLengthTitle) + '...';
  }
  return (
    <div className={style.card}>
      <div className={style.episodeimg}>
        <img
          src={`https://image.tmdb.org/t/p/w500${props.episode.still_path}`}
          alt="Capa do episodio"
        />
      </div>
      <div className={style.containerinfor}>
        <div className={style.info}>
          <h2>{`${props.episode.episode_number}. ${title}`}</h2>
          <p>{`${props.episode.runtime} min`}</p>
        </div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
