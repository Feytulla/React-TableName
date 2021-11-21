import React, { useState } from "react";
import PropTypes from 'prop-types';

function ModalRedakt({ closeModalRedakt, onCreate, id, userss, info }) {



    const [name, setName] = useState(info.name);
    const [surname, setSurname] = useState(info.surname);
    const [age, setAge] = useState(info.age);
    const [use, setUse] = useState(userss);



    function submitHandler(e) {
        e.preventDefault()

        const user = {
            name,
            surname,
            age,
        }

        if (user.name.trim() && user.surname.trim() && user.age) {

            onCreate(user)
            setName('')
            setSurname('')
            setAge('')

        }
    }

    return (
        <>
            <div className="modal-redakt">
                <div className=" d-flex justify-content-center align-items-center mt-5 pt-5">
                    <form className='col-3 modal-redakt__container' onSubmit={submitHandler}>
                        <div className="form-group">
                            <label className='text-style mt-5 mb-2'>Ad </label>
                            <input type="text" className="form-control" placeholder="Ad" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className='text-style mt-4 mb-2'>Soyad</label>
                            <input type="text" className="form-control" placeholder="Soyad" value={surname} onChange={e => setSurname(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className='text-style mt-4 mb-2'>Yaş</label>
                            <input type="number" className="form-control" placeholder="Yaş" value={age} onChange={e => setAge(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success mt-4">Əlavə et</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="btn btn-dark mt-4" onClick={closeModalRedakt}>Close</button>
                    </form>
                </div>
                {
                    console.log(info)
                }
            </div>
        </>
    )
}

ModalRedakt.propTypes = {
    info: PropTypes.object.isRequired
}

export default ModalRedakt