import tmdb from "@/util/tmdb";
import Episode from "../episode";

type Props = {
    id_serie: number;
}

export default async function Episodelist(props: Props) {
    const data = await tmdb.getSeasonInfo(props.id_serie, 1);
    return (
        <div>
            <h2>Episodes</h2>
            {data && data.episodes.length > 0 && 
            data.episodes.map((item, index) => (
                <Episode key={index}/>
            ))}
        </div>
    );
}


