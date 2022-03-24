import React, {useContext, useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import {Box, Checkbox, FormControl, FormControlLabel, InputLabel, NativeSelect, Radio, RadioGroup} from "@mui/material";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import {GlobalContext} from "../../context/GlobalContext";
import {useParams} from "react-router";


function EditContact() {

    const navigate = useNavigate();
    const {contacts, editContact} = useContext(GlobalContext)
    const [selectedContact, setSelectedContact] = useState({
        id: null,
        newsletter: "",
        name: "",
        surname: "",
        fathersName: "",
        email: "",
        profession: "",
        gender: ""
    })

    let { id } = useParams();

    useEffect(() => {
        const contactId = id;
        const selectedContact = contacts.find(x => x.id === parseInt(contactId));
        setSelectedContact(selectedContact);
    }, [])

    const handleOnChange = (contactKey, val) => {
        setSelectedContact({...selectedContact, [contactKey]: val})
    }

    const onSubmit = e =>{
        e.preventDefault();
        editContact(selectedContact);
        navigate('/contacts')
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1>Edit Contact</h1>
                        <div className='main'>
                            <div className='form-container'>
                                <form autoComplete="off" className='form-group' onSubmit={onSubmit}>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label>Name</label>
                                            <input type="text" className="form-control" placeholder="Enter Name"
                                                   name="name" value={selectedContact.name} onChange={e => handleOnChange("name",e.target.value)}

                                            />
                                        </div>
                                        <div className='col-6'>
                                            <label>Surname</label>
                                            <input type="text" className="form-control" placeholder="Enter Surname"
                                                   name="surname" value={selectedContact.surname} onChange={e => handleOnChange("surname",e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-6'>
                                            <label>Father's Name</label>
                                            <input type="text" className="form-control"
                                                   placeholder="Enter Father's Name"
                                                   name="fathersName" value={selectedContact.fathersName} onChange={e => handleOnChange("fathersName",e.target.value)}
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter email"
                                                   value={selectedContact.email} onChange={e => handleOnChange("email",e.target.value)} />
                                        </div>
                                    </div>
                                    <br/>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel name="gender" id="Female"
                                                              onChange={e => handleOnChange("gender",e.target.value)}
                                                              value="female" control={<Radio/>} label="Female"/>
                                            <FormControlLabel name="gender" id="Male"
                                                              onChange={e => handleOnChange("gender",e.target.value)}
                                                              value="male" control={<Radio/>} label="Male"/>
                                            <FormControlLabel name="gender" id="Other"
                                                              onChange={e => handleOnChange("gender",e.target.value)}
                                                              value="other" control={<Radio/>} label="Other"/>
                                        </RadioGroup>
                                    </FormControl>
                                    <br/>
                                    <Box sx={{minWidth: 120}}>
                                        <FormControl>
                                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                                Profession
                                            </InputLabel>
                                            <NativeSelect
                                                defaultValue={'Developer'}
                                                inputProps={{
                                                    name: 'profession',
                                                    id: 'uncontrolled-native',
                                                }}
                                                onChange={e => handleOnChange("profession",e.target.value)}
                                            >
                                                <option id='developer' selected name='profession'>Developer</option>
                                                <option id='designer' name='profession'>Designer</option>
                                                <option id='teacher' name='profession'>Teacher</option>
                                                <option id='doctor' name='profession'>Doctor</option>
                                            </NativeSelect>
                                        </FormControl>
                                        <Checkbox
                                            sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                                        />
                                    </Box>
                                    <br/>
                                    <Grid item>
                                        <button onClick={editContact} type="submit" className='btn btn-success btn-md'>
                                            Edit
                                        </button>
                                    </Grid>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EditContact;

