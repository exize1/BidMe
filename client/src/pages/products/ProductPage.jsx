import { Image } from 'cloudinary-react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import AddBid from "../../components/Auction/AddBid"
import GetBiderDetails from '../../components/Auction/GetBiderDetails'
import ScrollSpy from "../../components/Auction/ScrollSpy"
import { selectUser } from '../../redux/slicers/UserSlice'
import { userRequest } from '../../requestMethods'
import "./productPage.css"


const ProductPage = ({product}) => {

    let windoWidth = window.innerWidth;

    const user = useSelector(selectUser)
    const [userValid, setUserValid] = useState(false)

    const checkEndOfAuction = () => {
        const body = {user, product}
        userRequest
            .post("/api/checkEndOfAuction", body)
            .then((res) => {
                res.data && setUserValid(res.data) 
            })
            .catch((err) => console.log(err));
            return userValid;
    };


    return(
        <>
        <div className="home-background"/>
        <div className="product-page-container container">
            <div className='product-page-details-container row'>
                    <div className="card product-page-card col-4">
                        <Image cloudName="diggwedxe" publicId={product.image.public_id} className="product-page-image card-img"/>
                    </div>
                    <div className='col details-container'>
                        <div className='row text-start'>
                            <div className='col-8 pe-0 product-page-title-container'>
                                <h2 className='product-page-title'>{product.productName}</h2>
                            </div>
                            {product.hasEnded ? 
                            <div className='col ps-0 end-date'>
                                <p className="mb-2 ">Auction ended</p>
                            </div>
                            :
                            <div className='col end-date'>
                                <p className="mb-2">Auction ending at: {product.endingDate}</p>
                            </div>
                            }
                            <hr/>
                            <div className='col prices-container'>
                                <p className="d-flex initial-price-container">
                                    Initial Price: 
                                    <p className="initial-price">{product.initialPrice}$</p>
                                    <p className="initial-price-date">({product.initialDate})</p>
                                </p>
                                <div className="d-flex lates-price-container">
                                    <p className="mt-2">Latest Price: </p>
                                    <p className="latest-price">{product.latestPrice}$</p>
                                </div>
                            </div>
                            {product.hasEnded ?
                                checkEndOfAuction(product) ? windoWidth > 635 &&
                                <div className="col-4 bid-button">
                                    <GetBiderDetails className="title-size" product={product}/>
                                </div>
                                : windoWidth > 635 &&
                                <div className="col-4 bid-button">
                                    <AddBid className="title-size disabled" product={product}/>
                                </div>

                            : windoWidth > 635 &&
                                <div className="col-4 bid-button">
                                    <AddBid className="title-size" product={product}/>
                                </div>
                            }
                            <hr />
                            {product.hasEnded ?
                                checkEndOfAuction(product) ? windoWidth < 635 &&
                                <div className="bid-button">
                                    <GetBiderDetails className="title-size bid-button-size" product={product}/>
                                </div>
                                : windoWidth < 635 &&
                                <div className="bid-button">
                                    <AddBid className="title-size bid-button-size disabled" product={product}/>
                                </div>

                            :
                            windoWidth < 635 &&
                                <div className="bid-button">
                                    <AddBid className="title-size bid-button-size" product={product}/>
                                </div>
                            }
                            {windoWidth > 820 &&
                            <div className=''>
                                <p className='w-100 product-page-description'>{product.description}</p>
                            </div>}
                        </div>
                    </div>
                    {windoWidth < 820 &&
                    <div className=''>
                        <p className='w-100 product-page-description'>{product.description}</p>
                    </div>}
                </div>
                <div className="bids-list-contianer mb-5">
                    <ScrollSpy product={product} addOverflow={"add-overflow"} filterKey={product._id}/>
                </div>
            </div>
        </>
    )
}

export default ProductPage