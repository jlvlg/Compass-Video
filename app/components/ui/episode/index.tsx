import React from "react";
import style from "./Episode.module.scss";

export default function Episode() {
  return (
    <div className={style.card}>
      <div className={style.episodeimg}>
        <img
          src="https://cinepop.com.br/wp-content/uploads/2021/07/harry-potter-and-the-deathly-hallows.jpg"
          alt="Episode Image"
        />
      </div>
      <div className={style.containerinfor}>
        <div className={style.info}>
          <h2>1. Glorious Purpose</h2>
          <p>40 min</p>
        </div>
        <p>
          Loki finds out The Variant's plans, but he has his own that will
          forever alter both their destinies.
        </p>
      </div>
    </div>
  );
}
