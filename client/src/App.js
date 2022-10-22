import './App.css';
import Auction from './pages/Auction/Auction';
import SignUp from './pages/registration/SignUp';
import Login from './pages/registration/Login';
import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEyeSlash,
  faEye,
  faHand,
  faEllipsis,
  faPen,
  faHandPointUp,
  faLink,
  faRightFromBracket,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from './redux/slicers/ProductSlice';
import { useEffect, useState } from 'react';
import ProductPage from './pages/products/ProductPage';
import NoMatch from './pages/nomatch/NoMatch';
import Home from './pages/home/Home';
import { selectUser } from './redux/slicers/UserSlice';
import UserPage from './pages/user/UserPage';
import {getBids, getProducts,getUsers} from './middleWare'
import NewNavbar from './components/navbar/NewNavbar';
import NewLoginNav from './components/navbar/NewLoginNav';

library.add(faEyeSlash, faEye, faHand, faEllipsis, faPen, faHandPointUp, faLink, faRightFromBracket, faArrowRight)


function App() {

  const user = useSelector(selectUser)
  const products = useSelector(selectProducts)
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

 
  useEffect(()=>{
      getProducts(dispatch)
      getBids(dispatch)
      getUsers(setUsers)

      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      {user.loggedIn ? (<>
        <NewNavbar users={users}/> 
        <div className='move-under-nav'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auction" element={<Auction/>}/>
              {products.map((product, index) => {
                return(
                  <Route path={"/auction/" + product._id} element={<ProductPage product={product}/>}/>
                )
              })}
            <Route path="/user" element={<UserPage/>}/>
              {products.map((product, index) => {
                return(
                  <Route path={"/user/" + product._id} element={<ProductPage product={product}/>}/>
                )
              })}
            <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </div>
      </>
      ):(
      <>
        <NewLoginNav/>
        <div className='move-under-nav'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auction" element={<Auction/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="*" element={<Login/>}/>
            </Routes>
        </div>
      </>

      )}
      
    </div>
  );
}

export default App;
