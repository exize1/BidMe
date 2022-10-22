import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Image } from "cloudinary-react"
import { useState } from "react"
import { useSelector } from "react-redux"
import BidCard from "../../components/cards/BidCard"
import UserCard from "../../components/cards/UserCard"
import ChangePicture from "../../components/modals/ChangePicture"
import Settings from "../../components/user/settings/Settings"
import { selectBids } from "../../redux/slicers/BidsSlice"
import { selectProducts } from "../../redux/slicers/ProductSlice"
import { selectUser } from "../../redux/slicers/UserSlice"
import { userRequest } from "../../requestMethods"
import "./userPage.css"

const UserPage = () => {

    const user = useSelector(selectUser)
    const bids = useSelector(selectBids)
    const products = useSelector(selectProducts)
    const [open, setOpen] = useState(false)
    const [myBids, setMyBids] = useState(false)
    const [userAuctions, setUserAuctions] = useState(true)
    const [settings, setSettings] = useState(false)
    const [actionUnderline, setActionUnderline] = useState("underline")
    const [settingsUnderline, setSettingsUnderline] = useState("")
    const [myBidsUnderline, setMyBidsUnderline] = useState("")
    const [producImage, setProductImage] = useState("")
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [alertType, setAlertType] = useState("")
    const [myBidsData, setMyBidsData] = useState([])


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

    const handleSubmition = (value) =>{
        value && 
        userRequest.patch(`/api/users/${user._id}`, {"avatar": value, "public_id": user.avatar.public_id})
            .then((res) => {
                const data = res.data
                data && 
                setAlert(false) 
                setAlertType(res.data.alertType) 
                setAlertMessage(res.data.message)
            })
            .catch((err) => {console.log(err)});
    }

    const filteredUserAuctions = (filterKey) => {
        return(
            products.filter((val) => {
                if(filterKey === ""){
                    return val;
                }else if(val.userId.includes(filterKey)){
                    return val;
                }else return null
            })
            )
        }
    const filteredAuctions = (filterKey) => {
        return(
            products.filter((val) => {
                if(filterKey === ""){
                    return val;
                }else if(val._id.includes(filterKey)){
                    return val;
                }else return null
            })
            )
        }

        const removeDuplicate = () => {
            userRequest.post(`/api/bidedproduct/`, ({userId: user._id}))
                .then((res) => {
                    const data = res.data
                    data && setMyBidsData(data);
         
                })
                .catch((err) => {console.log(err)});
        }

    return( 
        <>
        <div className="home-background"/>
        <div className="user-page-container">
            <div className="profile-container">
                <div className="banner-container">
                    <img src="https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-329.jpg?w=2000" className="banner img-fluid" alt="banner"/>
                </div>
                <div className="profile-picture-container">
                    <Image cloudName="diggwedxe" publicId={user.avatar.public_id} className="img-thumbnail"/>
                    <div className="profile-picture-editor-container" onClick={() => setOpen(true)}>
                        <div className="profile-picture-editor">
                            <FontAwesomeIcon icon="fa-pen" />
                        </div>
                    </div>
                </div>
                <div className="profile-name-container">
                    <h2 className="profile-name">{user.firstName + " " + user.lastName}</h2>
                </div>
            </div>
                <ChangePicture open={open} setOpen={setOpen} setAlert={setAlert}>
                            <div className={`alert alert-${alertType} popup-alert mb-4`} hidden={alert} role="alert">{alertMessage}</div>
                            
                            <div className="form-floating mb-3">
                                <label className="input-group-text" htmlFor="inputGroupFile01">Add Photo</label>
                                <input name="avatar" type="file" className="form-control" id="inputGroupFile01" onChange={handleProductImageUpload}/>
                            </div>
                            <button type="button" className="btn btn-success" onClick={() => handleSubmition(producImage)}>submit</button>
                </ChangePicture>
            <div className="options-container">
                <div className="buttons-container">
                    <button className={`btn user-buttons ${actionUnderline}`} onClick={() => {
                        setMyBids(false) 
                        setUserAuctions(true)
                        setSettings(false)
                        setActionUnderline("underline")
                        setMyBidsUnderline("")
                        setSettingsUnderline("")
                        }}>
                            My actions
                    </button>
                    <button className={`btn user-buttons ${myBidsUnderline}`} onClick={() => {
                        setMyBids(true) 
                        setUserAuctions(false)
                        setSettings(false)
                        setActionUnderline("")
                        setMyBidsUnderline("underline")
                        setSettingsUnderline("")
                        removeDuplicate()
                        }}>
                            My bids
                    </button>
                    <button className={`btn user-buttons ${settingsUnderline}`} onClick={() => {
                        setMyBids(false)
                        setUserAuctions(false)
                        setSettings(true)
                        setActionUnderline("")
                        setMyBidsUnderline("")
                        setSettingsUnderline("underline")
                    }}>
                            Settings
                    </button>
                </div>
                {userAuctions &&
                    <div className="user-cards-container">
                        {filteredUserAuctions(user._id).length === 0 ? 
                        <div>
                            <h1>No auctions yet</h1>
                        </div>: 
                        filteredUserAuctions(user._id).map((product, index) =>{
                            return(
                                <div className="user-card-container">
                                    <UserCard key={index} product={product} setAlert={setAlert}/>
                                </div>
                            )
                        })
                    }
                    </div>
                }
                {myBids &&
                    <div className="user-cards-container">
                    {myBidsData.length === 0 ? 
                        <div>
                            <h1>No Bids yet</h1>
                        </div>: 
                        
                        myBidsData.map((bid, index) => {
                            console.log(index, bid);
                            console.log(filteredAuctions(bid.productId)[0]);
                            return(
                                <div className="user-card-container">
                                    <BidCard key={index} product={filteredAuctions(bid.productId)[0]} setAlert={setAlert}/>
                                </div>
                            )
                        })
                    }
                    </div>
                }
                {settings &&
                    <div className="user-settings-container mb-5 ">
                        <Settings/>
                    </div>
                }
            </div>
        </div>
    </>

    )
}

export default UserPage