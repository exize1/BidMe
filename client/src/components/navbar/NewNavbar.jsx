import "./navbar.css"
import AddProduct from "../modals/AddProduct"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUserData } from "../../redux/slicers/UserSlice";
import { Image } from "cloudinary-react";
import { useState } from "react";
import { selectProducts } from "../../redux/slicers/ProductSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NewNavbar = ({users}) =>{
    const navigate = useNavigate();
    let windoWidth = window.innerWidth;

    const user = useSelector(selectUser)
    const [open, setOpen] = useState(false)
    const products = useSelector(selectProducts)
    const [searchTerm, setSearchTerm] = useState("");

    const filterSearchUsers = (filterKey) => {
      return(
          users.filter((val) => {
              if(filterKey === ""){
                return val;
              }else if(val.firstName.toLowerCase().includes(filterKey.toLowerCase()) || val.lastName.toLowerCase().includes(filterKey.toLowerCase())){
                  return val;
              }
          })
          )
      }
      
      const filterSearchProducts = (filterKey) => {
        return(
          products.filter((val) => {
                if(filterKey === ""){
                  return val;
                }else if(val.productName.toLowerCase().includes(filterKey.toLowerCase())){
                    return val;
                }
            })
            )
        }
        const dispatch = useDispatch();

    return(
        <>
        <nav className="navbar bg-light navbar-contianer">
            <div className="navabr-fluid">
                <div className={windoWidth < 992 ? "title-button" : "title-links-search"}>
                <Link className="remove-underline" to="/"><a className="navbar-brand navbar-title" onClick={() => setOpen(false)}>BidMe</a></Link>
                    {windoWidth > 992 && 
                    <div className="link-and-search-container">
                        <ul className="navbar-nav navbar-nav-close">
                            <li className="nav-item ">
                            <Link className="remove-underline" to="/">
                                <span className="nav-link add-width" onClick={() => setOpen(false)}>Home</span>
                            </Link>
                            </li>
                            <li className="nav-item ">
                            <Link className="remove-underline" to="/auction">
                                <span className="nav-link add-width" onClick={() => setOpen(false)}>Auction</span>
                            </Link>
                            </li>
                            <li className="nav-item ">
                            <Link className="remove-underline" to="/user">
                                <span className="nav-link add-width" onClick={() => setOpen(false)}>User</span>
                            </Link>
                            </li>
                        </ul>
                        <form className="d-flex dropdown search-input-container" role="search">
                            <input className="form-control me-2 search-input" data-bs-toggle="dropdown"  onChange={(e) => {setSearchTerm(e.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
                            <ul className="dropdown-menu search-dropdown-list">
                            <b className="search-dropdown-title">Users</b>
                            {filterSearchUsers(searchTerm).length === 0 ? 
                                <li key="unfoundUsers"><p className="unfound-dropdown-item">Can't found a result</p></li>
                                :filterSearchUsers(searchTerm).map((userOption, index) => {
                                return(
                                    index < 3 &&
                                    <li key={index}><a className="dropdown-item" href="#">{userOption.firstName + " " + userOption.lastName}</a></li>
                                )
                                })}
                                <li><hr className="dropdown-divider"/></li>
                                <b className="search-dropdown-title">Products</b>
                                {filterSearchProducts(searchTerm).length === 0 ? 
                                <li key="unfoundProducts"><p className="unfound-dropdown-item">Can't found a result</p></li>
                                :filterSearchProducts(searchTerm).map((userOption, index) => {
                                return(
                                    index < 3 &&
                                    <li key={index}><a className="dropdown-item" href="#">{userOption.productName}</a></li>
                                )
                                })}
                            </ul>
                        </form>
                    </div>}
                    {windoWidth < 992 && 
                    <>
                        <form className="d-flex dropdown search-input-container" role="search">
                            <input className="form-control me-2 search-input" data-bs-toggle="dropdown"  onChange={(e) => {setSearchTerm(e.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
                            <ul className="dropdown-menu search-dropdown-list">
                            <b className="search-dropdown-title">Users</b>
                            {filterSearchUsers(searchTerm).length === 0 ? 
                                <li key="unfoundUsers"><p className="unfound-dropdown-item">Can't found a result</p></li>
                                :filterSearchUsers(searchTerm).map((userOption, index) => {
                                return(
                                    index < 3 &&
                                    <li key={index}><a className="dropdown-item" href="#">{userOption.firstName + " " + userOption.lastName}</a></li>
                                )
                                })}
                                <li><hr class="dropdown-divider"/></li>
                                <b className="search-dropdown-title">Products</b>
                                {filterSearchProducts(searchTerm).length === 0 ? 
                                <li key="unfoundProducts"><p className="unfound-dropdown-item">Can't found a result</p></li>
                                :filterSearchProducts(searchTerm).map((userOption, index) => {
                                return(
                                    index < 3 &&
                                    <li key={index}><a className="dropdown-item" href="#">{userOption.productName}</a></li>
                                )
                                })}
                            </ul>
                        </form>
                        <button  className="navbar-button" type="button" onClick={() => setOpen(!open)}><span class="navbar-toggler-icon"></span></button>
                    </>}
                </div>
                {windoWidth > 992 && 
                <>
                <div className="right-side">
                    <button className="btn btn-danger me-3" onClick={() => {
                        navigate("/login")
                        dispatch(updateUserData({}))}
                        }>logout</button>
                    <div className="add-product-container">
                        <AddProduct/>
                    </div>
                    <div className="avatar-container">
                        <Image cloudName="diggwedxe" publicId={user.avatar.public_id} className="avatar"/>
                    </div>
                </div>
              </>
                }
            </div>
        {open && 
            <ul className="navbar-nav navbar-nav-open">
                <li className="nav-item">
                    <Link className="remove-underline" to="/">
                        <span className="nav-link" onClick={() => setOpen(false)}>Home</span>
                    </Link>
                    </li>
                <li className="nav-item">
                    <Link className="remove-underline" to="/auction">
                        <span className="nav-link" onClick={() => setOpen(false)}>Auction</span>
                    </Link>
                    </li>
                <li className="nav-item">
                    <Link className="remove-underline" to="/user">
                        <span className="nav-link" onClick={() => setOpen(false)}>User</span>
                    </Link>
                </li>
                <li className="nav-item logout-add-product-container">
                    <FontAwesomeIcon icon="fa-right-from-bracket" className="logout-btn" onClick={() => dispatch(updateUserData({}))}/>
                    <div className="add-product-container">
                        <AddProduct className="add-product-btn-size"/>
                    </div>
                </li>
            </ul>
        }
        </nav>
        </>
    )
}

export default NewNavbar