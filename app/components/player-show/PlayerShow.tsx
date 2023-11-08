"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./PlayerShow.module.scss";
import PlayerControls from "./PlayerControls";
import YouTube from "react-youtube";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const ShowPlayer: React.FC = () => {
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [presentTime, setPresentTime] = useState(0);

  const [videoInfo, setVideoInfo] = useState({ title: "", description: "" });
  const [isFullScreen, setIsFullScreen] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const [videoKey, setVideoKey] = useState("");

  const [videoThumbnail, setVideoThumbnail] = useState<string | null>(null);

  const currentRefTime = useRef(presentTime);

  const updateTime = () => {
    if (player) {
      currentRefTime.current = player.getCurrentTime();
      setPresentTime(currentRefTime.current);
    }
  };

  useEffect(() => {
    if (player) {
      setDuration(player.getDuration() - 4);
      setPresentTime(player.getCurrentTime());
    }
  }, [player]);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [player]);

  const goBack = () => {
    window.history.back();
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const seekForward = (seconds: number) => {
    if (player) {
      const newTime = presentTime + seconds;
      if (newTime < duration) {
        player.seekTo(newTime, true);
        setPresentTime(newTime);
      }
    }
  };

  const backForward = (seconds: number) => {
    if (player) {
      const newTime = presentTime - seconds;
      if (newTime > 0) {
        player.seekTo(newTime, true);
        setPresentTime(newTime);
      }
    }
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      const playerElement = document.getElementById("player");
      if (playerElement) {
        playerElement.requestFullscreen();
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  const opts = {
    width: "100%",
    height: "866vh",
    playerVars: {
      controls: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  useEffect(() => {
    if (id && type) {
      const tmdbApiKey = "b1680b745ac5fd212cd60b69989756f8";
      const baseUrl =
        type === "movie"
          ? `https://api.themoviedb.org/3/movie/${id}/videos`
          : `https://api.themoviedb.org/3/tv/${id}/videos`;
      const url = `${baseUrl}?api_key=${tmdbApiKey}`;

      const fetchVideoKey = async () => {
        try {
          const response = await axios.get(url);
          if (response.data.results && response.data.results.length > 0) {
            const trailerKey = response.data.results[0].key;
            setVideoKey(trailerKey);
          }
        } catch (error) {
          console.error("Erro ao buscar a chave do vídeo:", error);
        }
      };

      fetchVideoKey();
    }
  }, [id, type]);

  const fetchVideoThumbnail = (videoId: string) => {
    const youtubeApiKey = "AIzaSyCsiIoSbBzikcXperTPTEG_cDGa3W8ynzc";
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${youtubeApiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        if (data.items && data.items.length > 0) {
          const videoSnippet = data.items[0].snippet;
          if (videoSnippet.thumbnails && videoSnippet.thumbnails.medium) {
            const thumbnailUrl = videoSnippet.thumbnails.medium.url;
            setVideoThumbnail(thumbnailUrl);
            setVideoInfo({
              title: videoSnippet.title.slice(0, 35),
              description: videoSnippet.description.slice(0, 60),
            });
          }
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar informações da miniatura do vídeo", error);
      });
  };

  useEffect(() => {
    if (videoKey !== null) {
      fetchVideoThumbnail(videoKey);
    }
  }, [videoKey]);

  return (
    <div className={styles.playerShow}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={goBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
          <div className={styles.title}>{videoInfo.title}</div>
          <div className={styles.episode}>{videoInfo.description}</div>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <div className={styles.controlsContainer}>
          <PlayerControls
            pauseVideo={togglePlay}
            seekForward={seekForward}
            backForward={backForward}
            duration={duration}
            currentTime={presentTime}
            toggleFullScreen={toggleFullScreen}
            videoThumbnail={videoThumbnail}
          />
        </div>
        <YouTube
          videoId={videoKey}
          opts={opts}
          onReady={(event) => {
            setPlayer(event.target);
          }}
          id="player"
        />
      </div>
    </div>
  );
};

export default ShowPlayer;
