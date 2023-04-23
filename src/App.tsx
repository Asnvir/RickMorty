import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Layout} from "./pages/Layout";
import {Characters} from "./pages/Characters";
import {Locations} from "./pages/Locations";
import {CharacterPage} from "./pages/CharacterPage";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Characters/>}/>
                    <Route path="locations" element={<Locations/>}/>
                    <Route path="character" element={<CharacterPage/>}/>
                    <Route path="character/:id" element={<CharacterPage/>}/>
                    <Route path="location" element={<CharacterPage/>}/>
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
