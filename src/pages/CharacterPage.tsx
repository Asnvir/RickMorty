import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Character} from "../types";
import {EpisodeComponent} from "../components/EpisodeComponent";

export const CharacterPage = () => {
    const {id=''} = useParams();
    const [character,setCharacter] = useState<Character>();


    const fetchCharacter = () => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then(data => setCharacter(data))
    }

    useEffect(() => {
        fetchCharacter()
    }, [])

    if (!character){
        return (
            <div>
                Loading
            </div>
        )
    }

    return (
        <>
            <div className="flex my-2 items-start">
                <img className="w-6 h-6" src="/img/arrow_back_24px.png" alt="Go back"/>
                <h3 className="font-bold text-lg">GO BACK</h3>
                <div className="flex flex-col mx-auto">
                    <img src={character.image} alt="Avatar"/>
                    <h2 className="font-normal text-5xl my-4">{character.name}</h2>
                </div>
            </div>


            <div className="flex justify-evenly">
                <div className="flex flex-col mr-10">
                    <p className="font-medium text-xl text-gray-500">Informations</p>

                    <div className="grid grid-rows-6 grid-cols-1 ">
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base ">{character.gender}</p>
                            <p className="font-normal text-sm text-gray-400">Male</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Status</p>
                            <p className="font-normal text-sm text-gray-400">{character.status}</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Species</p>
                            <p className="font-normal text-sm text-gray-400">{character.species}</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Origin</p>
                            <p className="font-normal text-sm text-gray-400">{character.origin.name}</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Type</p>
                            <p className="font-normal text-sm text-gray-400">{character.type || 'Unknown'}</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Location</p>
                            <p className="font-normal text-sm text-gray-400">{character.location.name}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-">
                    <p className="font-medium text-xl text-gray-500">Episodes</p>
                    
                    <div className="grid grid-rows-4 grid-cols-1 ">
                        {character.episode.slice(0, 4).map((urlEpisode: string) => (
                            <EpisodeComponent key={urlEpisode} urlEpisode={urlEpisode} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}