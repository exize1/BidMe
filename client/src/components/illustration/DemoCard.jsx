import '../cards/productCard.css'

const DemoCard = ({selectedImage, demoProductName, demoProductPrice, demoProductDescription, demoProductEndDate}) => {

    return(
            <div className="product-card-container">
                <div className="card text-bg-dark product-card">
                    <img src={selectedImage ? selectedImage : "https://userguiding.com/wp-content/uploads/2021/05/product-service-manager.jpg"} alt="Product"  className="product-card-image" />
                    <div className="card-img-overlay product-details-container ">
                        <div>
                            <h5 className="product-card-title card-title">{demoProductName ? demoProductName : "Product Name"}</h5>
                        </div>
                        <div>
                            <p className="card-text limited-lines">{demoProductDescription ? demoProductDescription : "Some Descrption about the product..."}</p>
                        </div>
                        <div className="row product-details">
                            <div className="col ps-0 pe-1 ">
                                Initial price: {demoProductPrice ? demoProductPrice : "####"}$
                            </div>
                            <div className="col  ps-0 pe-1 limited-text">
                                Current price: {demoProductPrice ? demoProductPrice : "####"}$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DemoCard
