const Cards= ({card}) =>
{
    return(
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
    )
}

export default Cards;