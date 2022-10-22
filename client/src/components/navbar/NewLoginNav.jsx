import "./navbar.css"
import { Link } from 'react-router-dom';


const NewLoginNav = () =>{

    return(
        <nav className="navbar bg-light navbar-contianer">
          <div className="navabr-fluid">
            <Link className="remove-underline" to="/"><span className="navbar-brand navbar-title" >BidMe</span></Link>
            <ul className="navbar-nav navbar-nav-close">
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
            <div className="right-side login-signup">
              <Link to="/login">
                <button type="button" className="btn btn-primary me-3  btn-sm">Login</button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-secondary me-3 btn-sm">Sign up</button>
              </Link>
            </div>
          </div>
        </nav>
    )
}

export default NewLoginNav