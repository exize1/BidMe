import Carousel from "../../components/home/carousel/Carousel"
import InfoSection from "../../components/home/infoSection/InfoSection"
import MostPopularList from "../../components/home/popularList/MostPopularList"
import NewMostPopular from "../../components/home/popularList/NewMostPopular"
import './home.css'

const Home = () => {

    return(
        <>
            <div className="home-background"></div>
        <div className="pt-5 ">
                <h1 className="pt-5 fs-1 fw-semibold">Welcome to BidMe</h1>
                <Carousel></Carousel>
            <InfoSection/>
            <div className="mt-5 pt-5">
                <NewMostPopular/>
            </div>
        </div>
        </>
    )
}

export default Home