import React from 'react';
import styles from './PlayerControls.module.scss';

const PlayerControls: React.FC = () => {
  return (
    <div className={styles.playerControls}>
      <div className={styles.progressBars}>
        <div className={styles.progressBar}>
          {/* Primeira barra de progresso */}
          <div className={styles.progressBackground} />
          <div className={styles.progressEllipse}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" transform="matrix(-1 0 0 1 12 0)" fill="#02E7F5" />
            </svg>
          </div>
        </div>
        <div className={styles.progressBackground2}>
          {/* Segunda barra de progresso */}
        </div>
      </div>
      
      <div className={styles.controls}>
        <div className={styles.leftControls}>
          <img src="/icons/back-10segs.png" alt="Back 10 Seconds" className={styles.controlIcon} />
          <img src="/icons/pause.png" alt="Pause" className={styles.controlIcon} />
          <img src="/icons/foward-10segs.png" alt="Forward 10 Seconds" className={styles.controlIcon} />
          <img src="/icons/volume.png" alt="Volume" className={styles.controlIcon} />
          <div className={styles.timerText}>10:00 / 52:20</div>
        </div>
        <div className={styles.rightControls}>
          <img src="/icons/info.png" alt="Info" className={styles.controlIcon} />
          <img src="/icons/skip.png" alt="Skip" className={styles.controlIcon} />
          <img src="/icons/video-library.png" alt="Video Library" className={styles.controlIcon} />
          <img src="/icons/subtitle.png" alt="Subtitle" className={styles.controlIcon} />
          <img src="/icons/expand.png" alt="Expand" className={styles.controlIcon} />
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
