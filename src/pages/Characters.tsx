import React, {Suspense} from "react";
import {Link, useLoaderData, defer, Await} from "react-router-dom";

import {Character} from "../types"
import {CardCharacter} from "../components/CardCharacter";


export const getCharacters = async (): Promise<Character[]> => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const {results} = await response.json();
    return results;
}


export const charactersLoader = async () => {
    return defer(
        {
            characters: await getCharacters() as Character[],
        })
};

export const Characters = () => {
    const characters = useLoaderData() as Character[];
    return (
        <>
            <div className="flex justify-center mt-6 mb-4 ">
                <img src="/img/rickmorty.png" alt="Rick and Morty"/>
            </div>


            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={characters}>
                    {({ characters : resolvedCharacters }: { characters: Character[] }) => {
                        return (
                            <div className="grid gap-5 grid-cols-4 grid-rows-2 mt-8 ">
                                {resolvedCharacters.map(character => (
                                    <Link key={character.id} to={`character/${character.id}`}>
                                        <CardCharacter character={character}/>
                                    </Link>
                                ))}
                            </div>
                        );
                    }}
                </Await>
            </Suspense>



            <div className="flex justify-center mt-8">
                <button
                    className="bg-gray-200 hover:bg-gray-250 text-emerald-400 font-bold py-2 px-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    LOAD MORE
                </button>
            </div>

        </>
    )
}