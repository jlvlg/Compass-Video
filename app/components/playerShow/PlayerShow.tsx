"use client";
import React from 'react';
import styles from './PlayerShow.module.scss';

const PlayerShow: React.FC = () => {
  return (
    <div className={styles.playerShow}>
      <div className={styles.header}>
        <button className={styles.backButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M31.7719 8.62713C30.9357 7.79096 29.5876 7.79096 28.7514 8.62713L14.5706 22.808C13.905 23.4736 13.905 24.5486 14.5706 25.2142L28.7514 39.3951C29.5876 40.2312 30.9357 40.2312 31.7719 39.3951C32.6081 38.5589 32.6081 37.2108 31.7719 36.3746L19.417 24.0026L31.789 11.6305C32.6081 10.8114 32.6081 9.44625 31.7719 8.62713Z"
              fill="white"
            />
          </svg>
        </button>
        <div className={styles.headerInfo}>
          <div className={styles.title}>Loki</div>
          <div className={styles.episode}>T1:E1 Un glorioso propósito</div>
        </div>
      </div>
      <img src="/deadpool.gif" alt="Meu GIF" className={styles.gif} />
    </div>
  );
};

export default PlayerShow;
