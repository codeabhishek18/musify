import '../Styles.css';
import hero from '../../assets/hero-image.png';

const Hero = () =>
{
    return(
        <div className="hero-div">
            <div className="hero-content">
                <p>100 Thousands Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <img src={hero} alt="hero-image"/>
        </div>
    )
}
export default Hero;