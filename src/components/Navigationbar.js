import logo from '../assets/logo.png';
import search from '../assets/search-icon.png';
import './Navigationbar.css';

const Navigationbar = () =>
{
    return(
        <div className = "navbar">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="searchbar">
                <input placeholder="Search a album of your choice"/>
                <span className='img-span'><img src={search}/></span>
            </div>
            <button className="feedback-btn">Give Feedback</button>
        </div>
    )
}

export default Navigationbar;