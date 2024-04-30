import Caroussel from "../components/caroussel/Caroussel"
import FAQ from "../components/faq/FAQ"
import Herosection from "../components/hero/Herosection"
import Navbar from "../components/navbar/Navbar"

const Home = () =>
{
    return(
        <div>
            <Navbar/>
            <Herosection/>
            {/* <Caroussel/>
            <FAQ/> */}
        </div>
    )
}

export default Home