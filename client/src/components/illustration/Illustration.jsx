import { Image } from 'cloudinary-react'
import './illustration.css'

const OpenIllustration = ({selectedImage, demoProductName, demoProductPrice, demoProductDescription, demoProductEndDate}) => {
    const date = new Date()
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + Number(demoProductEndDate))
    const demoEndingdate = endDate.getDate() 
    + "." + (endDate.getMonth() + 1) + "." + endDate.getFullYear()

    const demoStartDate = date.getDate() 
    + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    
    return(
        <div className='illustration-container'>
            <div className='ms-3 row'>
                <div className="me-2 mt-3 card illustration-product-page-card col-4">
                    <img src={selectedImage ? selectedImage : "https://userguiding.com/wp-content/uploads/2021/05/product-service-manager.jpg"} alt="Product" className="illustration-product-card-image card-img"/>
                    {/* <Image cloudName="diggwedxe" publicId={products[0].image.public_id} className="illustration-product-card-image card-img"/> */}
                </div>
                <div className='col-8 illustration-details-container'>
                    <div className='row text-start'>
                        <div className='col-6 illustration-title-container'>
                            <h2 className='mb-1 mt-2 illustration-title'>{demoProductName ? demoProductName: "ProductName"}</h2>
                        </div>
                        <div className='col end-date '>
                            <p className="my-1 illustration-end-date">{demoEndingdate}</p>
                        </div>
                        <hr/>
                        <div className='col-8'>
                            <p className="illustration-initial-price mb-0 d-flex">
                                Initial Price: 
                                <b className='ms-1'>{demoProductPrice ? demoProductPrice : "####"}$</b>
                                <p className="initial-price-date">({demoStartDate})</p>
                            </p>
                            <div className="illustration-initial-price d-flex">
                                <p className="me-1 mb-2">Latest Price: </p>
                                <b className="illustration-latest-price">{demoProductPrice ? demoProductPrice : "####"}$</b>
                            </div>
                        </div>
                        <div className="col-4 bid-button">
                            
                        </div>
                        <hr className='mb-2'/>
                        <div className='illustration-description'>
                            <p className='w-100 '>{demoProductDescription ? demoProductDescription : "Some Descrption about the product..."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenIllustration