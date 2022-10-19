const FilterByCategory = ({setCategory, setCardsFiltered}) => {
    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop by category
            </button>
            <ul className="dropdown-menu add-overflow">
                <li onClick={() =>{ setCategory([
        { category: "collectibles", background: "https://images.squarespace-cdn.com/content/v1/5b639477da02bc37d54bda10/1559424311155-BPI63IRYAZRWYUUCHRMZ/IMG_5752.JPG?format=1000w"},
        { category: "electronics", background: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.max-1000x1000.jpg"},
        { category: "fashion", background: "https://static01.nyt.com/images/2022/09/13/business/12green-fashion-print/merlin_212957199_9c5f9b9e-c492-481c-ad44-29a25d0b7496-jumbo.jpg?quality=75&auto=webp"},
        { category: "home", background: "https://foyr.com/learn/wp-content/uploads/2019/03/best-home-garden-ideas.png"},
        { category: "accessories", background: "https://cdn.shopify.com/s/files/1/0281/3837/3173/files/dressbarn_Rich_Media_Blog_2_Types_of_Accessories_Header_600x600.jpg?v=1629829475"},
        { category: "musical", background: "https://cdn1.epicgames.com/ue/item/MusicalInstruments_Screenshot_01-1920x1080-4091939f118fb786ae3fb1fab71c76e8.png?resize=1&w=1920"},
        { category: "sporting", background: "https://i.pinimg.com/originals/3c/c4/8d/3cc48d64caa3cc00ad176a2af2506bea.jpg"},
        { category: "toys", background: "https://i.ytimg.com/vi/wiHZ-VEm3o0/maxresdefault.jpg"}
        ])
        setCardsFiltered(false)
        }}><a className="dropdown-item" href="#">All</a></li>
                <li onClick={() => setCategory([{category: "collectibles", background: "https://images.squarespace-cdn.com/content/v1/5b639477da02bc37d54bda10/1559424311155-BPI63IRYAZRWYUUCHRMZ/IMG_5752.JPG?format=1000w"}])}><a className="dropdown-item" href="#">Collectibles & Art</a></li>
                <li  onClick={() => setCategory([{ category: "electronics", background: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.max-1000x1000.jpg"}])}><a className="dropdown-item" href="#">Electronics</a></li>
                <li  onClick={() => setCategory([{ category: "fashion", background: "https://static01.nyt.com/images/2022/09/13/business/12green-fashion-print/merlin_212957199_9c5f9b9e-c492-481c-ad44-29a25d0b7496-jumbo.jpg?quality=75&auto=webp"}])}><a className="dropdown-item" href="#">Fashion </a></li>
                <li onClick={() => setCategory([{ category: "home", background: "https://foyr.com/learn/wp-content/uploads/2019/03/best-home-garden-ideas.png"}])}><a className="dropdown-item" href="#">Home & Garden</a></li>
                <li  onClick={() => setCategory([{ category: "accessories", background: "https://cdn.shopify.com/s/files/1/0281/3837/3173/files/dressbarn_Rich_Media_Blog_2_Types_of_Accessories_Header_600x600.jpg?v=1629829475"}])}><a className="dropdown-item" href="#">Accessories</a></li>
                <li  onClick={() => setCategory([{ category: "musical", background: "https://cdn1.epicgames.com/ue/item/MusicalInstruments_Screenshot_01-1920x1080-4091939f118fb786ae3fb1fab71c76e8.png?resize=1&w=1920"}])}><a className="dropdown-item" href="#">Musical Instruments </a></li>
                <li onClick={() => setCategory([{ category: "sporting", background: "https://i.pinimg.com/originals/3c/c4/8d/3cc48d64caa3cc00ad176a2af2506bea.jpg"}])}><a className="dropdown-item" href="#">Sporting</a></li>
                <li  onClick={() => setCategory([{ category: "toys", background: "https://i.ytimg.com/vi/wiHZ-VEm3o0/maxresdefault.jpg"}])}><a className="dropdown-item" href="#">Toys & Hobbies</a></li>
                <li  onClick={() => setCategory(["other"])}><a className="dropdown-item" href="#">Other </a></li>
            </ul>
        </div>
    )
}

export default FilterByCategory