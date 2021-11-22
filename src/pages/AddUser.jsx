import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function AddUser() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [users, setUsers] = useState([]);

    function submitHandler(e) {
        e.preventDefault()

        const user = {
            name,
            surname,
            age,
        }

        if (user.name.trim() && user.surname.trim() && user.age) {
            setUsers(
                users.concat([user])
            )

            setName('')
            setSurname('')
            setAge('')
        }
    }

    useEffect(() => {
        if (localStorage.getItem("users")) {
            setUsers(
                users.concat(JSON.parse(localStorage.getItem("users")))
            )
        }
    }, [])

    useEffect(() => {
        if (users.length) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    })


    return (
        <div className="container d-flex justify-content-center align-items-center mt-5 pt-5">
            <form className='col-3' onSubmit={submitHandler}>
                <div className="form-group">
                    <label className='text-style mt-5 mb-2'>Ad</label>
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
                <button type="submit" className="btn btn-success mt-4">Əlavə et</button>
                <Link to='/' className="btn btn-secondary mt-4 from-btn"> Geri qayıd </Link>
            </form>
        </div>
    )
}

export default AddUser