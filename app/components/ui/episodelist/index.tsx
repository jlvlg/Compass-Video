import tmdb from "@/util/tmdb";
import Episode from "../episode";
import styles from "./Episodelist.module.scss";

type Props = {
  id_serie: number;
  season_number: number;
};

export default async function Episodelist(props: Props) {
  const data = await tmdb.getSeasonInfo(props.id_serie, props.season_number);
  return (
    <div className={styles.listcontent}>
      <h2 className={styles.listitle}>Episodes</h2>
      <div className={styles.episodelist}>
        {data &&
          data.episodes.length > 0 &&
          data.episodes.map((item, index) => (
            <Episode key={index} episode={item} />
          ))}
      </div>
    </div>
  );
}
