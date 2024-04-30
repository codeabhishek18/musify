import Caroussel from "../components/caroussel/Caroussel"
import FAQ from "../components/faq/FAQ"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"

const Home = () =>
{
    return(
        <div>
            <Navbar/>
            <Hero/>
            {/* <Caroussel/>
            <FAQ/> */}
        </div>
    )
}

export default Home