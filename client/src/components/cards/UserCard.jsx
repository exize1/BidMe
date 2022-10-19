import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { selectBids } from '../../redux/slicers/BidsSlice'
import './userCard.css'
import { Image } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { userRequest } from '../../requestMethods';
import { getProducts } from '../../middleWare';

const UserCard = ({product}) => {

    const bids = useSelector(selectBids)

    const handleCopy = async (url) => {
        await navigator.clipboard.writeText(url)
    }

    const handleEndAuction = (id) => {
        userRequest.patch(`api/endAuction/${id}`)
        .then((res) => {
            res.data && getProducts(dispatch);
        })
        .catch((err) => console.log(err));
    }

    const handleDelete = (id) => {
        userRequest.delete(`api/product/${id}`)
        .then((res) => {
            res.data && getProducts(dispatch);
        })
        .catch((err) => console.log(err));
    }
    const dispatch = useDispatch()
    const filteredBids = (filterKey) => {
        return(
            bids.filter((val) => {
                if(filterKey === ""){
                    return val;
                }else if(val.productId.includes(filterKey)){
                    return val;
                }
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
                        Current price: <b>{product.latestPrice}$</b>
                    </div>
                </div>
            </Link>
            <div className='card-body user-card-body lower-card-section mt-4'>
                <p className='mb-1 bid-number'><b>Bids:</b> {filteredBids(product._id).length}</p>
                <div className="btn-group dropup">
                    <button type="button" className="remove-borders" data-bs-toggle="dropdown"  aria-expanded="false"  data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                        <div className='more-options-icon-container'>
                            <FontAwesomeIcon icon="fa-ellipsis" />
                        </div>
                        <div className='popper'>
                            <p>More options</p>
                        </div>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={() => handleCopy(`http://localhost:3000/user/${product._id}`)} href="#CopyLink">Copy link</a></li>
                        <li><a className="dropdown-item" onClick={() => handleEndAuction(product._id)} href="#EndAuction">End auction</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" onClick={() => handleDelete(product._id)} href="#Delist">Delist</a></li>
                    </ul> 
                </div>
            </div>
        </div>
    )
}

export default UserCard