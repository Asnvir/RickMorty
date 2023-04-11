import {CardPlanet} from "../components/CardPlanet";

export const Locations = () => {

    return (
        <>
            <div className="flex justify-center mt-6 ">
                <img src="/img/loading.png" alt="Portal"/>
            </div>

            <div className="flex justify-center mt-8 gap-5 px-96 ">
                <input
                    className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal text-base"
                    id="filterByName" type="text" placeholder="Filter by name..."/>
                <input
                    className="flex-1 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal text-base"
                    id="type" type="text" placeholder="Type"/>
                <input
                    className="flex-1 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal text-base"
                    id="dimension" type="text" placeholder="Dimension"/>
            </div>

            <div className="grid grid-cols-4 grid-rows-3 gap-5 mt-5 p-5  ">
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
                <CardPlanet name={"Earth (C-137)"} type={"Planet"}/>
            </div>

            <div className="flex justify-center mt-8 ">
                <button
                    className="bg-gray-200 hover:bg-gray-250 text-emerald-400 font-bold py-2 px-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    LOAD MORE
                </button>
            </div>
        </>
    )
}