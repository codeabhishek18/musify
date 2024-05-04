import FAQ from "../components/faq/FAQ"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import SectionData from "../components/sectiondata/SectionData"

const Home = () =>
{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <SectionData/>
            <FAQ/>
        </div>
    )
}

export default Home