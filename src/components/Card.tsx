type CardProps = {
    name: string;
    nation?: string
    avatarUrl: string
}
export const Card = ({name, nation, avatarUrl}: CardProps) => {

    return (
        <div className="shadow-md rounded overflow-hidden">
            <img src={avatarUrl} alt={`${name} avatar`} className="w-full"/>
            <div className="px-4 py-3">
                <p className="text-xl font-medium">{name}</p>
                {nation && <p className="text-sm font-normal ">{nation}</p>}
            </div>
        </div>
    );
};


