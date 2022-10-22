import "./mostPopularList.css";
import { ListItem } from "./ListItem";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/slicers/ProductSlice";

const NewMostPopular = () => {
    const products = useSelector(selectProducts)
    let copyProducts = [...products]

    const sortProductsByBids = () =>{
        copyProducts = copyProducts.sort((a, b) => b.numberOfBids - a.numberOfBids)
    }

    sortProductsByBids()

  return (
    <div className={`first-page`}>
      <div className="container">
        <h2 className="text-center mb-5 fs-4 fw-semibold" id="top-bids">
          Top Bids over{" "}
          <a
            className="dropdown-toggle text-decoration-none "
            href="#top-bids"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            last 30 days
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#top-bids">
                last 24 hours
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#top-bids">
                last 7 days
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#top-bids">
                last 30 days
              </a>
            </li>
          </ul>
        </h2>
        <div className="row">
          <ListItem 
          sortedProducts={copyProducts}
          startNum={0}
          stopNum={5}
          />
          <ListItem 
          sortedProducts={copyProducts}
          startNum={5}
          stopNum={10}
          />
          <ListItem 
          sortedProducts={copyProducts}
          startNum={10}
          stopNum={15}
          />
        </div>
      </div>
    </div>
  );
};

export default NewMostPopular;