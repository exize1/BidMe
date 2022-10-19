import './infoSection.css'

const ResourcesCard = (props) => {
    return (
      <div className="card resources-card">
        <img src={props.src} className="card-img-top resources-card-img" alt="..." />
        <div className={`me-4 mb-4 card-body fw-semibold text-container `}>
          <p className="home-card-text">{`${props.description}`}</p>
        </div>
      </div>
    );
  };

const InfoSection = () => {

  let windoWidth = window.innerWidth;

  return (
    <div>
      <div className="container">
        <h2 className="text-center my-5 pt-5 fs-4 fw-semibold">
          Resources for getting started
        </h2>
        {windoWidth > 800 ? 
        (<div className="row">
          <div className="col">
            <ResourcesCard 
            src="https://www.smartidcardprinter.com/wp-content/uploads/2019/09/How-To-Choose.png" 
            description="How to Easily Setup a Bider Account"
            addClass=""
            />
          </div>
          <div className="col">
            <ResourcesCard 
            src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-faq-page.jpg?v=1635366396&width=1024" 
            description="How the Auctions Work"
            addClass=""
            />
          </div>
          <div className="col">
            <ResourcesCard 
            src="https://i.pcmag.com/imagery/articles/05N2TeygTRzxKA2VHK6dnWp-1.fit_lim.size_1600x900.v1648144328.jpg" 
            description="How to Find a Product you Love"
            addClass=""
            />
          </div>
        </div>):<div className="">
          <div className="mb-4">
            <ResourcesCard 
            src="https://www.smartidcardprinter.com/wp-content/uploads/2019/09/How-To-Choose.png" 
            description="How to Easily Setup a Bider Account"
            addClass=""
            />
          </div>
          <div className="mb-4">
            <ResourcesCard 
            src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-faq-page.jpg?v=1635366396&width=1024" 
            description="How the Auctions Work"
            addClass=""
            />
          </div>
          <div className="mb-4">
            <ResourcesCard 
            src="https://i.pcmag.com/imagery/articles/05N2TeygTRzxKA2VHK6dnWp-1.fit_lim.size_1600x900.v1648144328.jpg" 
            description="How to Find a Product you Love"
            addClass=""
            />
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default InfoSection;