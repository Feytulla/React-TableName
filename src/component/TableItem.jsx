import React from "react";
import PropTypes from 'prop-types';

function TableItem({ users, openModalRemove, openModalRedakt }) {
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

TableItem.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    openModalRemove: PropTypes.func,
    openModalRedakt: PropTypes.func,
}

export default TableItem