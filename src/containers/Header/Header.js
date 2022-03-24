import * as React from 'react';
import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from "react";
import {Button, ButtonGroup} from "reactstrap";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import {grey, lightBlue} from "@mui/material/colors";
import Grid from "@material-ui/core/Grid";
import logo from '../../assets/logo/Logoo.png';
import {GlobalContext} from '../../context/GlobalContext'
import Swal from 'sweetalert2'


export default function Header() {
    const {contacts, removeContact, editContact} = useContext(GlobalContext)

    function remove(id) {
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
                    `User ${user = contacts.filter(x => x.id == id), user[0].name} has been deleted.`,
                    'success'
                )
                removeContact(id)
            }

        })
    }


    function viewContact(id) {
        const currentUser = contacts.filter(u => u.id == id)
        Swal.fire({
                html: ` <div class="container bootstrap snippets bootdey">
<div class="panel-body inf-content">
    <div class="row">
      <div class="col-md-12">
            <strong>Information</strong><br>
            <div class="table-responsive">
            <table class="table table-user-information">
                <tbody>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-asterisk text-primary"></span>
                                Identificacion                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            ${currentUser[0].id}     
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-user  text-primary"></span>    
                                Name                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            ${currentUser[0].name}    
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-cloud text-primary"></span>  
                                Surname                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                           ${currentUser[0].surname}  
                        </td>
                    </tr>

                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-bookmark text-primary"></span> 
                                Father's Name                                                
                            </strong>
                        </td>
                        <td class="text-primary">
                            ${currentUser[0].fathersName}
                        </td>
                    </tr>


                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-eye-open text-primary"></span> 
                                Profession                                                 
                            </strong>
                        </td>
                        <td class="text-primary">
                            ${currentUser[0].profession}
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-envelope text-primary"></span> 
                                Email                                             
                            </strong>
                        </td>
                        <td class="text-primary">
                             ${currentUser[0].email}
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span class="glyphicon glyphicon-calendar text-primary"></span>
                                Gender                                               
                            </strong>
                        </td>
                        <td class="text-primary">
                           ${currentUser[0].gender}
                        </td>
                    </tr>                                  
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
</div>                                        `
            }
        )
    }

    return (
        <React.Fragment>
            {contacts.length > 0 ? (<div className='container'>
                <Grid container>
                    <Grid item xs={1}>
                        <img width={90} height={90} src={logo} alt="logo"/>
                    </Grid>
                    <Grid item xs={10}>
                        <h2 style={{color: 'orange'}} className="p-3 text-center">Contact List</h2>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to='/contacts/add'>
                            <Button variant="contained" color="success">
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
                                                    onClick={() => editContact(user.id)}>
                                            <EditIcon fontSize="inherit"/>
                                        </IconButton>
                                    </Link>
                                    <IconButton aria-label="info" size="medium"
                                                sx={{color: grey[500]}} tag={Link}
                                                onClick={() => viewContact(user.id)}>
                                        <InfoIcon fontSize="inherit"/>
                                    </IconButton>
                                </ButtonGroup>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>) : (<h4>No Data.</h4>)}
        </React.Fragment>
    );
}




