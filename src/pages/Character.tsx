export const Character = () => {
    return (
        <>
            <div className="flex my-2 items-start">
                <img className="w-6 h-6" src="/img/arrow_back_24px.png" alt="Go back"/>
                <h3 className="font-bold text-lg">GO BACK</h3>
                <div className="flex flex-col mx-auto">
                    <img src="/img/avatar.png" alt="Avatar"/>
                    <h2 className="font-normal text-5xl my-4">Rick Sanchez</h2>
                </div>
            </div>


            <div className="flex justify-evenly">
                <div className="flex flex-col mr-10">
                    <p className="font-medium text-xl text-gray-500">Informations</p>

                    <div className="grid grid-rows-6 grid-cols-1 ">
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base ">Gender</p>
                            <p className="font-normal text-sm text-gray-400">Male</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Status</p>
                            <p className="font-normal text-sm text-gray-400">Alive</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Specie</p>
                            <p className="font-normal text-sm text-gray-400">Human</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Origin</p>
                            <p className="font-normal text-sm text-gray-400">Earth (C-137)</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Type</p>
                            <p className="font-normal text-sm text-gray-400">Unknown</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base">Location</p>
                            <p className="font-normal text-sm text-gray-400">Earth (Replacement Dimension)</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-">
                    <p className="font-medium text-xl text-gray-500">Episodes</p>

                    <div className="grid grid-rows-4 grid-cols-1 ">
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base ">S01E01</p>
                            <p className="font-normal text-sm text-gray-400">Pilot</p>
                            <p className="font-normal text-sm text-gray-400">December 2,2013</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base ">S01E02</p>
                            <p className="font-normal text-sm text-gray-400">Lawnmower Dog</p>
                            <p className="font-normal text-sm text-gray-400">December 9,2013</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base ">S01E03</p>
                            <p className="font-normal text-sm text-gray-400">Anatomy Park</p>
                            <p className="font-normal text-sm text-gray-400">December 16,2013</p>
                        </div>
                        <div className="pl-4 pt-2">
                            <p className="font-bold text-base ">S01E04</p>
                            <p className="font-normal text-sm text-gray-400">M. Night Shaym-Aliens!</p>
                            <p className="font-normal text-sm text-gray-400">January 13,2014</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}