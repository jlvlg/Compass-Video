import Carousel from "@/app/components/carousel";
import tmdb from "@/util/tmdb";
import styles from "./Tv.module.scss";
import Header from "@/app/components/header";
type Props = {
  params: {
    id: number;
  };
};

export default async function Tv({ params }: Props) {
  const serie = await tmdb.getSerie(params.id);
  const sililarSerie = await tmdb.getSimilarSerie(params.id);
  if (serie) {
    const seriedetails = await tmdb.detailedSeries(serie);
    let seasons = serie?.seasons;
    return (
      <div className={styles.series__container}>
        <Header
          item={seriedetails}
          buttons={["watch", "trailer", "controls"]}
        />
        <div className={styles.carouselseasons}>
          <Carousel items={seasons!} title="Temporadas" idSeason={params.id} />
        </div>
        <div className={styles.carouselsimilares}>
          <Carousel items={sililarSerie!} title="Similares" />
        </div>
      </div>
    );
  }
}

