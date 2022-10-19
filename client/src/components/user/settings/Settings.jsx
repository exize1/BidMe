import { Image } from "cloudinary-react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, updateUserData } from "../../../redux/slicers/UserSlice";
import { userRequest } from "../../../requestMethods";
import Modal from '../../modals/Modal'
import { Formik } from "formik";
import * as Yup from "yup";
import './settings.css'
import axios from "axios";
import { selectCard, updateCardData } from "../../../redux/slicers/CardSlice";
import { useState } from "react";


const Settings = ( ) => {
    let windoWidth = window.innerWidth;
    const schema = Yup.object().shape({
        cardNumber: Yup.string().min(16).max(16, 'Too many digits')
                .matches( /[0-9]/, "Must Contain only Numbers").required("Please enter a Card Number"),
        month: Yup.string().required(),
        year: Yup.string().required(),
        cvv: Yup.string().min(3).max(3, 'Too many digits')
                .matches( /[0-9]/, "Must Contain only Numbers").required(),
        idNumber: Yup.string()
            .required("Please enter a password")
            .min(9).max(9, 'Too many digits')
            .matches( /[0-9]/, "Must Contain only Numbers")
    })

    const user = useSelector(selectUser)
    const card = useSelector(selectCard)
    const month = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12]
    const year = [22, 23, 24, 25, 26, 27, 28 ,29, 30, 31, 32, 33, 34, 35]
    const [alert, setAlert] = useState(true)
    const [alertType, setAlertType] = useState("")
    const [alertMessage, setAlertMessage] = useState("")
    const handleDelete = (id) => {
        userRequest.delete(`api/users/${id}`)
        .then((res) => {
            res.data && dispatch(updateUserData({}));
        })
        .catch((err) => console.log(err));
    }

    const addCreditCard = (id, values) => {
        userRequest.patch(`api/userCard/${id}`, values)
        .then((res) => {
            const data = res.data
            data && dispatch(updateCardData(values));
            data && setAlert(data.error)
            setAlertType(data.alertType)
            setAlertMessage(data.message)
        })
        .catch((err) => console.log(err));
    }

    const handleSubmition = (values) =>{
        let str = []
        const len = values.cardNumber.length
        for(let i = 0; i < len; i += 4){
          str.push(values.cardNumber.substr(i, 4))
        }
       const dividedCardNumber = str.join('-')
        const value = {
            cardNumber: dividedCardNumber,
            month: values.month,
            year: values.year,
            cvv: values.cvv,
            idNumber: values.idNumber
        }
        addCreditCard(user._id, value)
    }
    const dispatch = useDispatch()
    return(
        <div className="settings-details-container row">
            {windoWidth > 800 ? 
            <>
            <div className="col-6">
                <Modal addOverflow="add-overflow" title="Adding Credit Card" modalButtonName="Change Credit Card" className="ps-0 mb-2">
                <Formik
                        initialValues={{
                            cardNumber: "",
                            month: "",
                            year: "",
                            cvv: "",
                            idNumber: "",
                        }}
                        onSubmit={(values) => {
                            handleSubmition(values)
                        }}
                        validationSchema={schema}
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
                            <div className="form-floating mb-3">
                                <input name="cardNumber" type="text"  className="form-control" id="floatingInput" placeholder="Product Name" onChange={handleChange} value={values.cardNumber} onBlur={handleBlur}/>
                                <label htmlFor="floatingInput">Card Number</label>
                                <p className="error-message">{errors.cardNumber && touched.cardNumber && errors.cardNumber}</p>
                            </div>
                            <div className="input-group col-2">
                                <select name="month" className="form-select" id="inputGroupSelect02" onChange={handleChange} value={values.month} onBlur={handleBlur}>
                                    <option defaultValue>month</option>
                                    {month.map((value, index) => {
                                        return(
                                            <option ket={index} value={value}>{value}</option>
                                            )
                                        })}
                                </select>
                                <label className="input-group-text" htmlFor="inputGroupSelect02">month</label>
                            </div>
                                <p className="error-message">{errors.month && touched.month && errors.month}</p>
                            <div className="input-group mt-3 col-2">
                                <select name="year" className="form-select" id="inputGroupSelect02" onChange={handleChange} value={values.year} onBlur={handleBlur}>
                                    <option defaultValue>year</option>
                                    {year.map((value, index) => {
                                        return(
                                            <option ket={index} value={value}>{value}</option>
                                        )
                                    })}
                                </select>
                                <label className="input-group-text" htmlFor="inputGroupSelect02">year</label>
                            </div>
                                <p className="error-message">{errors.year && touched.year && errors.year}</p>
                            <div className="form-floating mb-3">
                                <input name="cvv" type="text"  className="form-control" id="floatingInput" placeholder="Product Name" onChange={handleChange} value={values.cvv} onBlur={handleBlur}/>
                                <label htmlFor="floatingInput">CVV</label>
                                <p className="error-message">{errors.cvv && touched.cvv && errors.cvv}</p>
                            </div>
                            <div className="form-floating mb-3">
                                <input name="idNumber" type="text"  className="form-control" id="floatingInput" placeholder="Product Name" onChange={handleChange} value={values.idNumber} onBlur={handleBlur}/>
                                <label htmlFor="floatingInput">ID Numbe</label>
                                <p className="error-message">{errors.idNumber && touched.idNumber && errors.idNumber}</p>
                            </div>
                            <button type="submit" className="btn btn-primary mb-4">Submit</button>
                            <div className={`alert alert-${alertType} popup-alert mb-4`} role="alert" hidden={alert}>
                                {alertMessage}
                            </div>
                        </form>
                        )}
                    </Formik>      
                </Modal>
                <p className="delist-all-botton">Change password</p>
                <p className="delist-all-botton">Delist all my Auctions</p>
                <p className="delete-botton" onClick={() => handleDelete (user._id)}>Delete Account</p>
            </div>
            <div className="col-6">
                <div className="credit-card row">
                    <div className="col-4 pe-0">
                        <div className="chip-container">
                            <Image cloudName="diggwedxe" publicId="credit_card_chip_hbndve" className="chip"/>
                        </div>
                    </div>
                    <div className="col ps-0">
                        <h4 className="credit-card-name">Visa</h4>
                        <div className="credit-card-number">
                            <p className="mb-0">{card.cardNumber ? card.cardNumber : "xxxx-xxxx-xxxx-xxxx"}</p>
                        </div>
                        <div className="credit-card-validity">
                            <p className="mb-0 valid">valid end</p>
                            <p className="mb-0 ms-2">{(card.month ? card.month : "MM") + "/" + (card.year ? card.year : "YY") }</p>
                        </div>
                    </div>
                </div>
            </div>
            </> :
            <>
            <div className="row settings-font-size">
                <div className="col">
                    <Modal addOverflow="add-overflow" title="Adding Credit Card" modalButtonName="Change Credit Card" className="ps-0 pt-0 mb-2 settings-font-size">
                    <Formik
                            initialValues={{
                                cardNumber: "",
                                month: "",
                                year: "",
                                cvv: "",
                                idNumber: "",
                            }}
                            onSubmit={(values) => {
                                handleSubmition(values)
                            }}
                            // validationSchema={schema}
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
                                <div className="form-floating mb-3">
                                    <input name="cardNumber" type="text"  className="form-control" id="floatingInput" placeholder="Product Name" onChange={handleChange} value={values.cardNumber} onBlur={handleBlur}/>
                                    <label htmlFor="floatingInput">Card Number</label>
                                </div>
                                <div className="input-group mb-3 col-2">
                                    <select name="month" className="form-select" id="inputGroupSelect02" onChange={handleChange} value={values.month} onBlur={handleBlur}>
                                        <option defaultValue>month</option>
                                        {month.map((value, index) => {
                                            return(
                                                <option ket={index} value={value}>{value}</option>
                                                )
                                            })}
                                    </select>
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">month</label>
                                </div>
                                <div className="input-group mb-3 col-2">
                                    <select name="year" className="form-select" id="inputGroupSelect02" onChange={handleChange} value={values.year} onBlur={handleBlur}>
                                        <option defaultValue>year</option>
                                        {year.map((value, index) => {
                                            return(
                                                <option ket={index} value={value}>{value}</option>
                                            )
                                        })}
                                    </select>
                                    <label className="input-group-text" htmlFor="inputGroupSelect02">year</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input name="cvv" type="text"  className="form-control" id="floatingInput" placeholder="Product Name" onChange={handleChange} value={values.cvv} onBlur={handleBlur}/>
                                    <label htmlFor="floatingInput">CVV</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input name="idNumber" type="text"  className="form-control" id="floatingInput" placeholder="Product Name" onChange={handleChange} value={values.idNumber} onBlur={handleBlur}/>
                                    <label htmlFor="floatingInput">ID Numbe</label>
                                </div>
                                <button type="submit" className="btn btn-primary mb-4">Submit</button>
                                <div className={`alert alert-${alertType} popup-alert mb-4`} role="alert" hidden={alert}>
                                    {alertMessage}
                                </div>
                            </form>
                            )}
                        </Formik>      
                    </Modal>
                    <p className="delist-all-botton">Change password</p>
                </div>
                <div className="col">
                    <p className="delist-all-botton">Delist all my Auctions</p>
                    <p className="delete-botton" onClick={() => handleDelete (user._id)}>Delete Account</p>
                </div>
            </div>
            <div className="credit-card-container">
                <div className="credit-card row">
                    <div className="col-4 pe-0">
                        <div className="chip-container">
                            <Image cloudName="diggwedxe" publicId="credit_card_chip_hbndve" className="chip"/>
                        </div>
                    </div>
                    <div className="col ps-0">
                        <h4 className="credit-card-name">Visa</h4>
                        <div className="credit-card-number">
                            <p className="mb-0">1234-1234-1234-1234</p>
                        </div>
                        <div className="credit-card-validity">
                            <p className="mb-0 valid">valid end</p>
                            <p className="mb-0 ms-2">12/25</p>
                        </div>
                    </div>
                </div>
            </div>
            </> 
            }
            
        </div>
    )
}

export default Settings