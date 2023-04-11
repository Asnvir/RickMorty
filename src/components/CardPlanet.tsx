type PlanetProps = {
    name: string,
    type: string
}
export const CardPlanet = ({name, type}: PlanetProps) => {

    return (
        <div
            className="flex flex-col justify-center items-center shadow-md rounded overflow-hidden py-8 px-4">
            <p className="text-xl font-medium">{name}</p>
            <p className="text-sm font-normal ">{type}</p>
        </div>
    )
}