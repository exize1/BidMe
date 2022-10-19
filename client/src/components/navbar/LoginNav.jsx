import "./navbar.css"
import { Link } from 'react-router-dom';


const LoginNav = () =>{
    let windoWidth = window.innerWidth;

    return(
        <nav className="navbar navbar-expand-lg bg-light navbar-contianer">
          <div className="container-fluid">
          {windoWidth < 992 && 
          <>
            <Link className="remove-underline" to="/"><span className="navbar-brand navbar-title" >BidMe</span></Link>
          </>}
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            {windoWidth > 992 && <Link className="remove-underline" to="/"><span className="navbar-brand navbar-title" >BidMe</span></Link>}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="remove-underline" to="/">
                    <span className="nav-link add-width">Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="remove-underline" to="/auction">
                    <span className="nav-link add-width">Auction</span>
                  </Link>
                </li>
              </ul>
            </div>
            {windoWidth > 992 &&
            <div className="collapse navbar-collapse right-side" id="navbarSupportedContent">
              <Link to="/login">
                <button type="button" className="btn btn-primary me-3  btn-sm">Login</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-secondary me-3 btn-sm">Sign up</button>
              </Link>
            </div>
            }
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
    )
}

export default LoginNav