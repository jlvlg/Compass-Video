import React, { useState } from "react";
import styles from "./AudioSubtitleModal.module.scss";


const SubtitleModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [selectedTextAudio, setSelectedTextAudio] = useState<string | null>(
    "English - Original"
  );
  const [selectedTextSubtitle, setSelectedTextSubtitle] = useState<
    string | null
  >("No");

  const handleTextClickAudio = (text: string) => {
    setSelectedTextAudio(text);
  };

  const handleTextClickSubtitle = (text: string) => {
    setSelectedTextSubtitle(text);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null; // Não renderizar o modal se isModalOpen for false
  }

  return (
    <div className={styles.modalSubtitle} style={{ position: "absolute" }}>
      <button className={styles.closeButton} onClick={handleCloseModal}>
        <img src="/icons/close.png" alt="Close" />
      </button>
      <div className={styles.audioSubtitleContainer}>
        <div className={styles.audioInfo}>
          <h1>Áudio</h1>
          <p
            onClick={() => handleTextClickAudio("English - Original")}
            style={{
              color:
                selectedTextAudio === "English - Original"
                  ? "white"
                  : "rgb(156, 156, 156)",
            }}
          >
            {selectedTextAudio === "English - Original" && (
              <img
                src="/icons/done.png"
                alt="Selected"
                style={{ width: "14px", height: "11px" }}
              />
            )}{" "}
            English - Original
          </p>
          <p
            onClick={() => handleTextClickAudio("Español")}
            style={{
              color:
                selectedTextAudio === "Español"
                  ? "white"
                  : "rgb(156, 156, 156)",
            }}
          >
            {selectedTextAudio === "Español" && (
              <img
                src="/icons/done.png"
                alt="Selected"
                style={{ width: "14px", height: "11px" }}
              />
            )}{" "}
            Español
          </p>
          <p
            onClick={() => handleTextClickAudio("Español (Latinoamericano)")}
            style={{
              color:
                selectedTextAudio === "Español (Latinoamericano)"
                  ? "white"
                  : "rgb(156, 156, 156)",
            }}
          >
            {selectedTextAudio === "Español (Latinoamericano)" && (
              <img
                src="/icons/done.png"
                alt="Selected"
                style={{ width: "14px", height: "11px" }}
              />
            )}{" "}
            Español (Latinoamericano)
          </p>
          <p
            onClick={() => handleTextClickAudio("Italiano")}
            style={{
              color:
                selectedTextAudio === "Italiano"
                  ? "white"
                  : "rgb(156, 156, 156)",
            }}
          >
            {selectedTextAudio === "Italiano" && (
              <img
                src="/icons/done.png"
                alt="Selected"
                style={{ width: "14px", height: "11px" }}
              />
            )}{" "}
            Italiano
          </p>
          <p
            onClick={() => handleTextClickAudio("Português (Brasil)")}
            style={{
              color:
                selectedTextAudio === "Português (Brasil)"
                  ? "white"
                  : "rgb(156, 156, 156)",
            }}
          >
            {selectedTextAudio === "Português (Brasil)" && (
              <img
                src="/icons/done.png"
                alt="Selected"
                style={{ width: "14px", height: "11px" }}
              />
            )}{" "}
            Português (Brasil)
          </p>
        </div>
        <div className={styles.subtitleInfo}>
  <h1>Legendas</h1>
  <p
    onClick={() => handleTextClickSubtitle("No")}
    style={{
      color:
        selectedTextSubtitle === "No" ? "white" : "rgb(156, 156, 156)",
    }}
  >
    {selectedTextSubtitle === "No" && (
      <img
        src="/icons/done.png"
        alt="Selected"
        style={{ width: "14px", height: "11px" }}
      />
    )}{" "}
    No
  </p>
  <p
    onClick={() => handleTextClickSubtitle("English CC")}
    style={{
      color:
        selectedTextSubtitle === "English CC" ? "white" : "rgb(156, 156, 156)",
    }}
  >
    {selectedTextSubtitle === "English CC" && (
      <img
        src="/icons/done.png"
        alt="Selected"
        style={{ width: "14px", height: "11px" }}
      />
    )}{" "}
    English CC
  </p>
  <p
    onClick={() => handleTextClickSubtitle("Español")}
    style={{
      color:
        selectedTextSubtitle === "Español" ? "white" : "rgb(156, 156, 156)",
    }}
  >
    {selectedTextSubtitle === "Español" && (
      <img
        src="/icons/done.png"
        alt="Selected"
        style={{ width: "14px", height: "11px" }}
      />
    )}{" "}
    Español
  </p>
    <p
      onClick={() => handleTextClickSubtitle("Español (Latinoamericano)")}
      style={{
        color:
          selectedTextSubtitle === "Español (Latinoamericano)"
            ? "white"
            : "rgb(156, 156, 156)",
      }}
    >
      {selectedTextSubtitle === "Español (Latinoamericano)" && (
        <img
          src="/icons/done.png"
          alt="Selected"
          style={{ width: "14px", height: "11px" }}
        />
      )}{" "}
      Español (Latinoamericano)
    </p>
  <p
    onClick={() => handleTextClickSubtitle("Português (Brasil)")}
    style={{
      color:
        selectedTextSubtitle === "Português (Brasil)"
          ? "white"
          : "rgb(156, 156, 156)",
    }}
  >
    {selectedTextSubtitle === "Português (Brasil)" && (
      <img
        src="/icons/done.png"
        alt="Selected"
        style={{ width: "14px", height: "11px" }}
      />
    )}{" "}
    Português (Brasil)
  </p>
  <p
    onClick={() => handleTextClickSubtitle("Italiano")}
    style={{
      color:
        selectedTextSubtitle === "Italiano" ? "white" : "rgb(156, 156, 156)",
    }}
  >
    {selectedTextSubtitle === "Italiano" && (
      <img
        src="/icons/done.png"
        alt="Selected"
        style={{ width: "14px", height: "11px" }}
      />
    )}{" "}
    Italiano
  </p>
</div>

      </div>
    </div>
  );
};

export default SubtitleModal;
