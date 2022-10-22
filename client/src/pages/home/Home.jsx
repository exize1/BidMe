import Carousel from "../../components/home/carousel/Carousel"
import InfoSection from "../../components/home/infoSection/InfoSection"
import NewMostPopular from "../../components/home/popularList/NewMostPopular"
import './home.css'

const Home = () => {

    return(
        <>
            <div className="home-background"/>
            <div className="pt-5 pb-5">
                <h1 className="pt-5 mt-3 mb-4 fw-semibold">Welcome to BidMe</h1>
                <Carousel/>
                <InfoSection/>
                <div className="mt-5 pt-5">
                    <NewMostPopular/>
                </div>
            </div>
        </>
    )
}

export default Home