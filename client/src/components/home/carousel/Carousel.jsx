import { Image } from "cloudinary-react"
import { useSelector } from "react-redux"
import { selectProducts } from "../../../redux/slicers/ProductSlice"

import './carousel.css'


const Carousel = () => {

    const products = useSelector(selectProducts)
    const copyProducts = [...products]


    const sortProducts = () => {
        return (
            copyProducts.sort((a, b) => Number(b.latestPrice) / Number(b.initialPrice) - Number(a.latestPrice) / Number(a.initialPrice))
        )
    }
    return (
        <div className="carousel-flex">
            {sortProducts().length !== 0 &&
                <div id="carouselExampleDark" className="carousel carousel-dark slide carousel-container" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="carousel-img-container">
                                <Image cloudName="diggwedxe" publicId={sortProducts()[0].image.public_id} className="carousel-img" />
                            </div>
                            <div className="carousel-caption d-none d-md-block carousel-details-container">
                                <h5 className="carousel-title">{sortProducts()[0].productName}</h5>
                                <p className="limit-lines">{sortProducts()[0].description}</p>
                            </div>
                            <div>
                                <p className="carousel-caption profit d-none d-md-block">{((sortProducts()[0].latestPrice - sortProducts()[0].initialPrice) / sortProducts()[0].initialPrice * 100).toFixed(0)}% Profit!</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="carousel-img-container">
                                <Image cloudName="diggwedxe" publicId={sortProducts()[1].image.public_id} className="carousel-img" />
                            </div>
                            <div className="carousel-caption d-none d-md-block carousel-details-container">
                                <h5>{sortProducts()[1].productName}</h5>
                                <p className="limit-lines">{sortProducts()[1].description}.</p>
                            </div>
                            <div>
                                <p className="carousel-caption profit d-none d-md-block">{((sortProducts()[1].latestPrice - sortProducts()[1].initialPrice) / sortProducts()[1].initialPrice * 100).toFixed(0)}% Profit!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img-container">
                                <Image cloudName="diggwedxe" publicId={sortProducts()[2].image.public_id} className="carousel-img" />
                            </div>
                            <div className="carousel-caption d-none d-md-block carousel-details-container">
                                <h5>{sortProducts()[2].productName}</h5>
                                <p className="limit-lines">{sortProducts()[2].description}</p>
                            </div>
                            <div>
                                <p className="carousel-caption profit d-none d-md-block">{((sortProducts()[2].latestPrice - sortProducts()[2].initialPrice) / sortProducts()[2].initialPrice * 100).toFixed(0)}% Profit!</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>}
        </div>
    )
}
export default Carousel