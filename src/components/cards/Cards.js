import { Tooltip } from "@mui/material";

const Cards= ({card, type}) =>
{
    return(
        <Tooltip
            title={type === "album" ? `${card.songs.length} songs` : `Label : ${card.genre?.label}`}
            placement="top">
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
        </Tooltip>   
    )
}

export default Cards;