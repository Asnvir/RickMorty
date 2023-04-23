import {useEffect, useState} from "react";
import {Episode} from "../types";

type EpisodeProps = {
    urlEpisode: string
}

export const EpisodeComponent = ({urlEpisode}: EpisodeProps) => {

    const [episode,setEpisode] = useState<Episode>()


    const fetchEpisode = () => {
        return fetch(`${urlEpisode}`)
            .then((response) => response.json())
            .then(data => setEpisode(data))
    }

    useEffect(() => {
        fetchEpisode()
    }, [])

    if (!episode){
        return (
            <div>
                Loading
            </div>
        )
    }

    return(
        <div className="pl-4 pt-2">
            <p className="font-bold text-base ">{episode.episode}</p>
            <p className="font-normal text-sm text-gray-400">{episode.name}</p>
            <p className="font-normal text-sm text-gray-400">{episode.air_date}</p>
        </div>
    )
}