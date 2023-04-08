import React from 'react';
import {Card} from './components/Card';

function App() {
    return (
        <div className="flex justify-center">
            <div>
                <div className="flex items-center justify-between">
                    <img src="/img/logo-black.png" alt="Logo"/>
                    <nav>
                        <ul className="flex items-center  gap-8 py-5  font-bold text-lg">
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Episodes</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="flex justify-center mt-6 mb-4">
                    <img src="/img/rickmorty.png" alt="Rick and Morty"/>
                </div>

                <div className="flex justify-center mt-4 gap-5">
                    <input
                        className="flex-1 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal text-base"
                        id="filterByName" type="text" placeholder="Filter by name..."/>
                    <input
                        className="flex-1 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  font-normal text-base"
                        id="species" type="text" placeholder="Species"/>
                    <input
                        className="flex-1 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  font-normal text-base"
                        id="gender" type="text" placeholder="Gender"/>
                    <input
                        className="flex-1 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal text-base"
                        id="status" type="text" placeholder="Status"/>
                </div>


                <div className="grid gap-5 grid-cols-4 grid-rows-2 mt-8">
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                    <Card name="Rick" nation="Human" avatarUrl="/img/test.png"/>
                </div>


                <div className="flex justify-center mt-12 mb-24">
                    <button
                        className="bg-gray-200 hover:bg-gray-250 text-emerald-400 font-bold py-2 px-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        LOAD MORE
                    </button>
                </div>


            </div>
        </div>
    );
}

export default App;
