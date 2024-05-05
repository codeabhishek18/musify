import Cards from "../cards/Cards"

const StackedCards = ({data}) =>
{
    return(
        <div className="collapse-cards">
            {data?.map((card)=>
            (
                <Cards card={card}/>
            ))} 
        </div>
    )
}

export default StackedCards