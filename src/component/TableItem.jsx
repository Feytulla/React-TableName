import React from "react";

function TableItem({ users, openModalRemove, openModalRedakt}) {
    return (
        <>
            {
                users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.age}</td>
                            <td>
                                <button type="button" className="btn btn-success table__btn-style" data-id={index} onClick={openModalRedakt}>Redact</button>
                                <button type="button" className="btn btn-danger" data-id={index} onClick={openModalRemove}>&times;</button>
                            </td>
                        </tr>
                        
                    )
                })
            }
            
        </>
    )
}

export default TableItem