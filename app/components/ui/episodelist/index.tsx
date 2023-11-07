import tmdb from "@/util/tmdb";
import Episode from "../episode";
import styles from "./Episodelist.module.scss";
import { Season } from "@/util/model";

type Props = {
  id: number;
  season_number: number;
};

export default async function Episodelist(props: Props) {
  const media = {
    id: props.id,
    season_number: props.season_number,
    type: "season",
  } as Season;
  const data = await tmdb.detailedMedia(media);
  let notEpisodes = false;
  if(data.episodes?.length === 0){
    notEpisodes = true;
  }
  return (
    <div className={styles.listcontent}>
      <h2 className={styles.listitle}>Episodes</h2>
      {notEpisodes && <h2 className={styles.listitle}>Nenhum Episodio Disponível!</h2>}
      <div className={styles.episodelist}>
        {data && data.episodes && data.episodes.length > 0 &&
          data.episodes.map((item, index) => (
            <Episode key={index} episode={item} />
          ))}
      </div>
    </div>
  );
}
