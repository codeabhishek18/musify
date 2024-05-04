import search from '../../assets/search-icon.png';
import "../../Styles.css"

const Search = () =>
{
    return (
        <div className="searchbar">
                <input placeholder="Search a album of your choice"/>
                <span className="img-span"><img src={search} alt="search"/></span>
        </div>
    )
}

export default Search;