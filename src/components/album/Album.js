import { useEffect, useState } from "react";

export const genres = [
    {
        id: 1,
        label: 'All'
    },
    {
        id: 2,
        label: 'Jazz'
    },
    {
        id: 3,
        label: 'Rock'
    },
    {
        id: 4,
        label: 'Pop'
    },
    {
        id: 5,
        label: 'Blues'
    }
]

const Album = ({ setSelectedGenre }) =>
{
    const [currentActive, setCurrentActive] = useState(1);

    return(
        <div className="genres">
            {genres.map((data) =>
            (
                <div className="genre-items" key={data.id}>
                    <span onClick={()=> {
                        setSelectedGenre(data.label); 
                        setCurrentActive(data.id)}}>{data.label}
                    </span>
                    <span className={currentActive === data.id ? 'underline' : ''}></span>
                </div>
            ))}
        </div>
    )
}

export default Album;