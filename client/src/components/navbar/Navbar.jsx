import "./navbar.css"
import AddProduct from "../modals/AddProduct"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUserData } from "../../redux/slicers/UserSlice";
import { Image } from "cloudinary-react";
import { useState } from "react";
import { useEffect } from "react";
import { selectProducts } from "../../redux/slicers/ProductSlice";


const Navbar = ({users}) =>{
    let windoWidth = window.innerWidth;

    const user = useSelector(selectUser)
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
        <nav className="navbar navbar-expand-lg bg-light navbar-contianer">
          <div className="container-fluid">
          {windoWidth < 992 && 
          <>
            <Link className="remove-underline" to="/"><span className="navbar-brand navbar-title" >BidMe</span></Link>
            <form className="d-flex" role="search">
              <input className="form-control me-2 search-input" onChange={(e) => {setSearchTerm(e.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
            </form>

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
                <li className="nav-item">
                  <Link className="remove-underline" to="/user">
                    <span className="nav-link add-width">User</span>
                  </Link>
                </li>
              </ul>
              {windoWidth > 992 &&
                <div className="collapse navbar-collapse search-input-container" id="navbarSupportedContent">
                  <form className="d-flex dropdown" role="search">
                    <input className="form-control me-2 search-input" data-bs-toggle="dropdown"  onChange={(e) => {setSearchTerm(e.target.value)}} type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-secondary" type="submit">Search</button>
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
                </div>
              }
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            {windoWidth > 992 &&
            <div className="collapse navbar-collapse right-side" id="navbarSupportedContent">
              <button className="btn btn-danger me-3" onClick={() => dispatch(updateUserData({}))}>logout</button>
              <AddProduct/>
              <div className="avatar-container">
                <Image cloudName="diggwedxe" publicId={user.avatar.public_id} className="avatar"/>
              </div>
            </div>
            }
          </div>
        </nav>
    )
}

export default Navbar