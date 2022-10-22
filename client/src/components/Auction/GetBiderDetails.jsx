import { useState } from "react"
import { userRequest } from "../../requestMethods"
import Modal from "../modals/Modal"

const GetBiderDetails = ({product, className}) => {

    const [bideDetails, setBideDetails] = useState({})
    const body = { productId: product._id }
    
    const getBider = (body) => {
        userRequest
            .post("/api/getProductBids", body)
            .then((res) => {
                    res.data && setBideDetails(res.data[0]);
            })
            .catch((err) => console.log(err));
    };

    return(
        <div>
            <Modal className={className} title="Bider Details" btnType="primary" modalButtonName="Bider Details" getBider={getBider} body={body}>
                <p><b>Name:</b> {bideDetails ? bideDetails.firstName + " " + bideDetails.lastName : "Deleted user"}</p>
                <p><b>Email:</b> {bideDetails ? bideDetails.email : "No email found"}</p>
                <p><b>Phone Number:</b>  {bideDetails ? "+972" + bideDetails.phone : "No phone found"}</p>
            </Modal>
        </div>
    )
}

export default GetBiderDetails