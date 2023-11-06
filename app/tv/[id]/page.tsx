/* eslint-disable @next/next/no-async-client-component */
"use client"
import Carousel from "@/app/components/carousel"
import tmdb from "@/util/tmdb";
import { Media } from "@/util/model";
import styles from "./Tv.module.scss"
type Props = {
    params: {
        id: number;
    };
}

export default async function Tv({params}: Props){
    const serie = await tmdb.getSerie(params.id);
    let seasons = serie?.seasons;

    console.log(seasons)
    console.log(serie);
    return <div className={styles.series__container}>
        <Carousel
        items={seasons!}
        title="Temporadas"
        idSeason={params.id}
        isSeason={true}
      />
    </div>
}