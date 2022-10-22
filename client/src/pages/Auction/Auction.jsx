import './auction.css'
import { useEffect, useState } from "react"
import ProductCard from "../../components/cards/ProductCard";
import { selectProducts } from "../../redux/slicers/ProductSlice";
import { useSelector } from "react-redux";
import FilterByCategory from "../../components/Auction/FilterByCategory";
import { Link } from "react-router-dom";
import AddProduct from '../../components/modals/AddProduct';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Auction = () => {
    const [cardsFiltered, setCardsFiltered] = useState(false)
    const [categories, setCategory] = useState([
        { category: "collectibles", background: "https://images.squarespace-cdn.com/content/v1/5b639477da02bc37d54bda10/1559424311155-BPI63IRYAZRWYUUCHRMZ/IMG_5752.JPG?format=1000w" },
        { category: "electronics", background: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.max-1000x1000.jpg" },
        { category: "fashion", background: "https://static01.nyt.com/images/2022/09/13/business/12green-fashion-print/merlin_212957199_9c5f9b9e-c492-481c-ad44-29a25d0b7496-jumbo.jpg?quality=75&auto=webp" },
        { category: "home", background: "https://foyr.com/learn/wp-content/uploads/2019/03/best-home-garden-ideas.png" },
        { category: "accessories", background: "https://cdn.shopify.com/s/files/1/0281/3837/3173/files/dressbarn_Rich_Media_Blog_2_Types_of_Accessories_Header_600x600.jpg?v=1629829475" },
        { category: "musical", background: "https://cdn1.epicgames.com/ue/item/MusicalInstruments_Screenshot_01-1920x1080-4091939f118fb786ae3fb1fab71c76e8.png?resize=1&w=1920" },
        { category: "sporting", background: "https://i.pinimg.com/originals/3c/c4/8d/3cc48d64caa3cc00ad176a2af2506bea.jpg" },
        { category: "toys", background: "https://i.ytimg.com/vi/wiHZ-VEm3o0/maxresdefault.jpg" }
    ]);
    const products = useSelector(selectProducts)

    const checkEndOfAuction = () => {
        const body = {}
        axios
            .patch("/api/checkEndOfAuction", body)
            .then((res) => {
                res.data && console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    const filtered = (category) => {
        return (
            products.filter((val) => {
                if (category === "") {
                    return val;
                } else if (val.category.includes(category)) {
                    return val;
                }else return null
            })
        )
    }
    
    useEffect(() => {
        checkEndOfAuction()
    }, [])

    return (
        <div className="acution-container ">
            <div className='filter-button-container'>
                <FilterByCategory setCategory={setCategory} setCardsFiltered={setCardsFiltered} />
            </div>
            <div>
                {
                    categories.map((category, categoryIndex) => {
                        return (
                            <>
                                <div className='auction-background-container'>
                                    <div className='auction-background'>
                                        <img className='background' src={category.background} alt={category.category} />
                                    </div>
                                </div>
                                <div className='category-container'>
                                    <div className='category'>
                                        <div className='container'>
                                            <h2 className='row' key={categoryIndex}>{category.category}</h2>
                                            <div className={`cards-container ${cardsFiltered ? "flex-wrap-cards" : "flex-nowrap-cards"}`}>
                                                {filtered(category.category).length === 0 ?
                                                    <div className='my-3'>
                                                        <h3 > No products on this category. want to be the first one?</h3>
                                                        <AddProduct />
                                                    </div>
                                                    : filtered(category.category).map((product, index) => {
                                                        if (categories.length > 1) {
                                                            const filteredProductsLength =  filtered(category.category).length 
                                                            if (index > filteredProductsLength - 5) {
                                                                return (
                                                                    <div className='link-container'>
                                                                        <Link to={product._id}>
                                                                            <ProductCard key={index} product={product} />
                                                                        </Link>
                                                                    </div>
                                                                )
                                                            } else if (index === filteredProductsLength - 5) {
                                                                return (
                                                                    <button className='continue-products' onClick={() => {
                                                                        setCategory([categories[categoryIndex]])
                                                                        setCardsFiltered(true)
                                                                    }}><FontAwesomeIcon icon="fa-arrow-right" /></button>
                                                                )
                                                            } else return null
                                                        } else {
                                                            return (
                                                                <div className='link-container'>
                                                                    <Link to={product._id}>
                                                                        <ProductCard key={index} product={product} />
                                                                    </Link>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
            </div>
        </div>
    )
}

export default Auction
