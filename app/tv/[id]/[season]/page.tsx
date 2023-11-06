import Episodelist from "@/app/components/ui/episodelist"

type Props = {
    params: {
        id: number;
        season: number;
    };
}
export default function Tv({params}: Props){
    return <div>
        <Episodelist id_serie={params.id} season_number={params.season} />
    </div>
}