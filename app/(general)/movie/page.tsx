import Header from "../../components/header";
import Carousel from "../../components/carousel";
import tmdb from "@/util/tmdb";
import styles from "./Movie.module.scss";

export default async function page() {
  const airingtoday = await tmdb.detailedMediaMultiple(
    await tmdb.airingTodayMovie
  );
  const popular = await tmdb.detailedMediaMultiple(await tmdb.popularMovies);
  const toprated = await tmdb.detailedMediaMultiple(await tmdb.topRatedMovie);
  const ontheair = await tmdb.detailedMediaMultiple(await tmdb.onTheAirMovie);
  const topmovie = await tmdb.detailedSeries(toprated[0].id);

  return (
    <div>
      <Header
        item={topmovie}
        autoUpdate
        buttons={["watch", "info", "controls"]}
      />
      <div className={styles.content}>
        <Carousel
          items={airingtoday}
          title="Lançamentos"
          updateBanner
          autoplay={3000}
        />
        <Carousel
          items={popular}
          title="Populares"
          autoplay={3000}
          updateBanner
        />
        <Carousel 
        items={ontheair} 
        title="Estão no ar" 
        updateBanner
        autoplay={3000} />
        <Carousel
          items={toprated}
          autoplay={3000}
          title="Mais bem avaliados"
          updateBanner
        />
      </div>
    </div>
  );
}
