import { useEffect, useState } from "react"
import prev from '../../assets/prev.png'
import next from '../../assets/next.png'

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

const Section = ({ title, data, type, setGenre}) =>
{
    const [collapse, setCollapse] = useState(false);
    const [currentActive, setCurrentActive] = useState(1);

    return(
        <div className="container">
            <div className="card-header">
                <p>{title}</p>
                <span onClick={()=>setCollapse(!collapse)}>{collapse? 'Collapse' : 'Show all' }</span>
            </div>
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
            {!collapse && <button className="prev navigation"><img src={prev} alt="prev"/></button>}
            {!collapse && <button className="next navigation"><img src={next} alt="next"/></button>}
            <div className={collapse ?  'collapse-cards' : 'scroll-cards'}>
            {data?.map((card)=>
            (
                <div>
                    <div className="card" key={card.id}>
                        <div className="card-image" >
                            <img src={card.image} alt="songs"/>
                        </div>
                        <div className="card-content">
                            {card.follows ? <button>{card.follows} Follows</button> :
                            <button>{card.likes} Likes</button>}
                        </div>
                    </div>
                    <p className="title">{card.title}</p>
                </div>
            ))}
            </div>
            <div className="hr"></div>
        </div>
    )
}

export default Section