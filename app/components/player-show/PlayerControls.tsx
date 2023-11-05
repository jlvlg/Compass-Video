import React, { useState } from "react";
import styles from "./PlayerControls.module.scss";

const PlayerControls: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLokiVisible, setIsModalLokiVisible] = useState(false);
  const [isModalEpisodiosVisible, setIsModalEpisodiosVisible] = useState(false);
  const [isModalLegendasVisible, setIsModalLegendasVisible] = useState(false);
  const [isModalTelaCheiaVisible, setIsModalTelaCheiaVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleModalLoki = () => {
    setIsModalLokiVisible(!isModalLokiVisible);
  };

  const toggleModalEpisodios = () => {
    setIsModalEpisodiosVisible(!isModalEpisodiosVisible);
  };

  const toggleModalLegendas = () => {
    setIsModalLegendasVisible(!isModalLegendasVisible);
  };

  const toggleModalTelaCheia = () => {
    setIsModalTelaCheiaVisible(!isModalTelaCheiaVisible);
  };

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
              <circle />
            </svg>
          </div>
        </div>
        <div className={styles.progressBackground2}>
          {/* Segunda barra de progresso */}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.leftControls}>
          <img
            src="/icons/back-10segs.png"
            alt="Back 10 Seconds"
            className={styles.controlIcon}
          />
          <img
            src="/icons/pause.png"
            alt="Pause"
            className={styles.controlIcon}
          />
          <img
            src="/icons/foward-10segs.png"
            alt="Forward 10 Seconds"
            className={styles.controlIcon}
          />
          <img
            src="/icons/volume.png"
            alt="Volume"
            id="volume"
            className={styles.controlIcon}
          />
          <div className={styles.timerText}>10:00 / 52:20</div>
        </div>
        <div className={styles.rightControls}>
          <div className={styles.infoContainer}>
            <img
              src="/icons/info.png"
              alt="Info"
              className={styles.controlIcon}
              onMouseEnter={toggleModal}
              onMouseLeave={toggleModal}
            />
            {isModalVisible && (
              <div className={styles.modal}>
                <p>Ajuda</p>
              </div>
            )}
          </div>

          <div className={styles.infoContainer}>
            <img
              src="/icons/skip.png"
              alt="Loki"
              className={styles.controlIcon}
              onMouseEnter={toggleModalLoki}
              onMouseLeave={toggleModalLoki}
            />
            {isModalLokiVisible && (
              <div className={styles.modal}>
                <p>Loki</p>
              </div>
            )}
          </div>

          <div className={styles.infoContainer}>
            <img
              src="/icons/video-library.png"
              alt="Episódios"
              className={styles.controlIcon}
              onMouseEnter={toggleModalEpisodios}
              onMouseLeave={toggleModalEpisodios}
            />
            {isModalEpisodiosVisible && (
              <div className={styles.modal}>
                <p>Episódios</p>
              </div>
            )}
          </div>

          <div className={styles.infoContainer}>
            <img
              src="/icons/subtitle.png"
              alt="Legendas"
              className={styles.controlIcon}
              onMouseEnter={toggleModalLegendas}
              onMouseLeave={toggleModalLegendas}
            />
            {isModalLegendasVisible && (
              <div className={styles.modal}>
                <p>Legendas</p>
              </div>
            )}
          </div>

          <div className={styles.infoContainer}>
            <img
              src="/icons/expand.png"
              alt="Tela cheia"
              className={styles.controlIcon}
              onMouseEnter={toggleModalTelaCheia}
              onMouseLeave={toggleModalTelaCheia}
            />
            {isModalTelaCheiaVisible && (
              <div className={styles.modal}>
                <p>Tela cheia</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
