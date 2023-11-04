/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./Carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

type Props = {
  title: string, items: Media[]
}

export default function Carousel({title, items}: Props) {

  return (
    <div className={styles.maincontent}>
      <h4 className={styles.title}>{title}</h4>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1.6,
          },
          480: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 6.8,
          },
        }}
        spaceBetween={20}
        grabCursor={true}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items &&
          items.length > 0 &&
          items.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className={styles.imagemovie}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                key={item.id}
                alt={item.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
