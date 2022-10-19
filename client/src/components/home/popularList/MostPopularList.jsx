import { useSelector } from "react-redux"
import { selectProducts } from "../../../redux/slicers/ProductSlice"

const MostPopularList = () => {

    const products = useSelector(selectProducts)
    const copyProducts = [...products]
    

    const sortProductsByBids = () =>{
        return(
            copyProducts.sort((a, b) => b.numberOfBids - a.numberOfBids)
        )
    }

    return(
        <>
            {
                sortProductsByBids().map(product => {
                    return(
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">{product.productName}</div>
                                {product.latestPrice}$
                            </div>
                            <span className="badge bg-primary rounded-pill">{product.numberOfBids}</span>
                        </li>
                    )
                })
            }
        </>
    )
}

export default MostPopularList