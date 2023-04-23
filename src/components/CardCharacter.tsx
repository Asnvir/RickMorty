import {Link} from "react-router-dom";
import React from "react";
import {Character} from "../types";


type CardCharacterProps = {
    character: Character}


export const CardCharacter = ({character: {name,image,species,id}} : CardCharacterProps) => {



    return (
        <div className="shadow-md rounded overflow-hidden">
            <img src={image} alt={`${name} avatar`} className="w-full"/>
            <div className="px-4 py-3">
                <p className="text-xl font-medium">{name}</p>
                <p className="text-sm font-normal ">{species}</p>
            </div>
        </div>
    );
};


