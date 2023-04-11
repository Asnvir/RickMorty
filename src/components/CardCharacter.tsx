import {Link} from "react-router-dom";
import React from "react";

type CardProps = {
    name: string;
    nation?: string
    avatarUrl: string
}
export const CardCharacter = ({name, nation, avatarUrl}: CardProps) => {

    return (
        <div className="shadow-md rounded overflow-hidden">
            <Link to="/character">
                <img src={avatarUrl} alt={`${name} avatar`} className="w-full"/>
            </Link>

            <div className="px-4 py-3">
                <p className="text-xl font-medium">{name}</p>
                {nation && <p className="text-sm font-normal ">{nation}</p>}
            </div>
        </div>
    );
};


