import * as React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import {Button, ButtonGroup} from "reactstrap";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import {grey, lightBlue} from "@mui/material/colors";
import Grid from "@material-ui/core/Grid";
import logo from '../../assets/logo/Logoo.png';
import {GlobalContext} from  '../../context/GlobalContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export default function Header() {
   const {contacts,removeContact} = useContext(GlobalContext)
    function remove(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                let user;
                Swal.fire(
                    'Deleted!',
                    `User ${user=contacts.filter(x => x.id == id),user[0].name} has been deleted.`,
                    'success'
                )
                removeContact(id)
            }

        })
    }
    return (
        <div className='container'>
            <Grid container>
                <Grid item xs={1} >
                    <img width={90} height={90}  src={logo} alt="logo"/>
                </Grid>
                <Grid item xs={10}>
                    <h2 style={{color:'orange'}} className="p-3 text-center">Contact List</h2>
                </Grid>
                <Grid item xs={1}>
                    <Link to='/contacts/add'  >
                        <Button  variant="contained" color="success">
                            Add
                        </Button>
                    </Link>
                </Grid>
            </Grid>
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
                    {contacts.map(user =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.fathersName}</td>
                            <td>{user.profession}</td>
                            <td>
                                <ButtonGroup>
                                    <IconButton aria-label="delete" size="medium"
                                             color="error"
                                             onClick={() => remove(user.id)}>
                                         <DeleteIcon fontSize="inherit"/>
                                    </IconButton>

                                    <Link to={`/contacts/edit/${user.id}`}>
                                        <IconButton aria-label="edit" size="medium"
                                                    sx={{color: lightBlue[600]}} tag={Link}
                                                    to={"/contact/" + user.id}>
                                            <EditIcon fontSize="inherit"/>
                                        </IconButton>
                                    </Link>
                                    <Link to={`/contacts/view/${user.id}`}>
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




