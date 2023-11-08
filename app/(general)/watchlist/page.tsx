import Carousel from "@/app/components/carousel";
import tmdb from "@/util/tmdb";
import styles from "./Watchlist.module.scss"

export default async function page() {
    const list1 = await tmdb.popularMovies; //temporario
    const list2 = await tmdb.topRatedSeries;
    const list3 = await tmdb.topRatedMovie;
    const list4 = await tmdb.onTheAirSeries;
  return (
    <div className={styles.maincontent}>
      <div className={styles.info}>
        <h2 className={styles.title}>Minhas listas</h2>
        <p>Listas criadas por você de acordo com seus gostos</p>
      </div>
        <Carousel items={list1} title="Filmes favoritos" />
        <Carousel items={list2} title="Séries favoritas" />
        <Carousel items={list3} title="Filmes para ver mais tarde"/>
        <Carousel items={list4} title="Séries para ver mais tarde"/>
    </div>
  );
}
