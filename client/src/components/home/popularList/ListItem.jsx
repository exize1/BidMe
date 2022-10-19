import { Image } from "cloudinary-react";

export const ListItem = ({sortedProducts , startNum, stopNum}) => {
  let listNum = startNum;
  return (
    <div className="col">
      <ol className="list-group">
        {sortedProducts.slice(startNum, stopNum).map((product, index) => {
            listNum++;
            return (
              <li className="list-group-item 
              d-flex 
              justify-content-between 
              align-items-start 
              border-bottom
              py-3">
                <div className="listNum fw-semibold mt-3 pe-2">{`${listNum}`}</div>
                <div className="collection-profile">
                  <Image cloudName="diggwedxe" publicId={product.image.public_id} className="collection-background"/>
                </div>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{product.productName}</div>
                  Highest Bid: {`${product.latestPrice}`}
                </div>
                <span className="badge bg-primary rounded-pill">{product.numberOfBids}</span>
              </li>
            );
        })}
      </ol>
    </div>
  );
};

export default ListItem;