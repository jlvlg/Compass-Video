/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import styles from "./Search.module.scss";
import { Media, Person } from "@/util/model";
import tmdb from "@/util/tmdb";
const defaultImagePoster = "/carouseldefault.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = { searchParams: { [key: string]: string | string[] | undefined } };
export default function SearchPage({ searchParams }: Props) {
  const value = searchParams["value"]?.toString();
  const type = searchParams["filter"];
  const [resultSearch, setResultSearch] = useState<Media[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await tmdb.search(type as string, value as string);
        if (data) {
          setResultSearch(data);
        }
      } catch (error) {
        console.log(error + "Erro ao buscar");
      }
    }
    fetchData();
  }, [value, type]);

  function getImage(path: string) {
    if (path) {
      return `https://image.tmdb.org/t/p/w342${path}`;
    }
    return defaultImagePoster;
  }

  return (
    <div className={styles.maincontent}>
      <div>
        <p>
          Resultados para sua busca:{" "}
          <span className={styles.titlesearch}>{`"${value}"`}</span>
        </p>
      </div>
      <div className={styles.results}>
        {resultSearch &&
          resultSearch.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/${
                  (item.media_type || item.type) === "tv"
                    ? "series"
                    : item.media_type || item.type
                }/${item.id}`}
              >
                <img
                  src={getImage(item.poster_path)}
                  alt={item.title}
                  className={styles.actorimage}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
