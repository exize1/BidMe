import './modal.css'

const ChangePicture = ({title, size, setOpen, open, setAlert, children}) => {


    return(
        <>
        { open &&
            <div className='modal-background'>
                <div className={`modal-fade-container ${size}`}>
                    <div className='modal-title-contianer modal-header'>
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button onClick={() => {
                            setOpen(false)
                            setAlert(true)
                            }} type="button" className="btn-close"></button>
                    </div>
                    <div className='add-overflow'>
                        <div className={`modal-body-contianer`}>
                            {children}
                        </div>
                    </div>
                    <div className='modal-footer-contianer modal-footer'>
                        <button onClick={() => {
                            setOpen(false)
                            setAlert(true)
                            }} type="button" className="btn btn-secondary close-btn">Close</button>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default ChangePicture