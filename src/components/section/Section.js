import { useState } from "react";
import Album from '../album/Album';
import StackedCards from "../stackedcards/StackedCards";
import Carousel from "../carousel/Carousel";

const Section = ({ title, data = [], type }) =>
{
    const [collapse, setCollapse] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState('All');

    const songdata = type === 'album' ? data : selectedGenre === 'All' ? data : [...data].filter((song) => song.genre.label === selectedGenre);
    
    return(
        <div className="container">
            <div className="card-header">
                <p>{title}</p>
                <span onClick={()=>setCollapse(!collapse)}>{collapse? 'Collapse' : 'Show all' }</span>
            </div>

            <div>
                {type === 'song' && <Album setSelectedGenre={setSelectedGenre}/>}
                { collapse ? 
                    <StackedCards data={songdata} /> :
                    <Carousel data={songdata} type={type}/> 
                }
            </div>

            <div className="hr"></div>
        </div>
    )
}

export default Section