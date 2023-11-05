"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.scss";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { DetailedMedia, Media, Type } from "@/util/model";
import { actions, useDispatch } from "@/store";
import { Intersection } from "@splidejs/splide-extension-intersection";
import tmdb from "@/util/tmdb";

type Props = {
  title?: string;
  items: Media[];
  autoplay?: number;
  updateBanner?: boolean;
};

export default function Carousel({
  title,
  items,
  autoplay,
  updateBanner,
}: Props) {
  const carouselRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const splide = useRef<Splide | undefined>();
  const [trackSize, setTrackSize] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!carouselRef.current) return;

    const instance = (splide.current = new Splide(carouselRef.current, {
      classes: {
        arrow: `splide__arrow ${styles.arrow}`,
      },
      type: autoplay ? "loop" : undefined,
      rewind: !autoplay,
      perMove: autoplay ? 1 : undefined,
      autoplay: autoplay ? "pause" : undefined,
      interval: autoplay,
      intersection: {
        inView: {
          autoplay: !!autoplay,
        },
        outView: {
          autoplay: false,
        },
      },
      fixedWidth: 240,
      padding: 80,
      gap: 20,
      drag: "free",
      breakpoints: {
        768: {
          perPage: 1,
          arrows: false,
          pagination: false,
          padding: 16,
        },
      },
    }).mount({ Intersection }));

    if (updateBanner)
      instance.on("move", (index) => {
        tmdb
          .detailedMedia(items[index])
          .then((res) => dispatch(actions.banner.update(res)));
      });

    return () => {
      instance.destroy();
    };
  }, [autoplay, dispatch, items, updateBanner]);

  useEffect(() => {
    if (!trackRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!trackRef.current) return;

      setTrackSize(trackRef.current.clientWidth);
      if (splide.current)
        splide.current.options = {
          perPage: Math.floor((trackRef.current.clientWidth - 60) / 260),
        };
    });

    resizeObserver.observe(trackRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={carouselRef} className={`splide ${styles.carousel}`}>
      <header
        className={styles.header}
        style={{
          paddingInlineEnd: (trackSize - 60) % 260,
        }}>
        <h2 className={styles.title}>{title}</h2>
        <ul className="splide__pagination"></ul>
      </header>
      <div ref={trackRef} className="splide__track">
        <ul className="splide__list">
          {items.map((item) => (
            <li key={item.id} className="splide__slide">
              <Image
                className={styles.image}
                priority={true}
                src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                alt={item.title || item.name || "Poster"}
                width={342}
                height={513}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
