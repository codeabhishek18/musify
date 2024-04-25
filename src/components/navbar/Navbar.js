import Button from "../button/Button";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import "../Styles.css"

const Navbar = () =>
{
    return(
        <div className="navbar">
            <Logo/>
            <Search/>
            <Button/>
        </div>
    )
}

export default Navbar;