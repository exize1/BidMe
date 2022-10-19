import './modal.css'
import { Formik } from "formik";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/slicers/UserSlice"
import { selectProducts } from "../../redux/slicers/ProductSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OpenIllustration from '../illustration/Illustration';
import DemoCard from '../illustration/DemoCard';
import { userRequest } from '../../requestMethods';
import { getProducts } from '../../middleWare';

const AddProduct = ({className}) => {

    let windoWidth = window.innerWidth;

    const [productImage, setProductImage] = useState("")
    const products = useSelector(selectProducts)

    const handleProductImageUpload = (e) => {
        const file = e.target.files[0]
        transformFile(file)
    }

    const transformFile = (file) => {
        const reader = new FileReader()

        if(file){
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setProductImage(reader.result)
            }
        }else{
            setProductImage("")
        }
    }
    
    const [demoProductName, setDemoProductName] = useState("")
    const [demoProductPrice, setDemoProductPrice] = useState("")
    const [demoProductDescription, setDemoProductDescription] = useState("")
    const [demoProductEndDate, setDemoProductEndDate] = useState("")
    const [selectedImage, setSelectedImage] = useState([])

    const onSelectfile = (e) => {
        const selectedFile = e.target.files
        const selectedFileArray = Array.from(selectedFile)

        const imageArray = selectedFileArray.map((file) => {
            return URL.createObjectURL(file)
        })
        setSelectedImage(imageArray)
    }
    
    const user = useSelector(selectUser)
    const [open, setOpen] = useState(false)
    const [Illustration, setIllustration] = useState(false)
    const [alert, setAlert] = useState(true)
    const [alertType, setAlertType] = useState("")
    const [alertMessage, setAlertMessage] = useState("")

    const addProduct = (value) => {
        userRequest.post('/api/product', value)
        .then((res) => {
            res.data && getProducts(dispatch)
            setAlertType(res.data.alertType)
            setAlertMessage(res.data.message)
            res.data.error && setAlert(!res.data.error)
            !res.data.error && setAlert(res.data.error)
            // const id = setInterval(()=>{setOpen(false)}, 1000)
            // id()
            // clearInterval(id)
        })
        .catch((err) => console.log(err));
    }
    const dispatch = useDispatch()
    
    const date = new Date();
    const handleSubmition = (values) => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + Number(demoProductEndDate))
        const value = {
            userId: user._id,
            image: productImage,
            productName: demoProductName,
            description: demoProductDescription,
            category: values.category,
            initialPrice: demoProductPrice,
            latestPrice: demoProductPrice,
            numberOfBids: "0", 
            initialDate: date.getDate() 
            + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
            endingDate: endDate.getDate() 
            + "." + (endDate.getMonth() + 1) + "." + endDate.getFullYear(),
            hasEnded: false  
        };
        addProduct(value)
  }

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const openIllustration = () => {
        setIllustration(!Illustration)
    }

    return(
        <div className='modal-container'>
            <button type="button" className={`btn btn-success add-product-btn ${className}`} onClick={() => {
                handleOpen()
                setAlert(true)
                }}>+ Add Product</button>
        { open &&
            <div className='modal-background'>
                <div className='modal-fade-container large'>
                    <div className='modal-title-contianer modal-header'>
                        <h5 className="modal-title" id="exampleModalLabel">Add New Product</h5>
                        <button onClick={() => handleClose()} type="button" className="btn-close"></button>
                    </div>
                    <div className='add-overflow'>
                        <div className='modal-body-contianer row'>
                            <div className="col">
                                <Formik
                                    initialValues={{
                                        productName: "",
                                        src: "",
                                        category: "",
                                        initialPrice: "",
                                        description: "",
                                        amountOfDays: 0,

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
                                        <div className="form-floating mb-3">
                                            <input name="productName" type="text"  className="form-control" id="floatingInput" placeholder="Product Name" onChange={e => setDemoProductName(e.target.value)} value={demoProductName} onBlur={handleBlur}/>
                                            <label htmlFor="floatingInput">Product Name</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <label className="input-group-text" htmlFor="inputGroupFile01">Add Photo</label>
                                            <input name="src" type="file" className="form-control" id="inputGroupFile01" onChange={(e) => {
                                                onSelectfile(e)
                                                handleProductImageUpload(e)
                                                }}  onBlur={handleBlur}/>
                                        </div>
                                        <div className="input-group">
                                            <select name="category" className="form-select" id="inputGroupSelect02" onChange={handleChange} value={values.category} onBlur={handleBlur}>
                                                <option defaultValue>Other...</option>
                                                <option value="collectibles">Collectibles & Art</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="fashion">Fashion </option>
                                                <option value="home">Home & Garden</option>
                                                <option value="accessories">Accessories</option>
                                                <option value="musical">Musical Instruments </option>
                                                <option value="sporting">Sporting</option>
                                                <option value="toys">Toys & Hobbies</option>
                                                <option value="other">Other </option>
                                            </select>
                                            <label className="input-group-text" htmlFor="inputGroupSelect02">Categories</label>
                                        </div>
                                        <div className="input-group my-3">
                                            <span className="input-group-text">$</span>
                                            <input name="initialPrice" type="number" className="form-control" placeholder='Initial Price' onChange={ e => setDemoProductPrice(e.target.value)} value={demoProductPrice} onBlur={handleBlur}/>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <textarea name="description" type="text" className="form-control" id="floatingInput" placeholder="Description" onChange={ e => setDemoProductDescription(e.target.value)} value={demoProductDescription} onBlur={handleBlur}/>
                                            <label htmlFor="floatingInput">Description</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input name="amountOfDays" type="number" className="form-control" id="floatingInput" placeholder="Amount of Days" onChange={ e => setDemoProductEndDate(e.target.value)} value={demoProductEndDate} onBlur={handleBlur} />
                                            <label htmlFor="floatingInput">Amount of Days</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary mb-4">Submit</button>
                                        <div className={`alert alert-${alertType} popup-alert mb-4`} role="alert" hidden={alert}>
                                            {alertMessage}
                                        </div>
                                    </form>
                                    )}
                                </Formik>          
                            </div>
                            {windoWidth > 600 &&
                            <div className="col demo-container">
                                <div className='demo-card-container'>
                                <h2 className='demo-card-title'>Demo card</h2>
                                    <div onClick={() => openIllustration()}>
                                        <DemoCard selectedImage={selectedImage[0]} demoProductName={demoProductName} demoProductPrice={demoProductPrice} demoProductDescription={demoProductDescription} demoProductEndDate={demoProductEndDate} />
                                        <FontAwesomeIcon icon="fa-hand-point-up" className='click-here-icon'/>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className='modal-footer-contianer modal-footer'>
                        <button onClick={() => handleClose()} type="button" className="btn btn-secondary close-btn">Close</button>
                    </div>
                </div>
                {Illustration && windoWidth > 600 &&
                    <OpenIllustration selectedImage={selectedImage[0]} demoProductName={demoProductName} demoProductPrice={demoProductPrice} demoProductDescription={demoProductDescription} demoProductEndDate={demoProductEndDate} />
                }
                {windoWidth < 600 &&
                <div className="demo-container">
                    <div className='demo-card-container'>
                        <div onClick={() => openIllustration()}>
                            <DemoCard selectedImage={selectedImage[0]} demoProductName={demoProductName} demoProductPrice={demoProductPrice} demoProductDescription={demoProductDescription} demoProductEndDate={demoProductEndDate} />
                            <FontAwesomeIcon icon="fa-hand-point-up" className='click-here-icon'/>
                        </div>
                    </div>
                </div>
                }
            </div>
            }
        </div>
    )
}

export default AddProduct
