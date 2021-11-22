import React, { useContext } from "react";
import Context from "../context";
import PropTypes from 'prop-types';

function ModalRemove() {
    const { closeModal, removeUser } = useContext(Context)
    return (
        <>
            <div className="modal-remove">
                <strong>Dəqiq silmək istəyirsiniz?</strong>
                <div className="modal__btn-group mt-3">
                    <button type="button" className="btn btn-danger table__btn-style" onClick={removeUser}>Hə</button>
                    <button type="button" className="btn btn-success" onClick={closeModal}>Yox</button>
                </div>
            </div>
        </>
    )
}

ModalRemove.propTypes = {
    closeModal: PropTypes.func,
    removeUser:  PropTypes.func,    
}

export default ModalRemove