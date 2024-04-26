import logo from '../../assets/logo.png';
import "../Styles.css"

const Logo = () =>
{
    return(
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Logo;
