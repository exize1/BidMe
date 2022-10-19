import './productCard.css'
import { Image } from 'cloudinary-react'

const ProductCard = ({ product }) => {

    return(
            <div className="product-card-container">
                <div className="card text-bg-dark product-card">
                    <Image cloudName="diggwedxe" publicId={product.image.public_id} className="product-card-image"/>
                    <div className="card-img-overlay product-details-container ">
                        <div>
                            <h5 className="product-card-title card-title">{product.productName}</h5>
                        </div>
                        <div>
                            <p className="card-text limited-lines">{product.description}</p>
                        </div>
                        <div className="row product-details">
                            <div className="product-initial-price col ps-0 pe-1 ">
                                Initial price: {product.initialPrice}$
                            </div>
                            <div className="product-initial-price col ps-0 pe-1 limited-text">
                                Current price: {product.latestPrice}$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductCard
