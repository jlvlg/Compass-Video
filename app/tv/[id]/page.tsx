/* eslint-disable @next/next/no-async-client-component */
"use client"
import Carousel from "@/app/components/carousel"
import tmdb from "@/util/tmdb";
import { Media } from "@/util/model";
type Props = {
    params: {
        id: number;
    };
}

export default async function Tv({params}: Props){
    const popular = await tmdb.detailedMediaMultiple(await tmdb.popular);
    const seriesdata = await tmdb.getSeriesInfo(params.id);
    let seasons = seriesdata?.seasons;

    console.log(seasons)
    return <div>
        <Carousel
        items={seasons!}
        title="Temporadas"
        idSeason={params.id}
        isSeason={true}
      />
    </div>
}