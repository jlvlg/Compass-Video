import Header from "../components/header";
import Carousel from "../components/carousel";
import tmdb from "@/util/tmdb";
export default async function page() {
  const series = await tmdb.detailedMediaMultiple(await tmdb.popularSeries);
  const topseries = await tmdb.detailedSeries(series[0]);
  return (
    <div>
      <Header
        item={topseries}
        autoUpdate
        buttons={["watch", "info", "controls"]}
      />
      <Carousel items={series} title="Popular" updateBanner autoplay={3000} />
    </div>
  );
}
