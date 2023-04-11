import React from "react";
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        <div className="shadow-lg mx">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <img src="/img/logo-black.png" alt="Logo"/>
                    <nav>
                        <ul className="flex items-center  gap-8 py-5  font-bold text-lg">
                            <li><Link to="/">Characters</Link></li>
                            <li><Link to="/locations">Locations</Link></li>
                            <li><Link to="/episodes">Episodes</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
