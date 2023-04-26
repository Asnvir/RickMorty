import React from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import {Layout} from "./pages/Layout";
import {Characters, charactersLoader} from "./pages/Characters";
import {Locations} from "./pages/Locations";
import {CharacterPage} from "./pages/CharacterPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Characters/>} loader={charactersLoader}/>
        <Route path="locations" element={<Locations/>}/>
        <Route path="character" element={<CharacterPage/>}/>
        <Route path="character/:id" element={<CharacterPage/>}/>
        <Route path="location" element={<CharacterPage/>}/>
        {/*<Route path="*" element={<NoPage />} />*/}
    </Route>

))

export const App = () => {
    return (
            <RouterProvider router={router}/>
    );
}
