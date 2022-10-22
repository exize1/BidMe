import { updateBidsData } from "./redux/slicers/BidsSlice";
import { updateProductData } from "./redux/slicers/ProductSlice";
import { updateUserData } from "./redux/slicers/UserSlice";
import { publicRequest } from "./requestMethods";


export function getBids(dispatch) {
    publicRequest.get('/api/bids')
        .then((res) => {
            res.data && dispatch(updateBidsData(res.data))
        })
        .catch((err) => console.log(err));
}


export function getProducts (dispatch) {
    publicRequest.get('/api/product')
    .then((res) => {
        res.data && dispatch(updateProductData(res.data))
    })
    .catch((err) => console.log(err));
}

export function getUsers (setUsers) {
    publicRequest.get('/api/users')
        .then((res) => {
            res.data && setUsers(res.data)
        })
        .catch((err) => console.log(err));
}

export function getUser (dispatch, id) {
    publicRequest.get(`/api/users/${id}`)
        .then((res) => {
            res.data && dispatch(updateUserData(res.data))
        })
        .catch((err) => console.log(err));
}

