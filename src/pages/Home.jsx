import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import TableItem from "../component/TableItem";
import ModalRemove from "../component/ModalRemove";
import Context from "../context";
import ModalRedakt from '..//component/ModalRedakt'

let removeUserId;
let redaktUserId;

function Home() {
    const [users, setUsers] = useState([])
    // const localStore = localStorage.getItem("users");
    const replaceBtn = document.querySelector('.modal-remove')
    const modalRedakt = document.querySelector('.modal-redakt')
    const [id, setId] = useState(redaktUserId)
    const [userss, setUserss] = useState('Hello Home Page')
    const [info, setInfo] = useState({})

    const [openModal, setOpenModal] = useState(false)





    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem("users")))
    }, [])
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])


    function openModalRemove(event) {
        removeUserId = event.target.dataset.id
        replaceBtn.style.display = "block";

        let replaceLeft =
            event.target.getBoundingClientRect().left -
            replaceBtn.getBoundingClientRect().width / 2.5;

        event.target.style.position = 'absolute'
        let replaceTop =
            event.target.offsetTop -
            replaceBtn.getBoundingClientRect().height / 0.9;

        replaceBtn.style.left = replaceLeft + "px";
        replaceBtn.style.top = replaceTop + "px";
    }

    function removeUser() {
        users.splice(removeUserId, 1)
        setUsers(
            users.map((user) => {
                return user
            })
        )
        localStorage.setItem('users', JSON.stringify(users))
        replaceBtn.style.display = "none";

    }

    function closeModal() {
        replaceBtn.style.display = "none";
    }

    function openModalRedakt(event) {
        setId(event.target.dataset.id)
        setInfo(users[event.target.dataset.id])
        // modalRedakt.style.display = "block";

        setOpenModal(true)
        
    }

    function closeModalRedakt() {
        setOpenModal(false)
    }

    function onCreate(userInfo) {
        setUsers(
            users.map((user, index) => {
                if (index == id) {
                    user = userInfo
                }
                return user
            })
        )
        localStorage.setItem('users', JSON.stringify(users))

    }


    return (

        <Context.Provider value={{ closeModal, removeUser }}>
            <div className='container'>
                <div className='header d-flex justify-content-center align-items-center pt-5'>
                    <h1>Istifadəçılər</h1>
                    <div className='header__btn'>
                        <Link to='/add' className="btn btn-success header__btn-style"> Əlavə et </Link>
                    </div>
                </div>
                <hr />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Ad</th>
                            <th scope="col">Soyad</th>
                            <th scope="col">Yaş</th>
                            <th scope="col">Əməliya</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableItem users={users} openModalRemove={openModalRemove} openModalRedakt={openModalRedakt} />
                    </tbody>
                </table>
                <ModalRemove />
                {
                    openModal ? <ModalRedakt closeModalRedakt={closeModalRedakt} onCreate={onCreate} id={id} userss={userss} info={info} /> : null
                }
                
            </div>
        </Context.Provider>
    )
}

export default Home