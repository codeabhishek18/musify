import { useState } from "react";

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

const Album = ({type, setGenre}) =>
{
    const [currentActive, setCurrentActive] = useState(1);

    return(
        <div>
            {type === 'song' && <div className="genres">
                {genres.map((data) =>
                (
                    <div className="genre-items">
                        <span onClick={()=> {
                            if(type==='song')
                                setGenre(data.label); 
                            setCurrentActive(data.id)}}>{data.label}
                        </span>
                        <span className={currentActive === data.id ? 'underline' : ''}></span>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default Album;