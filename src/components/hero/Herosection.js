import '../Styles.css';
import hero from '../../assets/hero-image.png';

const Herosection = () =>
{
    return(
        <div className="hero-div">
            <h1>100 Thousand Songs, ad-free Over thousands podcast episodes</h1>
            <img src={hero} alt="hero-image"/>
        </div>
    )
}
export default Herosection;

