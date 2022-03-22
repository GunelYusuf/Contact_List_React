import * as React from 'react';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import {ButtonGroup} from "reactstrap";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import {grey, lightBlue} from "@mui/material/colors";



export default function Header() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('contacts')));
    }, [])


    return (
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Father's Name</th>
                    <th>Profession</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map(user =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.fathersName}</td>
                        <td>{user.profession}</td>
                        <td>
                             <ButtonGroup>
                                 <Link to={`/contacts/delete/`}>
                                    <IconButton aria-label="delete" size="medium"
                                                color="error"
                                                onClick={() => this.remove(user.id)}>
                                        <DeleteIcon fontSize="inherit"/>
                                    </IconButton>
                                </Link>
                                <Link to={`/contacts/edit/${user.id}`}>
                                    <IconButton aria-label="edit" size="medium"
                                                sx={{color: lightBlue[600]}} tag={Link}
                                                to={"/contact/" + user.id}>
                                        <EditIcon fontSize="inherit"/>
                                    </IconButton>
                                </Link>
                                <Link to={`/contacts/view/contactId`}>
                                    <IconButton aria-label="info" size="medium"
                                                sx={{color: grey[500]}} tag={Link}
                                                to={"/contact/" + user.id}>
                                        <InfoIcon fontSize="inherit"/>
                                    </IconButton>
                                </Link>
                             </ButtonGroup>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        );
}




