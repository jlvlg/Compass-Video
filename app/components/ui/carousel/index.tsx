/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel(props: any) {
  const title = props.title;
  const items = props.items;
  console.log("Itens:", items);
  return (
    <div className={styles.maincontent}>
      <Swiper
        slidesPerView={6.5}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}>
        <h1>{title}</h1>
        {items &&
          items.length > 0 &&
          items.map((item: any, key: any) => (
            <>
              <SwiperSlide>
                <img
                  className={styles.imagemovie}
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  key={item.id}
                  alt={item.title}
                />
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </div>
  );
}
