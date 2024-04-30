import '../Styles.css';
import hero from '../../assets/hero-image.png';

const Hero = () =>
{
    return(
        <div className="hero-div">
            <div className="hero-content">
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img src={hero} alt="hero-image"/>
        </div>
    )
}
export default Hero;

