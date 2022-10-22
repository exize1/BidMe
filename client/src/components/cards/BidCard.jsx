import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { selectBids } from '../../redux/slicers/BidsSlice'
import './userCard.css'
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';


const BidCard = ({product}) => {

    const bids = useSelector(selectBids)

    const handleCopy = async (url) => {
        await navigator.clipboard.writeText(url)
    }


    const filteredBids = (filterKey) => {
        return(
            bids.filter((val) => {
                if(filterKey === ""){
                    return val;
                }else if(val.productId.includes(filterKey)){
                    return val;
                }else return null
            })
            )
        }

        
    return(
        <div className="card user-card-cotnainer">
            <Link to={product._id}  style={{ textDecoration: 'none' }}>
                <Image cloudName="diggwedxe" publicId={product.image.public_id} className="card-img-top user-card-image"/>
                <div className="card-body user-card-body">
                    <h5 className="user-card-title">{product.productName}</h5>
                    <div className='user-initial-price'>
                        Initial price: {product.initialPrice}$
                    </div>
                    <div className='price'>
                        Current price: {product.latestPrice}$
                    </div>
                </div>
            </Link>
            <div className='card-body user-card-body lower-card-section mt-4'>
                <p className='mb-1'><b>Bids:</b> {filteredBids(product._id).length}</p>
                <div className="btn-group dropup">
                    <button type="button" className="remove-borders" onClick={() => handleCopy(`http://localhost:3000/user/${product._id}`)}>
                        <div className='more-options-icon-container' >
                            <FontAwesomeIcon icon="fa-link" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BidCard