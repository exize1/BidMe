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
                    console.log(bideDetails);
            })
            .catch((err) => console.log(err));
    };

    return(
        <div>
            <Modal className={className} title="Bider Details" btnType="primary" modalButtonName="Bider Details" getBider={getBider} body={body}>
                <p><b>Name:</b> {bideDetails.firstName + " " + bideDetails.lastName}</p>
                <p><b>Email:</b> {bideDetails.email }</p>
                <p><b>Phone Number:</b> +972 {bideDetails.phone}</p>
            </Modal>
        </div>
    )
}

export default GetBiderDetails