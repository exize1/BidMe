import axios from "axios";
import { updateBidsData } from "./redux/slicers/BidsSlice";
import { updateProductData } from "./redux/slicers/ProductSlice";
import { updateUserData } from "./redux/slicers/UserSlice";


export function getBids(dispatch) {
    axios.get('/api/bids')
        .then((res) => {
            res.data && dispatch(updateBidsData(res.data))
        })
        .catch((err) => console.log(err));
}


export function getProducts (dispatch) {
    axios.get('/api/product')
    .then((res) => {
        res.data && dispatch(updateProductData(res.data))
    })
    .catch((err) => console.log(err));
}

export function getUsers (setUsers) {
    axios.get('/api/users')
        .then((res) => {
            res.data && setUsers(res.data)
        })
        .catch((err) => console.log(err));
}

export function getUser (dispatch, id) {
    axios.get(`/api/users/${id}`)
        .then((res) => {
            res.data && dispatch(updateUserData(res.data))
        })
        .catch((err) => console.log(err));
}

