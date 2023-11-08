import Carousel from "@/app/components/carousel";
import Header from "@/app/components/header"
import tmdb from "@/util/tmdb";
import { Media } from "@/util/model";
import styles from "./Collections.module.scss"

type Props = {
    params: {
      id: number;
    };
  };
export default async function Collection({ params }: Props){
    const collectionDetailed = await tmdb.detailedCollection(params.id);
    return <div className={styles.maincontent}>
        <Header item={collectionDetailed} autoUpdate/>
        <Carousel items={collectionDetailed.parts as Media[]} updateBanner/>
    </div>
}