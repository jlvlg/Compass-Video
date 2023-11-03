import React from "react";
import Carousel from "../carousel";
import styles from "./Catalog.module.scss"

interface Media {
    slug: string;
    title: string;
    items: {}[];
}
interface CatalogMedia {
    mediaList: Media[];
}

export default function Catalog({ mediaList }: CatalogMedia) {

    return <div>
        {mediaList && mediaList.length > 0
          ? mediaList.map((movie, index) => (
              <div key={index} className={index === 0 ? "" : styles.carousel}>
                <Carousel items={movie.items} title={movie.title} />
              </div>
            ))
          : "Loading..."}
    </div>
}