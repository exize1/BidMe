import { Formik } from "formik"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../redux/slicers/UserSlice"
import { userRequest } from "../../requestMethods"
import Modal from "../modals/Modal"

const AddBid = ({product, className}) => {

    const [bidStatus, setBidStatus] = useState(true)
    const [alertType, setAlertType] = useState("")
    const [bidMessage, setBidMessage] = useState("")
    const user = useSelector(selectUser)


    const addBid = (value) => {
        userRequest.post('/api/bids', value)
        .then((res) => {
            res.data && console.log(bidStatus)
        })
        .catch((err) => console.log(err));
    }

    const changeProductPrice = (value, values) => {
        userRequest.patch(`/api/product/${product._id}`, value)
        .then((res) => {
            const data = res.data
            data &&  
            setBidStatus(!data.error)
            setBidMessage(data.message)
            setAlertType("danger")

            if(!data.error){
                addBid(values)
                setBidStatus(data.error)
                setBidMessage(data.message)
                setAlertType("success")
            }
        })
        .catch((err) => {console.log(err)});
    }
    
    const date = new Date()
    const handleSubmition = (values) => {
        const value = {
            biderId: user._id,
            biderName: user.firstName + " " + user.lastName,
            bidDate: date.getDate() 
            + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
            price: values.price,
            productId: product._id,
          };
        const checkValue = {
            price: values.price,
            biderId: user._id,
        }
        changeProductPrice(checkValue, value)
        }


    return(
        <div>
            <Modal className={className} btnType="success" modalButtonName="Bid" setBidStatus={setBidStatus}>
                <Formik
                    initialValues={{
                        price: "",
                    }}
                    onSubmit={(values) => {
                        handleSubmition(values)
                    }}
                >
                    {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                    }) => (

                    <form onSubmit={handleSubmit} noValidate>
                        
                        <div className="input-group mb-3">
                            <span className="input-group-text">$</span>
                            <input name="price" type="text" className="form-control" placeholder='Bid Price' onChange={handleChange} value={values.initialPrice} onBlur={handleBlur}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-4">Submit</button>
                    </form>
                    )}
                </Formik>       
                        <div className={`alert alert-${alertType} mb-4 popup-alert`} role="alert" hidden={bidStatus}>
                            {bidMessage}
                        </div>
            </Modal>
        </div>
    )
}

export default AddBid